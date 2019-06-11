import React from 'react';
import Coins from './Coins';
import {shallow} from 'enzyme';

test('First test', () => {
    expect(true).toEqual(true);
});

test('Coins render correctly', () => {
    const component = shallow(<Coins />);
    expect(component).toMatchSnapshot();
});

test('Search should render correct amount of coins', () => {
    const component = shallow(<Coins />);
    expect(component.find(CoinCard).length).toEqual(coinsList.length);
  });
  
  test('Search should render correct amount of coins based on seach term', () => {
    const component = shallow(<Coins />);
    const searchTerm = 'bitcoin';
    component.find('input').simulate('change', { target: { value: searchTerm } });
    const searchCount = component.instance().filterCoinsListBySearch(coinsList, searchTerm).length;
    expect(component.find(CoinCard).length).toEqual(searchCount);
  });