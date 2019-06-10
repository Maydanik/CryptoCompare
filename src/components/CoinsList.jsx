import React from 'react';

const CoinsList = (props) => (
    <div>
        {Object.values(props.coinsList).map((coin) => {
            return <CoinCard coin={coin} name={coin.CoinName} path={coin.ImageUrl} key={coin.Id} />
        })}
    </div>
);

export default CoinsList;