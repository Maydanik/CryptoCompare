import React from 'react';
import PropTypes from 'prop-types';
import CRYPTO_COMPARE_URL from '../constants';
import withLogProps from '../HOC/withLogProps';

const CoinCard = ({coin, name, path}) => (
    <div className="coinCard">
        <h2>{name}</h2>
        {coin.ImageUrl && <img src={CRYPTO_COMPARE_URL + path} width='200' height='200' alt={name} />}
    </div>
);

CoinCard.propTypes = {
    coin: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
};

export default withLogProps(CoinCard);