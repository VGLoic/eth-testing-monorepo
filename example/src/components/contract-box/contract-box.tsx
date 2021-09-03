import * as React from "react";
import "./contract-box.css";

type ContractBoxProps = {
  value: null | number;
  isLoading: boolean;
  handleSubmit: (e: React.FormEvent<Element>) => Promise<void>;
};
function ContractBox({ value, isLoading, handleSubmit }: ContractBoxProps) {
  return (
    <div className="contract-box">
      <div>Current value: {value}</div>
      <form className="contract-box-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="value-input">Value</label>
          <input id="value-input" name="value" type="number" min={0} />
        </div>
        <button type="submit" disabled={isLoading}>
          Change Value
        </button>
      </form>
    </div>
  );
}

export default ContractBox;
