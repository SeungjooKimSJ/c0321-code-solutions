import React from 'react';
import ReactDom from 'react-dom';

const firstReactH1 = React.createElement(
  'h1',
  null,
  'Hello, React!'
);

ReactDom.render(
  firstReactH1,
  document.querySelector('#root')
);
