import React from 'react';
import PropTypes from 'prop-types';

const HeadLink = (({ props }) => {
	const { href } = props;
	const { name } = props;
	return (
		<li className="headLink">
			<a href={href}>
				{name}
			</a>
		</li>
	);
});

HeadLink.propTypes = {
	props: PropTypes.isRequired,
	href: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired
};

export default HeadLink;
