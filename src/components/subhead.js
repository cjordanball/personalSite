import React from 'react';
import PropTypes from 'prop-types';
import HeadLink from './link';

const SubHeader = ((props) => {
	const { targets } = props;
	const linkItems = targets.map(target => (
		<HeadLink props={target} key={target.name} />
	));
	return (
		<div className="subhead">
			<ul className="subheadList">
				{linkItems}
			</ul>
		</div>
	);
});

SubHeader.propTypes = {
	targets: PropTypes.isRequired
};

export default SubHeader;
