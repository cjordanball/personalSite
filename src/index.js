import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles/styles.less';
import GCW from './components/gcw';
import './assets/images/ballIcon.ico';

const gcw = GCW();

ReactDOM.render(
    gcw, document.querySelector('#root')
);
