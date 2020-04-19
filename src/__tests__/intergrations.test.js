import React from 'react';
import { mount } from 'enzyme';
import Root from '../Root';
import App from '../components/App';

const wrapped = mount(
  <Root>
    <App />
  </Root>
);
it('should fetch a list of comments and display them', function () {
  wrapped.find('.fetch-comments').simulate('click');

  expect(wrapped.find('li').length).toEqual(500);
});
