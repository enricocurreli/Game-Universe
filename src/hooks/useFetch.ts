import { useEffect, useState } from 'react'
import { ApiResponse } from '../types/interfaces';

const useFetch = <T>(url: string) => {
  const [data, setData] = useState<ApiResponse<T> | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
      const controller = new AbortController();
      const fetchData = async () => {
          setIsLoading(true);
          setError(null);
          try {
              const response = await fetch(url, { signal: controller.signal });
              if (!response.ok) throw new Error('Network response was not ok');

              const result: ApiResponse<T> = await response.json();
              setData(result);
          } catch (error) {
            if (error instanceof Error) {
                setError(error.message);  // Accede a message solo se err è un Error
            } else {
                setError('An unknown error occurred');
            }
          } finally {
              setIsLoading(false);
          }
      };

      fetchData();

      return () => {
          controller.abort();
      };
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch

//? AbortController:
// AbortController è utilizzato per annullare una richiesta fetch. In questo modo, se il componente viene smontato prima che la richiesta finisca, la richiesta verrà annullata e non causerà errori o problemi di prestazioni.
