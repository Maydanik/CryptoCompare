import React from 'react';
import PropTypes from 'prop-types';
import CRYPTO_COMPARE_URL from '../constants';
import withLogProps from '../HOC/withLogProps';
import { withRouter } from 'react-router-dom';
import ErrorBoundary from '../components/ErrorBoundariesComponent';

const CoinCard = ({ coin, history }) => (
    <ErrorBoundary>
        <div className="coinCard">
            <h2 onClick={(e) => { history.push(`/coins/${coin.Id}`) }}>{coin.CoinName}</h2>
            {coin.ImageUrl && <img src={CRYPTO_COMPARE_URL + coin.ImageUrl} width='200' height='200' alt={coin.CoinName} />}
        </div>
    </ErrorBoundary>
);

CoinCard.propTypes = {
    coin: PropTypes.object.isRequired,
};

export default withRouter(withLogProps(CoinCard));