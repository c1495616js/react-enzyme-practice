import React from 'react';
import { mount } from 'enzyme';

import Root from 'Root'
import CommentBox from 'components/CommentBox';


let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );  
})

afterEach(() => {
  wrapped.unmount();
})

it('has a text area and button', () => {
   expect(wrapped.find('textarea').length).toEqual(1);
   expect(wrapped.find('button').length).toEqual(1);
})

describe('the text area', () => {
  beforeEach(() => { // this is only for the it inside of this describe
    wrapped.find('textarea').simulate('change', {
      target: { value: 'new comment' }
    });
    wrapped.update();
  })

  it('has a text area that users can type in', () => {    
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
  });

  it('when form is submitted, text area gets emptied', () => {    
    wrapped.find('form').simulate('submit');
    wrapped.update();

    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });

})
