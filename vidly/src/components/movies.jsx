import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  // initialize movies propery by callin getMovies function
  // which is located in fakeMovieService.js file. however it is not right way to
  //initialize state property
  // movies propery : set to movies object, movies : movies will override movies state

  state = {
    movies: getMovies(),
  };
  //this movie is that movie we created it in map below, I get access by calling it, so i create new movies
  // movies array that incloud all the movies, except the movie(line40) we passed here. in the other words
  // i use filter method to get all the movies exept this movie object
  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    // if key and value are the same, we can remove one of them
    this.setState({ movies });
  };
  render() {
    const { length: moviescount } = this.state.movies;
    if (moviescount === 0)
      return (
        <p className="alert alert-danger m-2" role="alert">
          {" "}
          There are no movies in the database.
        </p>
      );
    return (
      <React.Fragment>
        <p className="alert alert-success m-2" role="alert">
          Showing {moviescount} movies in the database.
        </p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* we get each movie object and map it to  <tr> element */}
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
