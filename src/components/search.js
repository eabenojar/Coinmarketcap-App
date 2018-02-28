import React, {Component} from 'react';

class Search extends Component {
  // constructor(){
  //   super()
  //   this.getCoinLimit = this.getCoinLimit.bind(this);
  // }
  getCoinLimit(e){
    console.log(e.target.value);
    console.log("PRESSED FOR 25 COINS")
  }
  render(){
      // console.log(this.props,"SEARCH")
    return (
      <div className="container">
        <div className="search-bar">
          <form className="search-bar-form">
            <input  className="search-bar-input" type="text" name="name" placeholder="Search Coin ( Enter entire name e.g bitcoin or ethereum) "/>
          </form>
          <div className="dropdown ">
            <button className="btn dropdown-toggle dropdown-button" type="button" data-toggle="dropdown">Limit
              <span className="caret"> </span></button>
              <ul className="dropdown-menu">
                <li onClick={this.getCoinLimit} type="number" value="helo"><a href="#">25 COINS</a></li>
                <li><a href="#" name="75">75 COINS</a></li>
                <li><a href="#" name="100">100 COINS</a></li>
              </ul>
          </div>
          <div className="dropdown">
            <button className="btn dropdown-toggle dropdown-button" type="button" data-toggle="dropdown">Change
              <span className="caret"> </span></button>
              <ul className="dropdown-menu">
                <li><a href="#">1 HOURS</a></li>
                <li><a href="#">24 HOURS</a></li>
                <li><a href="#">7 DAYS</a></li>
              </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Search;