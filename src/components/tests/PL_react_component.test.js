import React from 'react';
import { shallow } from '../../enzyme.js';

import PL_List from '../PL_react_component';

describe('List tests', () => {

  it('renders list-items', () => {
    const data = [
      {
        "type": "case1",
        "title": "Title 1",
        "id": "UUIDa9ff-c17f-4179-8c09-a0c64f7f57df"
      },
      {
        "type": "case2",
        "title": "Title 2",
        "id": "UUID6481-867a-47ce-ae95-019b25d5c174"
      },
      {
        "type": "case3",
        "title": "Title 3",
        "id": "UUID07b4-0c25-4288-8445-caecb0aa19f7"
      },
    ];
    const wrapper = shallow(<PL_List data={data} />);
    // console.log(wrapper.debug());

    // Expect the wrapper object to be defined
    expect(wrapper.find('.list-group')).toBeDefined();
    expect(wrapper.find('.list-group-item')).toHaveLength(data.length);
  });

  it('renders an empty list if no data props', () => {
    const wrapper = shallow(<PL_List data=""/>);
    // console.log(wrapper.debug());

    // Check if an element in the Component exists
    expect(wrapper.find('.list-group')).toBeDefined();
    expect(wrapper.find('.list-group').isEmpty()).toEqual(true);
  });

  it('renders correctly formatted text in item', () => {
    const data = [
      {
        "type": "case-dash-check",
        "title": "Title 1",
        "id": "UUIDa9ff-c17f-4179-8c09-a0c64f7f57df"
      },
      {
        "type": "case2",
        "title": "Title 2",
        "id": "UUID6481-867a-47ce-ae95-019b25d5c174"
      },
      {
        "type": "case_3",
        "title": "Title 3",
        "id": "UUID07b4-0c25-4288-8445-caecb0aa19f7"
      },
    ];
    const wrapper = shallow(<PL_List data={data} />);
    // console.log(wrapper.debug());

    //Expect the child of the first item to be an array
    expect(wrapper.find('.list-group-item').contains('Case Dash Check'));
    expect(wrapper.find('.list-group-item').contains('Title 1'));
    expect(wrapper.find('.list-group-item').contains('Case 3'));
  });
});
