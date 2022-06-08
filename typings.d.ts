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
  /* banner_image?: string  | StaticImport
    cover_color: string
    cover_image?: string | StaticImport */
  images?: {
    jpg: {
      image_url: string | StaticImport
      small_image_url: string | undefined
      large_image_url: string | undefined
    }
    webp: {
      image_url: string | undefined
      small_image_url: string | undefined
      large_image_url: string | undefined
    }
  }
  synopsis: string
  duration: string

  mal_id: number
  title_english: string
  title_japanese: string
  trailer: { youtube_id: string; url: string; embed_url: string }
  score: number
  type: string
  rating: string
  genres: object[{ name: string }]
  start_date: string
  sagas: object[]
}

export interface Episodes {
  documents?: object[]
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
