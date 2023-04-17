import { Link } from 'wouter';
import { Helmet } from 'react-helmet';
import SearchInput from './../components/SearchInput.jsx';

const gifsErrors = ['d2jjuAZzDSVLZ5kI', 'Bp3dFfoqpCKFyXuSzP', 'hv5AEBpH3ZyNoRnABG', 'hLwSzlKN8Fi6I'];

function ErrorPage() {

  const randomImage = () => `https://media.giphy.com/media/${gifsErrors[Math.floor(Math.random() * gifsErrors.length) + 1 ]}/giphy.gif`;

  const title = 'Gif App | Error 404';
	const description = 'Gif-App, página no encontrada. Error 404.';

  return (

    <>
      <Helmet>
				<title>{title}</title>
				<meta name="description" content={description}/>
			</Helmet>

      <SearchInput/>
      
      <section className="error-container">
        <h2>Error 404</h2>
        <img src={randomImage()} alt="Error 404" width="200" height="200"/>
        <Link href='/gif-app/'>Go back home!</Link>
      </section>
    </>

  );
};

export default ErrorPage;