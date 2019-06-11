import React, {Component} from 'react';
import './News.css';
import TopNews from './newsTopList.json';
import HeaderComponent from '../../components/Header';
import SearchComponent from '../../components/Search';
import NewsList from '../../components/NewsList';
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
                <NewsList newsList={newsList} search={search} filterNewsListBySearch={this.filterNewsListBySearch}></NewsList>

            </>
        )
    };
}

export default News;