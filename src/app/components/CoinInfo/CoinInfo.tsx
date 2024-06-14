/** @format */
"use client";
import "./CoinInfo.css";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { Sparklines, SparklinesLine } from "react-sparklines";
import {
  FaTwitter,
  FaGlobe,
  FaWpexplorer,
  FaReddit,
  FaGithub,
} from "react-icons/fa";
import DOMPurify from "dompurify";
import Image from "next/image";

const CoinInfo = () => {
  const params = useParams();
  const coinId = params.coinId;

  function paramsMotion(params) {
    if (params === "binance-coin") {
      return "binancecoin";
    } else if (params === "quant") {
      return "quant-network";
    } else if (params === "trueusd") {
      return "true-usd";
    } else return params;
  }

  const [ticker, setTicker] = useState({});

  const url = `https://api.coingecko.com/api/v3/coins/${paramsMotion(
    coinId,
  )}?localization=false&sparkline=true`;

  useEffect(() => {
    if (coinId) {
      axios
        .get(url)
        .then((response) => {
          setTicker(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [coinId]);

  return (
    <div className="coin-info">
      <div className="container">
        {/*  */}
        <div className="main-header">
          {ticker.image ? (
            <Image
              className="main-logo"
              src={ticker.image.large}
              alt={ticker.name}
              width={50}
              height={50}
            />
          ) : null}{" "}
          <div>
            <h1>{ticker.name} price</h1>
            <span>
              {ticker.symbol ? (
                <span>{ticker.symbol.toUpperCase()}/USD</span>
              ) : null}
            </span>
          </div>
        </div>
        {/*  */}
        <div className="main-stats">
          <div className="stats-left">
            <div>
              <div className="stats-stop">
                {ticker.market_data ? (
                  <span className="stats-top-title">
                    ${ticker.market_data.current_price.usd.toLocaleString()}
                  </span>
                ) : null}
                <span>7 Day</span>
              </div>
              <div>
                <Sparklines data={ticker.market_data?.sparkline_7d.price}>
                  <SparklinesLine color="teal" />
                </Sparklines>
              </div>
              <div className="stats-market">
                <div>
                  <span className="stats-title-color">Market Cap</span>
                  {ticker.market_data ? (
                    <span>
                      ${ticker.market_data.market_cap.usd.toLocaleString()}
                    </span>
                  ) : null}
                </div>
                <div className="stats-volume">
                  <span className="stats-title-color">Volume</span>
                  {ticker.market_data ? (
                    <span>
                      ${ticker.market_data.total_volume.usd.toLocaleString()}
                    </span>
                  ) : null}
                </div>
              </div>
              <div className="stats-market">
                <div>
                  <span className="stats-title-color">24h High</span>
                  {ticker.market_data ? (
                    <span>
                      ${ticker.market_data.high_24h.usd.toLocaleString()}
                    </span>
                  ) : null}
                </div>
                <div>
                  <span className="stats-title-color">24h Low</span>
                  {ticker.market_data ? (
                    <span>
                      ${ticker.market_data.low_24h.usd.toLocaleString()}
                    </span>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          <div className="stats-right">
            <div>
              <h3>Market Stats</h3>
              <div className="stats-market-right">
                <div>
                  <span className="stats-title-color">Market Rank</span>
                  {ticker.market_cap_rank}
                </div>
                <div>
                  <span className="stats-title-color">Hashing algorithm</span>
                  {ticker.hashing_algorithm ? (
                    <span>{ticker.hashing_algorithm}</span>
                  ) : null}
                </div>
                <div className="stats-volume">
                  <span className="stats-title-color">Trust Score</span>
                  {ticker.liquidity_score ? (
                    <span>{ticker.liquidity_score.toFixed(2)}</span>
                  ) : null}
                </div>
              </div>
              {/* TODO Fix the toFixed() error */}
              <div className="stats-market-right">
                <div>
                  <span className="stats-title-color">Price Change(24h)</span>
                  {ticker.market_data
                    ?.price_change_percentage_24h_in_currency ? (
                    <span
                      className={
                        ticker.market_data
                          .price_change_percentage_24h_in_currency.usd > 0
                          ? "coin-percent green"
                          : "coin-percent red"
                      }
                    >
                      {ticker.market_data.price_change_percentage_24h_in_currency.usd.toFixed(
                        1,
                      )}
                      %
                    </span>
                  ) : null}
                </div>
                <div>
                  <span className="stats-title-color">Price Change(7d)</span>
                  {ticker.market_data
                    ?.price_change_percentage_7d_in_currency ? (
                    <span
                      className={
                        ticker.market_data
                          .price_change_percentage_7d_in_currency.usd > 0
                          ? "coin-percent green"
                          : "coin-percent red"
                      }
                    >
                      {ticker.market_data.price_change_percentage_7d_in_currency.usd.toFixed(
                        1,
                      )}
                      %
                    </span>
                  ) : null}
                </div>
                <div className="stats-volume">
                  <span className="stats-title-color">Price Change(14d)</span>
                  {ticker.market_data
                    ?.price_change_percentage_14d_in_currency ? (
                    <span
                      className={
                        ticker.market_data
                          .price_change_percentage_14d_in_currency.usd > 0
                          ? "coin-percent green"
                          : "coin-percent red"
                      }
                    >
                      {ticker.market_data.price_change_percentage_14d_in_currency.usd.toFixed(
                        1,
                      )}
                      %
                    </span>
                  ) : null}
                </div>
              </div>
              <div className="stats-market-right">
                <div>
                  <span className="stats-title-color">Price Change(30d)</span>
                  {ticker.market_data
                    ?.price_change_percentage_30d_in_currency ? (
                    <span
                      className={
                        ticker.market_data
                          .price_change_percentage_30d_in_currency.usd > 0
                          ? "coin-percent green"
                          : "coin-percent red"
                      }
                    >
                      {ticker.market_data.price_change_percentage_30d_in_currency.usd.toFixed(
                        1,
                      )}
                      %
                    </span>
                  ) : null}
                </div>
                <div>
                  <span className="stats-title-color">Price Change(60d)</span>
                  {ticker.market_data
                    ?.price_change_percentage_60d_in_currency ? (
                    <span
                      className={
                        ticker.market_data
                          .price_change_percentage_60d_in_currency.usd > 0
                          ? "coin-percent green"
                          : "coin-percent red"
                      }
                    >
                      {ticker.market_data?.price_change_percentage_60d_in_currency.usd.toFixed(
                        1,
                      )}
                      %
                    </span>
                  ) : null}
                </div>
                <div className="stats-volume">
                  <span className="stats-title-color">Price Change(1y)</span>
                  {ticker.market_data
                    ?.price_change_percentage_1y_in_currency ? (
                    <span
                      className={
                        ticker.market_data
                          .price_change_percentage_1y_in_currency.usd > 0
                          ? "coin-percent green"
                          : "coin-percent red"
                      }
                    >
                      {ticker.market_data?.price_change_percentage_1y_in_currency?.usd?.toFixed(
                        1,
                      )}
                      %
                    </span>
                  ) : null}
                </div>
              </div>
              <div className="stats-market-right-social">
                <div>
                  {ticker.links?.homepage[0] ? (
                    <a
                      href={ticker.links.homepage[0]}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGlobe className="social-icon" />
                    </a>
                  ) : null}
                </div>
                <div>
                  {ticker.links?.twitter_screen_name ? (
                    <a
                      href={
                        "https://twitter.com/" +
                        `${ticker.links.twitter_screen_name}`
                      }
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaTwitter className="social-icon" />
                    </a>
                  ) : null}
                </div>
                <div>
                  {ticker.links?.subreddit_url ? (
                    <a
                      href={ticker.links.subreddit_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaReddit className="social-icon" />
                    </a>
                  ) : null}
                </div>
                <div>
                  {ticker.links?.homepage[0] ? (
                    <a
                      href={ticker.links.blockchain_site[0]}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaWpexplorer className="social-icon" />
                    </a>
                  ) : null}
                </div>
                <div>
                  {ticker.links?.repos_url.github[0] ? (
                    <a
                      href={ticker.links?.repos_url.github[0]}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub className="social-icon" />
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          {/* Description */}
        </div>
        <div className="main-stats-content">
          <div className="about">
            <h3> About</h3>
            <span
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  ticker.description ? ticker.description.en : "",
                ),
              }}
            ></span>
          </div>
        </div>
      </div>
      <p></p>
    </div>
  );
};

export default CoinInfo;
