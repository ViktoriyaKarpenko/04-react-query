import axios from "axios";
import type { Movie } from "../types/movie";

interface MoviesHttpResponse {
  results: Movie[];
  total_pages: number;
}

export interface MoviesFetchResult {
  movies: Movie[];
  totalPages: number;
}

const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

const fetchMovies = async (
  query: string,
  page: number = 1,
): Promise<MoviesFetchResult> => {
  const response = await axios.get<MoviesHttpResponse>(
    "https://api.themoviedb.org/3/search/movie",
    {
      params: {
        query,
        page,
      },
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    },
  );
  return {
    movies: response.data.results,
    totalPages: response.data.total_pages,
  };
};
export default fetchMovies;
