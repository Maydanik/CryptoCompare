import React from 'react';
import NewsCard from '../components/NewsCard';

const NewsList = (props) => (
    <div>
        {props.filterNewsListBySearch(props.newsList, props.search).map((news) => {
            return <NewsCard news={news} title={news.title} path={news.imageurl} body={news.body} key={news.id}/>
        })}
    </div>
);

export default NewsList;