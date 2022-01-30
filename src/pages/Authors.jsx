import useFetch from '../hooks/useFetch';
import { URI_AUTHORS } from '../constants';

function Authors() {
  const { data: authors, error, isPending } = useFetch(URI_AUTHORS);
  return (
    <div>
      <h2>Authors</h2>
      { error && <div>{ error }</div> }
      { isPending && <div>loading...</div> } 
      { authors && authors.map((author) => (
        <p key={author.id}>{author.first_name} {author.last_name}</p>
      ))}
    </div>
  );
}

export default Authors;
