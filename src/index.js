import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import registerServiceWorker from './registerServiceWorker';
import 'normalize.css';

const render = () => {
  ReactDOM.render(<Router />, document.getElementById('root'));
};

render();

if (module.hot) {
  module.hot.accept('./Router', render);
}
