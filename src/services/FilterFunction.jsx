function filterCoinsListBySearch (coinsList, search) {
    return coinsList.filter(coin => coin.CoinName.toLowerCase().includes(search.toLowerCase()));
};

export default filterCoinsListBySearch;