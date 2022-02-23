import * as React from "react";
import Web3 from "web3";
import ContractBox from "./contract-box";
import { ABI, ADDRESS } from "constants/storage-contract";

function useStorageContract() {
  const [value, setValue] = React.useState<null | number>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [previousValues, setPreviousValues] = React.useState<number[]>([]);

  React.useEffect(() => {
    const fetchInitialValue = async () => {
      const web3 = new Web3((window as any).ethereum);
      const contract = new web3.eth.Contract(ABI as any, ADDRESS);
      const val = await contract.methods.value().call();
      return Number(val);
    };
    const fetchPreviousValues = async () => {
      const web3 = new Web3((window as any).ethereum);
      const contract = new web3.eth.Contract(ABI as any, ADDRESS);
      const events = await contract.getPastEvents("ValueUpdated", {
        fromBlock: 0
      });
      return events
        .map(e => Number(e.returnValues.value))
        .reduce((acc, value) => {
          if (acc.length > 0 && acc[acc.length - 1] === value) return acc;
          return [...acc, value];
        }, [] as number[]);
    };
    Promise.all([fetchInitialValue(), fetchPreviousValues()]).then(([initialValue, previousValues]) => {
      setValue(initialValue);
      setPreviousValues(previousValues);
      setIsLoading(false)
    });
  }, []);


  React.useEffect(() => {
    if (isLoading) return () => {}
    const web3 = new Web3((window as any).ethereum);
    const contract = new web3.eth.Contract(ABI as any, ADDRESS);
    
    const onValueUpdated = (_: unknown, event: any) => {
      if (!event) return;
      setPreviousValues(current => {
        const newValue = Number(event.returnValues.value);
        if (current[current.length - 1] === newValue) return current;
        return [...current, newValue];
      })
    }

    contract.events.ValueUpdated(undefined, onValueUpdated);
  }, [isLoading])

  const handleSubmit = async (e: React.FormEvent<Element>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const newValue = (e.target as any).elements["value"].value as string;
      if (!newValue) {
        return;
      }
      const web3 = new Web3((window as any).ethereum);
      const contract = new web3.eth.Contract(ABI as any, ADDRESS);
      const [from] = await web3.eth.getAccounts();
      await contract.methods.setValue(newValue).send({ from });
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

function Web3JsContractBox() {
  const { value, previousValues, isLoading, isSubmitting, handleSubmit } = useStorageContract();
  return (
    <ContractBox
      value={value}
      previousValues={previousValues}
      isSubmitting={isSubmitting}
      isLoading={isLoading}
      handleSubmit={handleSubmit}
    />
  );
}

export default Web3JsContractBox;
