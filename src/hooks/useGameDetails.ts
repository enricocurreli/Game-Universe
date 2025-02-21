
import{ useEffect, useState } from 'react'
import { GameDetails } from '../types/interfaces';
   
   const useGameDetails = (url:string) => {
    const [data, setData] = useState<GameDetails>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
  

    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);  // Imposta isLoading a true quando inizia il fetch
        setError(null);  // Resetta l'errore prima di ogni nuova chiamata
        try {
          const response = await fetch(url);
          if (!response.ok) throw new Error('Network response was not ok');
          
          const result: GameDetails = await response.json();
          setData(result);
        } catch (error) {
          setError((error as Error).message);  // Gestisce l'errore e lo memorizza
        } finally {
          setIsLoading(false);  // Fine del fetch: aggiorna isLoading a false
        }
      };
  
      fetchData();
    }, [url]);
    
    return {data, isLoading, error}
   }
   
   export default useGameDetails
