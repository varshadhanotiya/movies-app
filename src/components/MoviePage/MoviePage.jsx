import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails, getSimilarMovies } from "../../api/movies";

import MovieCard from "../MovieCard/MovieCard";

import styles from "./MoviePage.module.css";
// import Paginate from "../Paginate/Paginate";

const imagePrefixUrl = "https://image.tmdb.org/t/p/w500";

function MoviePage() {
  useEffect(() => {
    fetchMovieDetails();
    fetchSimilarMovies(1);
  }, []);

  const params = useParams();
  const movieId = params.movieId;
  const [movie, setMovie] = useState({});
  const [similarMovies, setSimilarMovies] = useState([]);

  const fetchMovieDetails = () => {
    getMovieDetails(movieId).then((res) => {
      if (!res) return;
      setMovie(res);
      console.log(res);
    });
  };

  const fetchSimilarMovies = (page) => {

    getSimilarMovies(movieId).then((res) => {
      if (!res) return;
      setSimilarMovies(res.results);
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <img src={`${imagePrefixUrl}${movie?.backdrop_path}`} alt="" />
        <div className={styles.details}>
          <div className={styles.title}>{movie?.title}</div>
          <div className={styles.sub}>{movie?.tagline}</div>
          <label>Story</label>
          <div className={styles.desc}>{movie?.overview}</div>
          <label>Genre</label>
          <div className={styles.desc}>
            {movie?.genres?.map((genre) => genre.name).join(", ")}{" "}
          </div>
          <label>Runtime</label>
          <div className={styles.desc}>{movie?.runtime} mins</div>
        </div>
      </div>
      <div className={styles.similar}>
        <p className={styles.title}>Similar Movies</p>
        <div className={styles.movies}>
          {similarMovies.map((item) => (
            <MovieCard movie={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MoviePage;
