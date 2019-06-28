import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderComponent from '../../components/Header';
import SearchComponent from '../../components/Search';
import CoinsList from '../../components/CoinsList';
import './Coins.css';
import PropTypes from 'prop-types';
import { searchCoinsAction } from '../../actions/SearchActions';

class Coins extends Component {
    static propTypes = {
        coinsList: PropTypes.array.isRequired,
        search: PropTypes.string.isRequired,
        searchCoinsAction: PropTypes.func.isRequired,
      };

      handleSearchChange = (search) => {
        this.props.searchCoinsAction(search);
      };

    // filterCoinsListBySearch = (coinsList, search) => {
    //     return coinsList.filter(coin => coin.CoinName.toLowerCase().includes(search.toLowerCase()));
    // };

    filterCoinsListBySearch = (list, searchTerm) => (
        list.filter(coin => coin.CoinName.toLowerCase().includes(searchTerm.toLowerCase()))
      );

    render() {
        const { coinsList, search } = this.props;
        
        return (
            <>
                <HeaderComponent mainTitle='All the Coins'></HeaderComponent>
                <SearchComponent value={search} onChange={this.handleSearchChange}></SearchComponent>
                <CoinsList coinsList={this.filterCoinsListBySearch(coinsList, search)}></CoinsList>
            </>
        )
    };
}

const mapStateToProps = state => ({
  search: state.searchReducer.search,
});

const mapDispatchToProps = {
  searchCoinsAction,
};

const CoinsComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Coins);

export default CoinsComponent;