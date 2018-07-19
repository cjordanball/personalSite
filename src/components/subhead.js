import React from 'react';
import HeadLink from './link';

const SubHeader = ((props) => {
    const targets = props.targets;
    console.log('targ: ', targets);

    const linkItems = targets.map(target => {
        return <HeadLink props={target} key={target.name}/>
    });
    console.log('linkItems: ', linkItems);
    return (
        <div className="subhead">
            <ul className="subheadList">
                {linkItems}
            </ul>
        </div>
    )
});

export default SubHeader;
