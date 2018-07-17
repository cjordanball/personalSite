import React, { Component } from 'react';
import Header from './header';
import seattle001 from '../assets/images/seattle001.jpg';

const GCW = () => (
    <div>
        <Header />
        <div className ="GCW">
            <div className='top-caption'>Hello, Seattle!</div>
            <img alt="Seattle Skyline" id="seattle001" src={ seattle001 } />
        </div>
    </div>
);


export default GCW;
