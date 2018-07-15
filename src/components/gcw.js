import React, { Component } from 'react';
import Header from './header';
import seattle001 from '../assets/images/seattle001.jpg';

const GCW = () => (
    <div>
        <Header />
        <div className ="GCW">
            <h1>Hello, Seattle!</h1>
            <img alt="Seattle Skyline" id="seattle001" src={ seattle001 } />
        </div>
    </div>
);


export default GCW;
