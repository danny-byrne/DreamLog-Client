import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import EventInput from './EventInput';
import Event from './Event';

configure ({adapter: new Adapter()})

describe('< EventInput />', () => {
  it('should render no Event items if this.state.events is empty', () => {
    const wrapper = shallow(<EventInput />);
    expect(wrapper.find(Event));

  })  

})  