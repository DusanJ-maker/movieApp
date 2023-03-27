import MovieListPopular from "../MovieList/MovieListPopular";
import MovieListLatest from "../MovieList/MovieListLatest";
import MovieListUpcoming from "../MovieList/MovieListUpcoming";

function Home() {
  return (
    <>
      <MovieListPopular />
      <MovieListLatest />
      <MovieListUpcoming />
    </>
  );
}

export default Home;
