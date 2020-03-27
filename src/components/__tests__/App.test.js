import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it('should render comment box component', function () {
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('should render comment box component', function () {
  expect(wrapped.find(CommentList).length).toEqual(1);
});
