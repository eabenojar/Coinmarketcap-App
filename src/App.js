import React, { Component } from "react";
import "./App.css";
import Coins from "./components/coins";
import Globaldata from "./components/globaldata";
import Search from "./components/search";
import Coininfo from "./components/coininfo";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Main} />
        <Route path="/info" component={Coininfo} />
      </div>
    );
  }
}

class Main extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      globaldata: []
    };
    this.getCoinLimit = this.getCoinLimit.bind(this);
  }
  componentWillMount() {
    this.getGlobalData();
    fetch("https://api.coinmarketcap.com/v1/ticker/?limit=100")
      .then(response => response.json())
      .then(data => {
        // console.log(data, "before setState");
        this.setState({
          data: data
        });
      })
      .catch(error => {
        console.error(error);
      });
  }
  getGlobalData() {
    fetch(" https://api.coinmarketcap.com/v1/global/")
      .then(response => response.json())
      .then(data => {
        // console.log(data, "global data");
        this.setState({
          globaldata: data
        });
      });
  }
  getCoinLimit() {
    console.log("PRESSED FOR 25 COINS");
  }
  render() {
    console.log("MAIN staet", this.props);
    return (
      <div>
        <Globaldata globaldata={this.state.globaldata} />
        {/* <Search getCoinLimit = {this.getCoinLimit}/> */}
        <Coins
          data={this.state}
          props={this.props}
          // name = {this.state.name}
          // price_usd = {this.state.price_usd}
          // rank = {this.state.rank}
          // symbol = {this.state.symbol}
          // market_cap_usd = {this.state.market_cap_usd}
          // percent_change_24h = {this.state.percent_change_24h}
        />
      </div>
    );
  }
}

export default App;
