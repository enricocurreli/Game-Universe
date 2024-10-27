import { createContext, useState } from 'react';
import useScroll from '../hooks/useScroll';
import { PageContextProps, PageContextProviderProps } from '../types/interfaces';

export const PageContext =  createContext <PageContextProps | undefined>(undefined);

export const PageContextProvider = ({ children }: PageContextProviderProps) => {
    
    const [page, setPage] = useState<number>(1);
    const [scrolled, scrollY] = useScroll();

    const nextPage = () => {
        if (page <= 511) {
          setPage((prev) => prev + 1);
        }
    
        if (scrollY >= 1000) {
          window.scrollTo({ top: 0});
        }
      };
    
      const prevPage = () => {
        if (page > 1) {
          setPage((prev) => prev - 1);
        }
    
        if (scrollY >= 1000) {
          window.scrollTo({ top: 0});
        }
      };
    
      const startPage = () =>{
        if (scrollY > 0) {
          window.scrollTo({ top: 0});
        }
    
      }
    
    
    
      const obj = {page, scrolled, scrollY, prevPage, nextPage, startPage, setPage}
    
      return(
    
        <PageContext.Provider value={obj}>
            {children}
        </PageContext.Provider>    
      )
}