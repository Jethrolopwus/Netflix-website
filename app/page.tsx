import Hero from "@components/Hero";
import Navbar from "@components/Navbar";
import { fetchGenreMovies } from "@actions/movieData";
import CategoryList from "@components/CategoryList";
import { Genres } from "@lib/type.db";

const Home = async () => {
  const genres = await fetchGenreMovies();
  const test = genres.slice(0, 2);
  // console.log(test);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="all-all-movies">
        {test.map((genre: Genres) => {
          <CategoryList
            key={genre.id.valueOf()}
            title={genre.name}
            movies={genre.movies}
          />;
        })}
      </div>
    </div>
  );
};

export default Home;
