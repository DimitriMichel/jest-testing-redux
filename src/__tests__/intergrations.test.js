import React from 'react';
import { mount } from 'enzyme';
import Root from '../Root';
import App from '../components/App';

beforeEach(() => {
  fetch.resetMocks();
});

it('should call api and return values', function () {
  fetch('http://jsonplaceholder.typicode.com/comments')
    .then((response) => response.json())
    .then((data) => {
      expect(data).toEqual([{ name: 'Fetched#1' }]);
    })
    .catch((err) => console.log(err));
});
it('should fetch a list of comments and display them', function () {
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );
  wrapped.find('.fetch-comments').simulate('click');

  expect(wrapped.find('li').length).toEqual(500);
});
