import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Event from './Event';
import renderer from 'react-test-renderer';

configure ({adapter: new Adapter()})

describe('< EventInput />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Event />);

  })

  it('matches the snapshot', () => {
    const tree = renderer.create(<Event />).toJSON()
    
    expect(tree).toMatchSnapshot()
  })
  
  it('should render two buttons by default', () => {
    wrapper = shallow(<Event />)
    // console.log('shallow HTML', wrapper.debug())
    const buttons = wrapper.find('button')
    expect(buttons.length).toEqual(2)
  })

  xit('renders different views based on state.view', () => {
    wrapper = shallow(<Event />)
    console.log('shallow HTML', wrapper.debug())

    const chgViewBtn = wrapper.find('.changeView')
    console.log('shallow HTML', chgViewBtn.debug())


    // expect(chgViewBtn.length).toEqual(1)
    // const text = wrapper.find('label').text().first()
    // expect(text).toEqual('Event')
  })
  
  xit('should render one view only', () => {
    wrapper.setProps({
        view: 0,
        event:  'Lightining in a Bottle',
        description: 'went to a festival and met some great people',
        date:  new Date() ,
        type: 'interaction',
        id: '5e910e1c9ca5cb234eab5ba9'
    });
  
  })  
})  