import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear,
} from "./db.js";

export const home = async (req, res) => {
  const movies = getMovies();
  res.render("index", { pageTitle: "Movies!", movies });
};
export const movieDetail = async (req, res) => {
  const { id } = req.params;
  let movie = getMovieById(id);

  if (!movie) {
    return res.render("404", { pageTitle: "Not Found" });
  }

  return res.render("watch", { pageTitle: movie.title, movie });
};
export const filterMovie = (req, res) => {
  const { year, rating } = req.query;
  let pageTitle;
  let movies;

  if (year) {
    movies = getMovieByMinimumYear(year);
    pageTitle = `Searching by year: ${year}`;
  } else if (rating) {
    movies = getMovieByMinimumRating(rating);
    pageTitle = `Searching by rating: ${rating}`;
  } else {
    return res.render("404", { pageTitle: "Not Found" });
  }

  return res.render("index", { pageTitle, movies });
};
