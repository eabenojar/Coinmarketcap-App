import React, { Component } from 'react';
import '../css/coininfo.css';
import {Line} from 'react-chartjs-2';
import axios from 'axios';

class Coininfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            lineData: {
                    labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
                    datasets: [{ 
                        data: [86,114,106,106,107,111,133,221,783,2478],
                        label: "Africa",
                        borderColor: "#3e95cd",
                        fill: false
                    }
                    ]
                }
        }
    }
    componentDidMount(){
        console.log(this.props, "COIN INFOR");
        // Make a request for a user with a given ID
            axios.get('https://min-api.cryptocompare.com/data/histominute?fsym=BTC&tsym=USD&limit=10&aggregate=3&e=CCCAGG')
            .then(function (response) {
            console.log(response.data.Data, 'INSIDE DIDMOUNT');
            })
            .catch(function (error) {
            console.log(error);
            });
    }
    renderCoinInfo(){
        const coin = this.props.location.allcoins;
        console.log('COIN', coin)
        var volume = '24h_volume_usd';
        if(coin){
            return(
                <div className="coinInfo-top-container">
                   <div className="coinInfo-row">
                        <div className="coinInfo-sub-row">
                                {coin.id}
                        </div>
                        <div className="coinInfo-sub-row">
                                {coin.price_usd}
                        </div>
                   </div>
                   <div className="coinInfo-row">
                        <div className="coinInfo-sub-row">
                                {coin.market_cap_usd}
                        </div>
                        <div className="coinInfo-sub-row">
                                {coin[volume]}
                        </div>
                   </div>
                   <div className="coinInfo-row">
                        <div className="coinInfo-sub-row">
                                {coin.available_supply}
                        </div>
                        <div className="coinInfo-sub-row">
                                {coin.max_supply}
                        </div>
                   </div>
                  
                </div>
            )
        }
    }
    render(){
        
        return(
            <div className="coinInfoMain">
                {this.renderCoinInfo()}
                <div className="coinInfo-bottom-container">
                <Line data={this.state.lineData} />
                </div>
            </div>
        )
    }
}

export default Coininfo;