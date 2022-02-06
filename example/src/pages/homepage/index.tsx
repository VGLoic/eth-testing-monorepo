import Header from "components/header";
import { EthersContractBox, Web3JsContractBox } from "components/contract-box";
import "./homepage.css";

function Homepage() {
  const showEthersContractBox = Math.floor(Math.random()) * 1000 % 2 === 0
  return (
    <div className="homepage">
      <Header />
      {showEthersContractBox
        ? <EthersContractBox />
        : <Web3JsContractBox />
      }
    </div>
  );
}

export default Homepage;
