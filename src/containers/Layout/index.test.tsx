import {test} from 'ava';

import * as React from 'react';

import Layout from './index';

import {shallow} from 'enzyme';


test('It should exists', t => {
    const w = shallow(<Layout/>);
    t.is(w.type(), 'div');
});


test('It should have a default collapse state ', t => {

    const w = shallow(<Layout/>)

    t.is(w.state('collapse'), true);

})
