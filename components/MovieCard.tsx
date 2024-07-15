import { baseImgUrl } from "@lib/constant";
import { Movie } from "@lib/type.db";

const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <div className="movie-card">
      <img
        src={`${baseImgUrl}${
            movie?.backdrop_path || movie?.poster_path
          }`}
        className="thumbnail"
        alt={movie?.title || movie?.name}
      />
    </div>
  );
};

export default MovieCard;
