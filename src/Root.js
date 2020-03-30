import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'redux/reducers';

import React from 'react';

export default (props) => {
  return (
    <Provider store={createStore(reducers, {})}>{props.children}</Provider>
  );
};
