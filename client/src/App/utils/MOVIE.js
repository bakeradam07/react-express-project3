import axios from "axios";

export default {
  // Gets all books
  getMovies: function() {
    return axios.get("/api/movies");
  },
  // Gets the book with the given id
  getMovie: function(id) {
    return axios.get("/api/movies/" + id);
  },
  // Deletes the book with the given id
  deleteMovie: function(id) {
    return axios.delete("/api/movies/" + id);
  },
  // Saves a book to the database
  saveMovie: function(movieData) {
    return axios.post("/api/movies/", movieData);
  }
};