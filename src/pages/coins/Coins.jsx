import React, { Component } from 'react';
import AllCoins from './coinsList.json';
import HeaderComponent from '../../components/Header';
import SearchComponent from '../../components/Search';
import CoinCard from '../../components/CoinCard';
// import CoinsList from '../../components/CoinsList';
import './Coins.css';
// import { CLIENT_RENEG_LIMIT } from 'tls';
class Coins extends Component {
    state = {
        coinsList: Object.keys(AllCoins.Data).slice(0, 21).map(key => AllCoins.Data[key]),
        search: '',
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
                <div className = "CoinsList">
                    {this.filterCoinsListBySearch(coinsList, search).map(coin => { return
                        <CoinCard coin={coin} name={coin.CoinName} path={coin.ImageUrl} key={coin.Id}/>
                    })}
                </div>
            </>
        )
    };
}

export default Coins;