import MovieListPopular from "../MovieList/MovieListPopular";
import MovieListLatest from "../MovieList/MovieListLatest";
import MovieListUpcoming from "../MovieList/MovieListUpcoming";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <>
      <Header />
      <MovieListPopular />
      <MovieListLatest />
      <MovieListUpcoming />
      <Footer />
    </>
  );
}

export default Home;
