import { createContext, useState, useEffect } from 'react';



const AuthorContext = createContext();

export const AuthorProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [authors, setAuthors] = useState([]);

  // initial
  useEffect(() => {
    readAuthors();
  },[]);

  // get Authors
  const readAuthors = async () => {
    const response = await fetch("http://localhost:5000/authors");
    const data = await response.json();

    setAuthors(data);
    setIsLoading(false);
    console.log(data);

  }

  return (
    <AuthorContext.Provider value={({
      authors,
      isLoading
    })} >
      { children }
    </AuthorContext.Provider>
  )

}

export default AuthorContext;