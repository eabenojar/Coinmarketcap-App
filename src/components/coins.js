import React, { Component } from "react";
import "../App.css";
// import btc from "cryptocurrency-icons/32/color/btc.png";

class Coins extends Component {
  constructor() {
    super();
    this.state = {
      name: undefined,
      price_usd: undefined,
      rank: undefined,
      symbol: undefined,
      market_cap_usd: undefined,
      percent_change_24h: undefined
    };
  }
  componentDidMount() {
    console.log(this.props, "COINS PAGE");
  }
  getCoinInfo(allcoins) {
    console.log("TESTING GET COIN", allcoins);
    this.props.props.history.push({
      pathname: "/info",
      allcoins
    });
  }
  render() {
    // console.log(this.props.data, "REnder PAGE");
    return (
      <div>
        <h1 className="main-title">Coin Market Cap</h1>
        <div className="container">
          <div className="coin-row-header">
            <div className="row">
              <div className="col-lg-1 col-md-1 col-sm-1">
                <p className="coin-row-header-title">Rank</p>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-2">
                <p className="coin-row-header-title">Name</p>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-2">
                <p className="coin-row-header-title">Symbol</p>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-2">
                <p className="coin-row-header-title">Price</p>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3">
                <p className="coin-row-header-title marketCap">Market Cap</p>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-2">
                <p className="coin-row-header-title">24H Change</p>
              </div>
            </div>
          </div>
          {this.props.data.data.map(allcoins => {
            return (
              <div
                className="coin-row"
                key={allcoins.name}
                onClick={() => this.getCoinInfo(allcoins)}
              >
                <div className="row">
                  <div className="col-lg-1 col-md-1 col-sm-1">
                    <p className="coin-row-coins">{allcoins.rank}</p>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-2">
                    {allcoins.symbol === "VET" ||
                    allcoins.symbol === "HOT" ||
                    allcoins.symbol === "AOA" ||
                    allcoins.symbol === "DAI" ? (
                      <img
                        src={"#"}
                        alt="No Image Found"
                        className="img-responsive"
                      />
                    ) : (
                      <img
                        src={require(`cryptocurrency-icons/32/color/${allcoins.symbol.toLowerCase()}.png`)}
                        alt="No Image Found"
                        className="img-responsive"
                      />
                    )}

                    <p className="coin-row-coins">{allcoins.name}</p>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-2">
                    <p className="coin-row-coins">{allcoins.symbol}</p>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-2">
                    <p className="coin-row-coins">${allcoins.price_usd}</p>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3">
                    <p className="coin-row-coins-marketCap">
                      $
                      {allcoins.market_cap_usd
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </p>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-2">
                    <p className="coin-row-coins-24H">
                      {allcoins.percent_change_24h} %
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Coins;
