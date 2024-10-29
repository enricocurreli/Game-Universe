import { Dispatch, ReactNode, RefObject, SetStateAction } from "react";

export interface PlatformRequirements {
  minimum: string;
  recommended: string;
}

export interface Platform {
  platform?: object;
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
  description_raw?: ReactNode;
  tags?: Tags[];
  image?: string | undefined;
  genres: Genres[];
  publishers?: Publishers[];
  id?: number;
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
  games: {
    added: number;
    id: number;
    name: string;
    slug: string;
  };

  games_count: number;
  id: number;
  name: string;
  image_background: string;
  slug: string;
}

export interface Publishers {
  id: number;
  name: string;
  image_background: string;
  slug: string;
}

export interface Tags {
  games_count: number;
  id: number;
  name: string;
  image_background: string;
  slug: string;
}
export interface PageContextProps {
  page: number;
  scrolled: RefObject<HTMLDivElement>;
  scrollY: number;
  idPlat: number | string;
  btnActive: number | boolean | string;
  prevPage: () => void;
  nextPage: () => void;
  startPage: () => void;
  setPage: Dispatch<SetStateAction<number>>;
  setIDPlat: Dispatch<SetStateAction<number | string>>;
  setBtnActive: Dispatch<SetStateAction<number | boolean | string>>;
}
export interface PageContextProviderProps {
  children: ReactNode;
}
export interface GameDetails {
  genres: [
    {
      games_count: number;
      id: number;
      name: string;
      image_background: string;
      slug: string;
    }
  ];
  id: number;
  slug: string;
  name: string;
  name_original: string;
  description: string;
  metacritic: number;
  metacritic_platforms?: [object] | null;
  released: string;
  tba: boolean;
  updated: string;
  background_image: string;
  background_image_additional: string;
  website: string;
  rating: number;
  rating_top: number;
  ratings: object;
  reactions: object;
  added: number;
  added_by_status: object;
  playtime: number;
  screenshots_count: number;
  movies_count: number;
  creators_count: number;
  achievements_count: number;
  parent_achievements_count: string;
  reddit_url: string;
  reddit_name: string;
  reddit_description: string;
  reddit_logo: string;
  reddit_count: number;
  publishers: [
    {
      id: number;
      name: string;
      slug: string;
    }
  ];
  tags: [Tags];
  description_raw: string;
  twitch_count: string;
  youtube_count: string;
  reviews_text_count: string;
  ratings_count: number;
  suggestions_count: number;
  alternative_names?: string[] | null;
  metacritic_url: string;
  parents_count: number;
  additions_count: number;
  game_series_count: number;
  esrb_rating: EsrbRating;
  platforms?: [
    {
      platform: {
        id: number;
        slug: string;
        name: string;
      };
      released_at: string;
      requirements: {
        minimum: string;
        recommended: string;
      };
    }
  ];
}

export interface screenshots {
  count: number;
  next: string;
  previous: string;
  results: [
    {
      height: number;
      id: number;
      name: string;
      image: string;
      is_deleted: boolean;
      width: number;
    }
  ];
}

export interface DLC {
  count: number;
  next: string;
  previous: string;
  results?: [
    {
      id: number;
      slug: string;
      name: string;
      released: string;
      tba: boolean;
      background_image: string;
      rating: number;
      rating_top: number;
      ratings: object;
      ratings_count: number;
      reviews_text_count: string;
      added: number;
      metacritic: number;
      playtime: number;
      suggestions_count: number;
      updated: string;
      esrb_rating: EsrbRating;
      platforms?: [
        {
          platform: {
            id: number;
            slug: string;
            name: string;
          };
          released_at: string;
          requirements: {
            minimum: string;
            recommended: string;
          };
        }
      ];
    }
  ];
}


export interface EsrbRating {
  id: number;
  slug: string;
  name: string;
}
