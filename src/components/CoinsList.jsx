import React from 'react';
import CoinCard from '../components/CoinCard';

const CoinsList = (props) => (
    <div>
        {props.filterCoinsListBySearch(props.coinsList, props.search).map((coin) => {
            return <CoinCard coin={coin} name={coin.CoinName} path={coin.ImageUrl} key={coin.Id}/>
        })}
    </div>
);

export default CoinsList;