import React from 'react';

const CoinsList = () => (
    <div>
        {Object.values(coinsList).map((coin) => {
            return <CoinCard coin={coin} name={coin.CoinName} path={coin.ImageUrl} key={coin.Id} />
        })}
    </div>
);

export default CoinsList;