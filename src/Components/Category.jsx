import React from 'react';
import { Link } from 'wouter';

const Category = ({ trends = [] }) => {
	
	return (

		<ul className="category__list">

			{
				trends.map(item => (

					<li key={item}>
						<Link to={`/search/${item}`}>{item}</Link>
					</li>
				))
			}

		</ul>
	);
};

export default Category;