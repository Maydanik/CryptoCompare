import React from 'react';
import CoinCard from '../components/CoinCard';
//import filterCoinsListBySearch from '../services/FilterFunction';

const CoinsList = (props) => (
    <div>
        {props.coinsList.map((coin) => {
            return <CoinCard coin={coin} name={coin.CoinName} path={coin.ImageUrl} key={coin.Id}/>
        })}
    </div>
);

export default CoinsList;