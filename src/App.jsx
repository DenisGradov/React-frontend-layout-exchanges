import { useEffect, useRef, useState } from "react";
import "./App.css";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";
import { coins } from "./data/coinsInMenu";
function App() {
  const timer = useRef(0);
  const [coinList, setCoinList] = useState(coins);
  const [firstRequest, setFirstRequest] = useState(false);
  useEffect(() => {
    async function requestToApi() {
      const updatedCoinList = { ...coinList };

      try {
        for (let i in updatedCoinList) {
          const response = await fetch(
            `https://api.coingecko.com/api/v3/coins/${updatedCoinList[i]["api"]}`
          );
          const json = await response.json();

          console.log(json["market_data"]["price_change_percentage_24h"]);
          console.log(json["market_data"]["total_volume"]["btc"]);

          updatedCoinList[i]["price"] = parseFloat(
            json["market_data"]["current_price"]["usd"]
          ).toFixed(2);
          updatedCoinList[i]["change"] = parseFloat(
            json["market_data"]["price_change_percentage_24h"]
          ).toFixed(2);
          updatedCoinList[i]["volume"] = parseFloat(
            json["market_data"]["total_volume"]["btc"]
          ).toFixed(2);
        }

        setCoinList(updatedCoinList);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    if (!firstRequest) {
      requestToApi();
      setFirstRequest(true);
    }
    timer.current = setInterval(() => {
      console.log(coinList);
      requestToApi();
    }, 60000);

    return () => {
      clearTimeout(timer.current);
    };
  }, [firstRequest, coinList]);
  return (
    <div className="wrapper">
      <Body coinList={coinList} setCoinList={setCoinList} />
      <Footer />
    </div>
  );
}

export default App;
