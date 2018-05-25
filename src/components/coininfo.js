import React, { Component } from 'react';
import '../App.css';

class Coininfo extends Component {
    componentDidMount(){
        console.log(this.props, "COIN INFOR")
    }
    render(){
        return(
            <div>Hello this is from coin info</div>
        )
    }
}

export default Coininfo;