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
              if (error.name !== 'AbortError') {
                  setError((error as Error).message);
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
