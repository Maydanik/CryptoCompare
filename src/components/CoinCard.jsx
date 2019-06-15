import React from 'react';
import PropTypes from 'prop-types';
import CRYPTO_COMPARE_URL from '../constants';
import withLogProps from '../HOC/withLogProps';

const CoinCard = (props) => (
    <div className="coinCard">
        <h2>{props.name}</h2>
        <img src={CRYPTO_COMPARE_URL + props.path} width='200' height='200' alt={props.name} />
    </div>
);

CoinCard.propTypes = {
    coin: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
};

export default withLogProps(CoinCard);