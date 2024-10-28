import { createContext, useState } from 'react';
import useScroll from '../hooks/useScroll';
import { PageContextProps, PageContextProviderProps } from '../types/interfaces';

// eslint-disable-next-line react-refresh/only-export-components
export const PageContext =  createContext <PageContextProps | undefined>(undefined);

export const PageContextProvider = ({ children }: PageContextProviderProps) => {
    
    const [page, setPage] = useState<number>(1);
    const [scrolled, scrollY] = useScroll();
    const [idPlat, setIDPlat] = useState<number | string>(0);
    const [btnActive, setBtnActive] = useState<number | boolean | string>(0);

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
    
    
    
      const obj = {page, scrolled, scrollY, prevPage, nextPage, startPage, setPage, idPlat, setIDPlat, btnActive, setBtnActive}
    
      return(
    
        <PageContext.Provider value={obj}>
            {children}
        </PageContext.Provider>    
      )
}