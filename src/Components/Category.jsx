import { Link } from 'wouter';

function Category({ trends = [] }) {
	
	return (

		<ul className="category__list">

			{
				trends.map((item) => (

					<li key={item}>
						<Link to={`/search/${item}`}>{item}</Link>
					</li>
				))
			}

		</ul>
		
	);
};

export default Category;