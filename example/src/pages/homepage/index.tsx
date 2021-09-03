import Header from "components/header";
import { EthersContractBox, Web3JsContractBox } from "components/contract-box";
import "./homepage.css";

function Homepage() {
  return (
    <div className="homepage">
      <Header />
      <EthersContractBox />
      <Web3JsContractBox />
    </div>
  );
}

export default Homepage;
