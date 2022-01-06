import "./App.css";
import CollectionCard from "./components/CollectionCard.js/CollectionCard";
import Header from "./components/Header/Header";
import bandanaPunk from "./assets/punks/5.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import PunkList from "./components/PunkList/PunkList";
import Main from "./components/Main/Main";

function App() {
  const [punkListData, setPunkListData] = useState([]);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0x68857ad37f4144f350A7b1D08419E6c5418Bb90e&order_direction=asc"
      );
      console.log(openseaData.data.assets);
      setPunkListData(openseaData.data.assets);
    };
    return getMyNfts();
  }, []);

  return (
    <div className="app">
      <Header />
      <Main />
      <PunkList punkListData={punkListData} />
    </div>
  );
}

export default App;
