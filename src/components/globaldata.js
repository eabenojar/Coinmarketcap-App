import React, { Component } from "react";

class Globaldata extends Component {
  constructor() {
    super();
    this.state = {
      total_market_cap_usd: undefined,
      total_24h_volume_usd: undefined,
      bitcoin_percentage_of_market_cap: undefined,
      active_markets: undefined
    };
  }
  renderGlobalData() {
    if (this.props.globaldata.total_market_cap_usd) {
      return (
        <div className="container">
          <ul className="row">
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
              <div className="navbar-grid">
                <li className="navbar-titles">TOTAL MARKET CAP</li>
                <li className="navbar-titles-value">
                  $
                  {this.props.globaldata.total_market_cap_usd
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </li>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
              <div className="navbar-grid">
                <li className="navbar-titles">24H VOLUME</li>
                <li className="navbar-titles-value">
                  ${" "}
                  {this.props.globaldata.total_24h_volume_usd
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </li>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
              <div className="navbar-grid">
                <li className="navbar-titles">BTC DOMINANCE</li>
                <li className="navbar-titles-value">
                  {this.props.globaldata.bitcoin_percentage_of_market_cap}%
                </li>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
              <div className="navbar-grid">
                <li className="navbar-titles">ACTIVE MARKETS</li>
                <li className="navbar-titles-value">
                  {this.props.globaldata.active_markets}
                </li>
              </div>
            </div>
          </ul>
        </div>
      );
    } else {
      return <div />;
    }
  }
  render() {
    return <div className="navbar-main">{this.renderGlobalData()}</div>;
  }
}

export default Globaldata;
