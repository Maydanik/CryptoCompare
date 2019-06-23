import React, { Component } from 'react';
import HeaderComponent from '../../components/Header';
import SearchComponent from '../../components/Search';
import CoinsList from '../../components/CoinsList';
import './Coins.css';
import PropTypes from 'prop-types';

class Coins extends Component {
    static propTypes = {
        coinsList: PropTypes.array.isRequired,
      };

    state = {
        search: '',
    };

    handlerSearchChange = (event) => {
        this.setState({ search: event.target.value });
    };

    filterCoinsListBySearch = (coinsList, search) => {
        return coinsList.filter(coin => coin.CoinName.toLowerCase().includes(search.toLowerCase()));
    };

    render() {
        const { search } = this.state;
        const { coinsList } = this.props;
        
        return (
            <>
                <HeaderComponent mainTitle='All the Coins'></HeaderComponent>
                <SearchComponent value={search} onChange={this.handlerSearchChange}></SearchComponent>
                <CoinsList coinsList={this.filterCoinsListBySearch(coinsList, search)}></CoinsList>
            </>
        )
    };
}

export default Coins;