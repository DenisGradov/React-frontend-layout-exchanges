/* eslint react/prop-types: 0 */
import useWindowSize from "../../../hooks/useWindowSize";
import styles from "./main.module.css";
import button from "../../../data/img/button.png";
import ourApp from "../../../data/img/home-img.png";
import bg from "../../../data/img/bg.png";
import { RiMailLine, RiArrowUpLine } from "react-icons/ri";
import { useState } from "react";
import binance from "../../../data/img/partners/binance.png";
import bitfinex from "../../../data/img/partners/bitfinex.svg";
import bybit from "../../../data/img/partners/bybit.svg";
import coinbase from "../../../data/img/partners/coinbase.svg";
import crypto from "../../../data/img/partners/crypto.svg";
import kraken from "../../../data/img/partners/kraken.svg";

import coins from "../../../data/img/about/coins-swap-01.svg";
import card from "../../../data/img/about/credit-card-lock.svg";
import eye from "../../../data/img/about/eye.svg";
import lock from "../../../data/img/about/lock-01.svg";
import message from "../../../data/img/about/message-dots-circle.svg";
import rocket from "../../../data/img/about/rocket-02.svg";

function Main({ coinList, setCoinList }) {
  const { width } = useWindowSize();
  const [allAssets, setAllAssets] = useState(false);
  const [sort, setSort] = useState(false);

  function sortFunction(how) {
    const newCoins = { ...coinList };
    const sortedArray = Object.values(newCoins).sort((a, b) =>
      sort
        ? parseFloat(a[how]) - parseFloat(b[how])
        : parseFloat(b[how]) - parseFloat(a[how])
    );

    const sortedObj = sortedArray.reduce((acc, val, index) => {
      acc[index] = val;
      return acc;
    }, {});
    console.log(sortedObj);
    setSort((sort) => !sort);
    setCoinList(sortedObj);
  }
  return (
    <>
      {width > 1 && (
        <>
          <div className={styles.topBaner}>
            <div className={styles.topBanerLeft}>
              <a href="#" className={styles.topBanerLeftButton}>
                <img src={button} className={styles.topBanerLeftButtonImg} />
              </a>
              <h2 className={styles.topBanerLeftDescription}>
                Buy, trade and store cryptocurrencies
              </h2>
              <div className={styles.topBanerLeftSignIn}>
                <div className={styles.inputBox}>
                  <input
                    className={styles.input}
                    placeholder="Example@gmail.com"
                  ></input>
                  <h2 className={styles.inputIcon}>{<RiMailLine />}</h2>
                </div>
                <a href="#" className={styles.blueButton}>
                  Sign in
                </a>
                <div className={styles.topBanerRightEffect1}></div>
              </div>
            </div>
            <div className={styles.topBanerRight}>
              <img src={ourApp} className={styles.topBanerRightOurApp} />
              <img src={bg} className={styles.topBanerRightbg} />
              <div className={styles.topBanerRightEffect2}></div>
            </div>
          </div>
          <div className={styles.coinsBg}>
            <div className={styles.coins}>
              <div className={styles.coinsBox}>
                <div className={styles.coinsBoxTable}>
                  <div className={styles.coinsBoxTableTop}>
                    <div className={styles.coinsBoxTableTopLeft}>
                      <h2
                        onClick={() => sortFunction("id")}
                        className={styles.coinsBoxTableTopLeftText}
                      >
                        Asset
                      </h2>
                    </div>
                    <div className={styles.coinsBoxTableTopRight}>
                      <h2
                        onClick={() => sortFunction("price")}
                        className={styles.coinsBoxTableTopRightText}
                      >
                        Price
                      </h2>

                      {width > 676 && (
                        <h2
                          onClick={() => sortFunction("change")}
                          className={styles.coinsBoxTableTopRightText}
                        >
                          Change
                        </h2>
                      )}
                      {width > 903 && (
                        <h2
                          onClick={() => sortFunction("volume")}
                          className={styles.coinsBoxTableTopRightText}
                        >
                          Volume
                        </h2>
                      )}
                    </div>
                  </div>
                  <div id="coins" className={styles.coinsBoxTableBottom}>
                    {Object.values(coinList)
                      .slice(0, allAssets ? Object.values(coinList).length : 3)
                      .map((i) => {
                        return (
                          <div
                            className={styles.coinsBoxTableBottomItem}
                            key={i.title}
                            name="item"
                          >
                            <div className={styles.coinsBoxTableBottomLeft}>
                              <img
                                className={styles.coinsBoxTableBottomLeftImg}
                                src={i.img}
                              />
                              <h2
                                className={styles.coinsBoxTableBottomLeftTitle}
                              >
                                {i.title}
                              </h2>
                              <h2
                                className={
                                  styles.coinsBoxTableBottomLeftShortTitle
                                }
                              >
                                {i.short}
                              </h2>
                            </div>
                            <div className={styles.coinsBoxTableBottomRight}>
                              <h2
                                className={styles.coinsBoxTableBottomRightText}
                              >
                                <span>$</span>
                                {`${parseFloat(i.price)}`}
                              </h2>
                              {width > 676 && (
                                <h2
                                  style={
                                    i.change < 1
                                      ? { color: "#F94B55" }
                                      : { color: "#58F0A7" }
                                  }
                                  className={
                                    styles.coinsBoxTableBottomRightText
                                  }
                                >
                                  {`${i.change}`}
                                  <span>%</span>
                                </h2>
                              )}

                              {width > 903 && (
                                <h2
                                  className={
                                    styles.coinsBoxTableBottomRightText
                                  }
                                >
                                  {`${i.volume}`}
                                  <span>M</span>
                                </h2>
                              )}

                              {width > 526 && (
                                <button
                                  className={
                                    styles.coinsBoxTableBottomRightButton
                                  }
                                >
                                  Trade
                                </button>
                              )}
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
                <div className={styles.coinsBoxButton}>
                  <button
                    onClick={() => {
                      setAllAssets((assets) => !assets);
                    }}
                    className={styles.coinsBoxButtonAssets}
                  >
                    {!allAssets ? "All assets" : "Back"}
                  </button>
                  {allAssets && (
                    <a href="#coins" className={styles.coinsBoxButtonUp}>
                      {<RiArrowUpLine />}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className={styles.partners}>
            <div className={styles.partnersLeft}>
              <h2 className={styles.partnersLeftTitle}>
                Bitles is your reliable guide in the world of digital assets
              </h2>
              <h2 className={styles.partnersLeftDescription}>
                The Bitles app is a comprehensive solution for trading digital
                assets. Buy and sell cryptocurrencies quickly and openly,
                comfortably and safely from anywhere in the world.
              </h2>
            </div>
            <div className={styles.partnersRight}>
              <div className={styles.partnersRightImgBlock}>
                <a target="_blank" rel="noreferrer" href="binance.com">
                  <img
                    src={binance}
                    className={styles.partnersRightImgBlockImg}
                  />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.bitfinex.com/"
                >
                  <img
                    src={bitfinex}
                    className={styles.partnersRightImgBlockImg}
                  />
                </a>
                <a target="_blank" rel="noreferrer" href="bybit.com">
                  <img
                    src={bybit}
                    className={styles.partnersRightImgBlockImg}
                  />
                </a>
              </div>
              <div className={styles.partnersRightImgBlock}>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.coinbase.com"
                >
                  <img
                    src={coinbase}
                    className={styles.partnersRightImgBlockImg}
                  />
                </a>
                <a target="_blank" rel="noreferrer" href="https://crypto.com/">
                  {" "}
                  <img
                    src={crypto}
                    className={styles.partnersRightImgBlockImg}
                  />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.kraken.com/"
                >
                  <img
                    src={kraken}
                    className={styles.partnersRightImgBlockImg}
                  />
                </a>
              </div>
            </div>
            <div className={styles.partnersEffect}>s</div>
          </div>
          <div className={styles.aboutBg}>
            <div className={styles.about}>
              <div className={styles.aboutItem}>
                <div className={styles.aboutItemImgBlock}>
                  <img src={card} className={styles.aboutItemImgBlockImg} />
                </div>
                <h2 className={styles.aboutItemTitle}>
                  User Safe Asset Fund (SAFU)world.
                </h2>
                <h2 className={styles.aboutItemDescription}>
                  Bitlist holds 10% of all trading fees in a protected asset
                  fund to protect a portion of user funds.
                </h2>
              </div>
              <div className={styles.aboutItem}>
                <div className={styles.aboutItemImgBlock}>
                  <img src={eye} className={styles.aboutItemImgBlockImg} />
                </div>
                <h2 className={styles.aboutItemTitle}>User Access Control</h2>
                <h2 className={styles.aboutItemDescription}>
                  Personalized access control allows you to limit the devices
                  and addresses that can access your account.
                </h2>
              </div>
              <div className={styles.aboutItem}>
                <div className={styles.aboutItemImgBlock}>
                  <img src={lock} className={styles.aboutItemImgBlockImg} />
                </div>
                <h2 className={styles.aboutItemTitle}>
                  Improved data encryption
                </h2>
                <h2 className={styles.aboutItemDescription}>
                  Your transaction data is encrypted - only you can access your
                  personal data.
                </h2>
              </div>
              <div className={styles.aboutItem}>
                <div className={styles.aboutItemImgBlock}>
                  <img src={message} className={styles.aboutItemImgBlockImg} />
                </div>
                <h2 className={styles.aboutItemTitle}>Support 24/7</h2>
                <h2 className={styles.aboutItemDescription}>
                  24/7 real-time support is always ready to help you.
                </h2>
              </div>
              <div className={styles.aboutItem}>
                <div className={styles.aboutItemImgBlock}>
                  <img src={rocket} className={styles.aboutItemImgBlockImg} />
                </div>
                <h2 className={styles.aboutItemTitle}>
                  Fast replineshments and withdraws
                </h2>
                <h2 className={styles.aboutItemDescription}>
                  Transfer funds to and from your accounts quickly and easily.
                </h2>
              </div>
              <div className={styles.aboutItem}>
                <div className={styles.aboutItemImgBlock}>
                  <img src={coins} className={styles.aboutItemImgBlockImg} />
                </div>
                <h2 className={styles.aboutItemTitle}>
                  Comfortable P2P platform
                </h2>
                <h2 className={styles.aboutItemDescription}>
                  Top up your account in any convenient way on the P2P platform
                  at favorable rates.
                </h2>
              </div>
            </div>
          </div>
          <div className={styles.bottomBaner}>
            <h2 className={styles.bottomBanerTitle}>
              Register your account now and start to trade
            </h2>
            <div className={styles.bottomBanerSignIn}>
              <div className={styles.inputBox}>
                <input
                  className={styles.input}
                  placeholder="Example@gmail.com"
                ></input>
                <h2 className={styles.inputIcon}>{<RiMailLine />}</h2>
              </div>
              <a href="#" className={styles.blueButton}>
                Sign in
              </a>
              <div className={styles.bottomBanerEffect1}></div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Main;
