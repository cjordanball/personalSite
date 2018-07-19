import React, { Component } from 'react';
import Header from './header';
import SubHeader from './subhead';
import { targetList } from '../assets/jsons/links';
import seattle001 from '../assets/images/seattle001.jpg';

const GCW = () => (
    <div>
        <Header />
        <SubHeader targets={targetList} />
        <div className ="GCW">
            <div className='top-caption'>Hello, Seattle!</div>
            <img alt="Seattle Skyline" id="seattle001" src={ seattle001 } />
        </div>
    </div>
);


export default GCW;
