import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/Movie';

interface Props {
  movies: Movie[];
  searchMovie: string;
}

export const MoviesList: React.FC<Props> = ({ movies, searchMovie }) => {
  const filteredMovieList = movies.filter(
    (movie) => (
      movie.title.toLowerCase().includes(searchMovie.toLowerCase())
    ),
  );

  return (
    <div className="movies">
      {filteredMovieList.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
