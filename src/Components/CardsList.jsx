import Card from './Card.jsx';
import Spinner from './Spinner.jsx';

function CardsList({ gifs, loading }) {
	console.log(gifs)
  return (

    <section className="list">
      {
      	loading
	      	? <Spinner/>
	        : gifs.map(({ id, title, url }) => <Card key={url} id={id} title={title} url={url}/>)
      }
    </section>

  );
};

export default CardsList;