import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Banner from '../components/Banner'
import requests from '../utils/requests'
import { Movie, Show } from '../typings'
import Row from '../components/Row'
import { modalState } from '../atoms/modalAtom'
import { useRecoilValue } from 'recoil'
import Modal from '../components/Modal'

interface Props {
  randomShow: Show
  topAnime: Show[]
  recentlyAdded: Show[]
  comedyShows: Show[]
  /* trendingNow: Movie[]
  topRated: Movie[]
  actionMovies: Movie[]
  comedyMovies: Movie[]
  horrorMovies: Movie[]
  romanceMovies: Movie[]
  documentaries: Movie[] */
  /* products: Product[] */
}
const Home = ({
  randomShow,
  topAnime,
  recentlyAdded,
}: //comedyShows,

/* actionMovies,
  comedyMovies,
  documentaries,
  horrorMovies,
  romanceMovies,
  topRated,
  trendingNow, */
/*  products, */
Props) => {
  /* console.log(randomShow) */

  //const { loading } = useAuth()
  const showModal = useRecoilValue(modalState)

  return (
    <div className="relative h-screen bg-gradient-to-b  lg:h-[140vh]">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <Banner randomShow={randomShow} />
        <section className="md:space-y-24">
          <Row title="Top Anime" shows={topAnime} />
          {/* <Row title="Recently Added" shows={recentlyAdded} /> */}
          {/*<Row title="Comedies" shows={comedyShows}/> */}
        </section>
      </main>
      {/*  Modal */}
      {showModal && <Modal />}
    </div>
  )
}

export default Home

export const getServerSideProps = async () => {
  /*   const products = await getProducts(payments, {
    includePrices: true,
    activeOnly: true,
  })
    .then((res) => res)
    .catch((error) => console.log(error.message))
 */
  const [
    randomShow,
    topAnime,
    /* recentlyAdded, */
    //adventureShows,
    //comedyShows,
    /* trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries, */
  ] = await Promise.all([
    fetch(requests.fetchRandomShow).then((res) => res.json()),
    fetch(requests.fetchTopAnime).then((res) => res.json()),
    /* fetch(requests.fetchRecentlyAdded).then((res) => res.json()), */
    //fetch(requests.fetchComedyShows).then((res) => res.json()),
    /*fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()), */
  ])

  return {
    props: {
      randomShow: randomShow?.data,
      topAnime: topAnime?.data,
      /*  recentlyAdded: recentlyAdded?.data, */
      //adventureShows: adventureShows.data.documents.slice(0,20),
      //comedyShows: comedyShows.data.documents.slice(0,20),
      /* trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results, */
    },
  }
}
