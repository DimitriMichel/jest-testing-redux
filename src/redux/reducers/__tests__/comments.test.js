import commentsReducer from 'redux/reducers/commentsReducer';
import { SAVE_COMMENT } from 'redux/actions/types';

it('should handle action of type SAVE_COMMENT', function () {
  const action = {
    type: SAVE_COMMENT,
    payload: 'new comment',
  };
  const newState = commentsReducer([], action);
  expect(newState).toEqual(['new comment']);
});

it('should handle action with unknown type', function () {
  const newState = commentsReducer([], { type: 'unknown_type_placeholder' });
  expect(newState).toEqual([]);
});
