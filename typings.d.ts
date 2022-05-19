export interface Genre {
    id: number
    name: string
  }
  
  export interface Movie {
    title: string
    backdrop_path: string
    media_type?: string
    release_date?: string
    first_air_date: string
    genre_ids: number[]
    id: number
    name: string
    origin_country: string[]
    original_language: string
    original_name: string
    overview: string
    popularity: number
    poster_path: string
    vote_average: number
    vote_count: number
  }

  export interface Show {
    anilist_id: number
    banner_image?: string  | StaticImport
    cover_color: string
    cover_image?: string | StaticImport
    descriptions: object
    episode_duration: number
    has_cover_image: boolean
    id: number
    titles: object
    trailer_url?: string 
    score: number
    genres: string[]
    start_date: string
  }
  
  export interface Element {
    type:
      | 'Bloopers'
      | 'Featurette'
      | 'Behind the Scenes'
      | 'Clip'
      | 'Trailer'
      | 'Teaser'
  }