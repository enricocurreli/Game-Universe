import { ReactNode } from "react";

export interface PlatformRequirements {
    minimum: string;
    recommended: string;
  }
  
  export interface Platform {
    [x: string]: any;
    id: number;
    slug: string;
    name: string;
  }
  
  
  export interface EsrbRating {
    id: number;
    slug: string;
    name: string;
  }
  
  export interface Result {
    description_raw: ReactNode;
    tags: Tags[];
    image: string | undefined;
    genres: Genres[];
    publishers: Publishers[];
    id: number;
    slug: string;
    name: string;
    released: string;
    tba: boolean;
    background_image: string;
    rating: number;
    rating_top: number;
    ratings: Record<string, unknown>;
    ratings_count: number;
    reviews_text_count: string;
    added: number;
    added_by_status: Record<string, unknown>;
    metacritic: number;
    playtime: number;
    suggestions_count: number;
    updated: string;
    esrb_rating: EsrbRating;
    platforms: Platform[];
    parent_platforms: Platform;
  }
  
  export interface ApiResponse {
    count: number;
    next: string;
    previous: string;
    results: Result[];
  }
  
  export interface Genres {
    games?: [object];
    games_count: number;
    id: number,
    name: string,
    image_background: string,
    slug: string,
    
  }

  export interface Publishers {
    id: number,
    name: string,
    image_background: string,
    slug: string,
    
  } 

  export interface Tags {
    games_count: number,
    id: number,
    name: string,
    image_background: string,
    slug: string,
    
  } 
  export interface PageContextProps {
    page: number;
    scrolled: React.RefObject<HTMLDivElement>;
    scrollY: number;
    idPlat: number
    btnActive: number | boolean | string;
    prevPage: () => void;
    nextPage: () => void;
    startPage: () => void;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    setIDPlat:  React.Dispatch<React.SetStateAction<number>>;
    setBtnActive:  React.Dispatch<React.SetStateAction<number | boolean | string>>;
}
  export interface PageContextProviderProps {
    children: ReactNode;
  }