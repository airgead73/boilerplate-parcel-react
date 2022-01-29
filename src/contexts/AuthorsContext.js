import { createContext, useState, useEffect } from 'react';



const AuthorsContext = createContext();

export const AuthorsProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [authors, setAuthors] = useState([]);

  // initial
  useEffect(() => {
    getAuthors();
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
    <AuthorsContext.Provider value={({
      books,
      isLoading
    })} >
      { children }
    </AuthorsContext.Provider>
  )

}

export default AuthorsContext;