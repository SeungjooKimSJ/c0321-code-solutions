import React from 'react';
import ReactDom from 'react-dom';

function CustomButton() {
  return <button>Click Me!</button>;
}

const btnElement = <CustomButton />;

ReactDom.render(
  btnElement,
  document.querySelector('#root')
);
