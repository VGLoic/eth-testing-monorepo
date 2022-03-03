import * as React from "react";
import * as ethers from "ethers";
import ContractBox from "./contract-box";
import { ABI, ADDRESS } from "constants/storage-contract";

function useStorageContract() {
  const [value, setValue] = React.useState<null | number>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [previousValues, setPreviousValues] = React.useState<number[]>([]);

  React.useEffect(() => {
    const fetchInitialValue = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(ADDRESS, ABI, provider);
      const val = await contract.value();
      return Number(val);
    };
    const fetchPreviousValues = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(ADDRESS, ABI, provider);
      const events = await contract.queryFilter(
        contract.filters.ValueUpdated()
      );
      return events
        .map((e) => Number(e.args?.value.toString()))
        .reduce((acc, value) => {
          if (acc.length > 0 && acc[acc.length - 1] === value) return acc;
          return [...acc, value];
        }, [] as number[]);
    };
    Promise.all([fetchInitialValue(), fetchPreviousValues()]).then(
      ([initialValue, previousValues]) => {
        setPreviousValues(previousValues);
        setValue(initialValue);
        setIsLoading(false);
      }
    );
  }, []);

  React.useEffect(() => {
    if (isLoading) return () => {};

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(ADDRESS, ABI, provider);

    const onValueUpdated = (value: ethers.BigNumber) => {
      setPreviousValues((current) => {
        const newValue = Number(value);
        if (current[current.length - 1] === newValue) return current;
        return [...current, newValue];
      });
    };

    contract.on("ValueUpdated", onValueUpdated);
    return () => {
      contract.off("ValueUpdated", onValueUpdated);
    };
  }, [isLoading]);

  const handleSubmit = async (e: React.FormEvent<Element>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const newValue = (e.target as any).elements["value"].value as string;
      if (!newValue) {
        return;
      }
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(ADDRESS, ABI, provider);
      const contractWithSigner = contract.connect(signer);
      await contractWithSigner.setValue(newValue).then((tx: any) => tx.wait());
      setValue(Number(newValue));
    } catch (err) {
      console.log("Oh no it failed :(. ", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    value,
    previousValues,
    isSubmitting,
    isLoading,
    handleSubmit,
  };
}

function EthersContractBox() {
  const { value, previousValues, isLoading, isSubmitting, handleSubmit } =
    useStorageContract();
  return (
    <ContractBox
      previousValues={previousValues}
      value={value}
      isSubmitting={isSubmitting}
      isLoading={isLoading}
      handleSubmit={handleSubmit}
    />
  );
}

export default EthersContractBox;
