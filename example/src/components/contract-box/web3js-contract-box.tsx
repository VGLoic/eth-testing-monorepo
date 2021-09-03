import * as React from "react";
import Web3 from "web3";
import ContractBox from "./contract-box";
import { ABI, ADDRESS } from "constants/storage-contract";

function useStorageContract() {
  const [value, setValue] = React.useState<null | number>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchInitialValue = async () => {
      const web3 = new Web3((window as any).ethereum);
      const contract = new web3.eth.Contract(ABI as any, ADDRESS);
      const val = await contract.methods.value().call();
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
      const web3 = new Web3((window as any).ethereum);
      const contract = new web3.eth.Contract(ABI as any, ADDRESS);
      const [from] = await web3.eth.getAccounts();
      await contract.methods.setValue(newValue).send({ from });
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

function Web3JsContractBox() {
  const { value, isLoading, handleSubmit } = useStorageContract();
  return (
    <ContractBox
      value={value}
      isLoading={isLoading}
      handleSubmit={handleSubmit}
    />
  );
}

export default Web3JsContractBox;
