import { RouterProvider } from 'react-router-dom';
import './App.css'
import useFetch from './hooks/useFetch';
import router from './router/router';
import { PageContextProvider } from './context/PageContext';

function App() {
 
  const API_KEY = import.meta.env.VITE_API_KEY;
  let url = `https://api.rawg.io/api/games?key=${API_KEY}`;
  
  //const { data: games, isLoading: loading, error } = useFetch(url)

  return (
    <>
    <PageContextProvider>
      <RouterProvider router={router} /> 
    </PageContextProvider>
    </>
      
  );
};


export default App
