import inch from "./img/coins/1inch.png";
import btc from "./img/coins/BTC.png";
import eth from "./img/coins/eth.png";
import bnb from "./img/coins/bnb.png";
import busd from "./img/coins/busd.png";
export const coins = {
  0: {
    title: "1inch",
    short: "1INCH",
    img: inch,
    price: 30000,
    change: -15,
    volume: 2000000,
    api: "1inch",
    id: 0,
  },
  1: {
    title: "Bitcoin",
    short: "BTC",
    img: btc,
    price: 30000,
    change: 15,
    volume: 2000000,
    api: "bitcoin",
    id: 1,
  },
  2: {
    title: "Ethereum",
    short: "ETH",
    img: eth,
    price: 30000,
    change: 15,
    volume: 2000000,
    api: "ethereum",
    id: 2,
  },
  3: {
    title: "Binance Coin",
    short: "BNB",
    img: bnb,
    price: 30000,
    change: 15,
    volume: 2000000,
    api: "binancecoin",
    id: 3,
  },
  4: {
    title: "Binance USD",
    short: "BUSD",
    img: busd,
    price: 30000,
    change: 15,
    volume: 2000000,
    api: "binance-usd",
    id: 4,
  },
};
