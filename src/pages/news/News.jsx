import React, {Component} from 'react';
import './News.css';
import TopNews from './newsTopList.json';
import HeaderComponent from '../../components/Header';
import SearchComponent from '../../components/Search';
import NewsCard from '../../components/NewsCard';

class News extends Component {
    state = {
        newsList: TopNews.Data,
        search: '',
    };

    handlerSearchChange = (event) => {
        this.setState({ search: event.target.value });
    };

    filterNewsListBySearch = (newsList, search) => {
        return newsList.filter(news => news.title.toLowerCase().includes(search.toLowerCase()));
    };

    render() {
        const { newsList, search } = this.state;
        return (
            <>
                <HeaderComponent mainTitle='Latest News Articles'></HeaderComponent>
                <SearchComponent value={search} onChange={this.handlerSearchChange}></SearchComponent>
                <div className = "NewsList">
                    {this.filterNewsListBySearch(newsList, search).map(news => ( 
                        <NewsCard news={news} title={news.title} path={news.imageurl} body={news.body} key={news.id}/>
                    ))}
                </div>
            </>
        )
    };
}

export default News;