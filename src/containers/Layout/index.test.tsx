import {test} from 'ava';
import * as sinon from 'sinon'

import * as React from 'react';

import Layout from './index';

import {shallow} from 'enzyme';


test('should exists', t => {
    const w = shallow(<Layout/>);
    t.is(w.type(), 'div');
});


test('should have a default collapse state ', t => {

    const w = shallow(<Layout/>)

    t.is(w.state('collapse'), true);

})

test('should contain aside', t => {
    const w = shallow(<Layout/>)
    t.is(w.find('aside').length, 1)
})

test('aside should contains 5 Menu.Item', t => {
    const w = shallow(<Layout/>)
    t.is(w.find('aside').find('Menu').children().length, 5)
})

test('should simulate click', t => {

    const w = shallow(<Layout/>)
    const action = w.find('.ant-aside-action');

    t.is(action.length, 1);
    t.is(action.childAt(0).props().type, 'right')
    action.simulate('click');
    t.is(w.find('.ant-aside-action').childAt(0).props().type, 'left')

    t.is(w.state('collapse'), false);

})
