import React from 'react';
import ReactDom from 'react-dom';

function CustomButton() {
  return (
    <button>Click Me!</button>
  );
}

const btnElement = <CustomButton />;
const $root = document.querySelector('#root');

ReactDom.render(
  btnElement,
  $root
);
