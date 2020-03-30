import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Root from 'Root';
import './sass/main.sass';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.getElementById('root')
);
