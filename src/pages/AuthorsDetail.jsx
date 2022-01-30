import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { URI_AUTHORS } from '../constants';

function AuthorsDetail() {
  const { id } = useParams();
  const { data: author, error, isPending } = useFetch(`${URI_AUTHORS}/${id}`);
  return (

    <>
      <h2>Author Detail</h2>
      { error && <div>{ error }</div> }
      { isPending && <div>loading...</div> } 
      { author && (<h3>{author.first_name} {author.last_name}</h3>)}
    </>
    
  );
}

export default AuthorsDetail;
