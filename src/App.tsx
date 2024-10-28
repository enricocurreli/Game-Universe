import { RouterProvider } from 'react-router-dom';
import './App.css'
import router from './router/router';
import { PageContextProvider } from './context/PageContext';

function App() {
 


  return (
    <>
    <PageContextProvider>
      <RouterProvider router={router} /> 
    </PageContextProvider>
    </>
      
  );
};


export default App
