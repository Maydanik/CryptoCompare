import React, { Component } from 'react';
// import AllCoins from './coinsList.json';
import HeaderComponent from '../../components/Header';
import SearchComponent from '../../components/Search';
import CoinsList from '../../components/CoinsList';
import './Coins.css';

class Coins extends Component {
    state = {
        // coinsList: Object.keys(AllCoins.Data).slice(0, 21).map(key => AllCoins.Data[key]),
        coinsList: [],
        search: '',
    };

    componentDidMount() {
            fetch('https://min-api.cryptocompare.com/data/all/coinlist', {
                method: 'GET',
            })
                .then((response) => {
                    return response.json();
                })
                .then((AllCoins) => {
                    this.setState({coinsList: Object.keys(AllCoins.Data).slice(0, 21).map(key => AllCoins.Data[key])});
                })
                .catch((err) => {
                    console.log(err);
                })
        };

    handlerSearchChange = (event) => {
        this.setState({ search: event.target.value });
    };

    filterCoinsListBySearch = (coinsList, search) => {
        return coinsList.filter(coin => coin.CoinName.toLowerCase().includes(search.toLowerCase()));
    };

    render() {
        const { coinsList, search } = this.state;
        
        return (
            <>
                <HeaderComponent mainTitle='All the Coins'></HeaderComponent>
                <SearchComponent value={search} onChange={this.handlerSearchChange}></SearchComponent>
                <CoinsList coinsList={coinsList} search={search} filterCoinsListBySearch={this.filterCoinsListBySearch}></CoinsList>
            </>
        )
    };
}

export default Coins;