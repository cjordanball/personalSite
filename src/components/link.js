import React from 'react';

const HeadLink = (props) => {
    console.log('hlprops: ', props
);
    return (
        <li className="headLink">
            <a href={props.props.href}>{props.props.name}</a>
        </li>
    );
}

export default HeadLink;
