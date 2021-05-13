import React from 'react';
import ReactDOM from 'react-dom';

const firstReactH1 = React.createElement(
  'h1',
  null,
  'Hello, React!'
);

ReactDOM.render(
  firstReactH1,
  document.querySelector('#root')
);
