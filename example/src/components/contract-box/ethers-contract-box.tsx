import * as React from "react";
import * as ethers from "ethers";
import ContractBox from "./contract-box";
import { ABI, ADDRESS } from "constants/storage-contract";

function useStorageContract() {
  const [value, setValue] = React.useState<null | number>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchInitialValue = async () => {
      const provider = new ethers.providers.Web3Provider(
        (window as any).ethereum
      );
      const contract = new ethers.Contract(ADDRESS, ABI, provider);
      const val = await contract.value();
      setValue(Number(val));
      setIsLoading(false);
    };
    fetchInitialValue();
  }, []);

  const handleSubmit = async (e: React.FormEvent<Element>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const newValue = (e.target as any).elements["value"].value as string;
      if (!newValue) {
        return;
      }
      const provider = new ethers.providers.Web3Provider(
        (window as any).ethereum
      );
      const signer = provider.getSigner();
      const contract = new ethers.Contract(ADDRESS, ABI, provider);
      const contractWithSigner = contract.connect(signer);
      await contractWithSigner.setValue(newValue).then((tx: any) => tx.wait());
      setValue(Number(newValue));
    } catch (err) {
      console.log("Oh no it failed :(. ", err);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    value,
    isLoading,
    handleSubmit,
  };
}

function EthersContractBox() {
  const { value, isLoading, handleSubmit } = useStorageContract();
  return (
    <ContractBox
      value={value}
      isLoading={isLoading}
      handleSubmit={handleSubmit}
    />
  );
}

export default EthersContractBox;
