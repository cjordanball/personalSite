import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles/main.css';
import GCW from './components/gcw';

const gcw = GCW();

ReactDOM.render(
    gcw, document.querySelector('#root')
);
