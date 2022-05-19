const API_KEY = process.env.NEXT_PUBLIC_API_KEY
//const BASE_URL = 'https://api.themoviedb.org/3'
const BASE_URL = 'https://api.aniapi.com'

const requests = {
    fetchRandomShow: `${BASE_URL}/v1/random/anime/1/false`,
    fetchActionShows: `${BASE_URL}/v1/anime?formats=0,1&genres=Action&nsfw=false&with_episodes=true`,
    fetchAdventureShows: `${BASE_URL}/v1/anime?formats=0,1&genres=Adventure&nsfw=false&with_episodes=true`,
    fetchComedyShows: `${BASE_URL}/v1/anime?formats=0,1&genres=Comedy&nsfw=false&with_episodes=true`,
    fetchDramaShows: `${BASE_URL}/v1/anime?formats=0,1&genres=Drama&nsfw=false&with_episodes=true`,
    fetchFantasyShows: `${BASE_URL}/v1/anime?formats=0,1&genres=Fantasy&nsfw=false&with_episodes=true`,
    fetchHorrorShows: `${BASE_URL}/v1/anime?formats=0,1&genres=Horror&nsfw=false&with_episodes=true`,
  /* fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
  fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
  fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
  fetchRomanceMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
  fetchDocumentaries: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`, */
}

export default requests