import React from 'react';

const HeadLink = ((props) => {
	const { href } = props.props;
	const { name } = props.props;
	return (
		<li className="headLink">
			<a href={href}>{name}</a>
		</li>
	)
});

export default HeadLink;
