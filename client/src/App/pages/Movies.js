import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import MOVIE from "../utils/MOVIE";

class Movies extends Component {
  state = {
    movies: [],
    title: "",
    director: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadMovies();
  }

  loadMovies = () => {
    MOVIE.getMovies()
      .then(res =>
        this.setState({ movies: res.data, title: "", director: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deleteMovie = id => {
    MOVIE.deleteMovie(id)
      .then(res => this.loadMovies())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.director) {
      console.log(this.state.title,
        this.state.director,
        this.state.synopsis)
      MOVIE.saveMovie({
        title: this.state.title,
        director: this.state.director,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadMovies())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Movies should I watch?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Movie name (required)"
              />
              <Input
                value={this.state.director}
                onChange={this.handleInputChange}
                name="director"
                placeholder="Director (required)"
              />
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Movie synopsis (Optional)"
              />
              <FormBtn
                disabled={!(this.state.director && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Movie
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Movies On My List</h1>
            </Jumbotron>
            {this.state.movies.length ? (
              <List>
                {this.state.movies.map(movie => (
                  <ListItem key={movie._id}>
                    <Link to={"/movies/" + movie._id}>
                      <strong>
                        {movie.title}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteMovie(movie._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Movies;
