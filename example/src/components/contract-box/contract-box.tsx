import * as React from "react";
import "./contract-box.css";

type ContractBoxProps = {
  value: null | number;
  previousValues: number[];
  isLoading: boolean;
  isSubmitting: boolean;
  handleSubmit: (e: React.FormEvent<Element>) => Promise<void>;
};
function ContractBox({ value, previousValues, isSubmitting, handleSubmit }: ContractBoxProps) {
  return (
    <div className="contract-box">
      <div className="contract-box-form-container">
        <div>Current value: {value}</div>
        <form className="contract-box-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="value-input">Value</label>
            <input id="value-input" name="value" type="number" min={0} />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Change Value
          </button>
        </form>
      </div>
      <div>
        <div>Previous values:</div>
        <ul>
          {previousValues.map((v, index) => <li key={index}>Previous value: {v}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default ContractBox;
