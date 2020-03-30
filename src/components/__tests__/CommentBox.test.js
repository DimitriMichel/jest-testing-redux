import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
//REDUX
import Root from "../../Root";

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('should render text area and button', function () {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

describe('Text Area', () => {
  beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
      target: { value: 'new comment' },
    });
    wrapped.update();
  });
  it('should have a functioning text area', function () {
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
  });

  it('should empty text area when form is submitted', function () {
    wrapped.find('form').simulate('submit');
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
});
