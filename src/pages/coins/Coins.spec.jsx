import React from 'react';
import Coins from './Coins';
import {shallow} from 'enzyme';
import { mount } from 'enzyme';
import AllCoins from './coinsList.json';
import CoinCard from '../../components/CoinCard';
import CoinsList from '../../components/CoinsList';
import HeaderComponent from '../../components/Header';
import SearchComponent from '../../components/Search';

const coinsList= Object.keys(AllCoins.Data).slice(0, 21).map(key => AllCoins.Data[key]);

test('First test', () => {
    expect(true).toEqual(true);
});

test('Coins render correctly', () => {
    const component = shallow(<Coins />);
    expect(component).toMatchSnapshot();
});

test('CoinsCard render correctly', () => {
  const component = shallow(<CoinCard />);
  expect(component).toMatchSnapshot();
});

test('Header render correctly', () => {
  const component = shallow(<HeaderComponent />);
  expect(component).toMatchSnapshot();
});

test('SearchComponent render correctly', () => {
  const component = shallow(<SearchComponent />);
  expect(component).toMatchSnapshot();
});

test('CoinsList render correctly', () => {
  const component = shallow(<CoinsList coinsList = {coinsList}/>);
  expect(component).toMatchSnapshot();
});

test('Search should render correct amount of coins', () => {
    const component = shallow(<CoinsList coinsList = {coinsList}/>);
    expect(component.find(CoinCard).length).toEqual(coinsList.length);
  });
  
test('Search should render correct amount of coins based on seach term', () => {
  const component = shallow(<Coins />);
  const searchTerm = '808';
  const searchList = component.instance().filterCoinsListBySearch(coinsList, searchTerm);
  const searchCount = searchList.length;
  const component2 = shallow(<CoinsList coinsList = {searchList}/>);
  expect(component2.find(CoinCard).length).toEqual(searchCount);
});

test('Search all nodes in the wrapper', () => {
  const component = mount(<Coins />);
  expect(component.exists(CoinsList)).toEqual(true);
  expect(component.exists('.headerComponent')).toEqual(true);
  expect(component.exists(SearchComponent)).toEqual(true);
});

test('Returns the props object', () => {
  const component = mount(<HeaderComponent mainTitle='All the Coins' />);
  expect(component.props().mainTitle).toEqual('All the Coins');
});

test('Check function handlerSearchChange', () => {
  const component = shallow(<Coins />);
  component.instance().handlerSearchChange = jest.fn()
  .mockReturnValue('808');
  expect(component.instance().handlerSearchChange().calls === 1);
});

test('the data is peanut butter', async () => {
  const component = shallow(<Coins />);
  component.instance().componentDidMount = jest.fn()
  .mockReturnValue(coinsList);
  const data = await component.instance().componentDidMount();
  expect(data).toBe(coinsList);
});