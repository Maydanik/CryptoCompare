import React from 'react';
import PropTypes from 'prop-types';

const NewsCard = (props) => (
    <div className="newsCard">
        <h2>{props.title}</h2>
        <img src={props.path} width='200' height='200' alt={props.key} />
        <div>{props.body}</div>
    </div>
);

NewsCard.propTypes = {
news: PropTypes.object.isRequired,
title: PropTypes.string.isRequired,
path: PropTypes.string.isRequired,
key: PropTypes.string.isRequired,
};

export default NewsCard;