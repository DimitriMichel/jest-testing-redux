import { SAVE_COMMENT, FETCH_COMMENTS } from './types';

export const saveComment = (comment) => {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  };
};

export const fetchComments = () => {
  const response = fetch('http://jsonplaceholder.typicode.com/comments');
  return{
    type: FETCH_COMMENTS,
    payload: response
  }
};
