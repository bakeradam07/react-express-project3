import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import MOVIE from "../utils/MOVIE";

class Detail extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    console.log("mount it")
    MOVIE.getMovie(this.props.match.params.id)
      .then(res => this.setState({ movies: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.movies.title}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Synopsis</h1>
              <li>
                {this.state.movies.synopsis}
                </li>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/profile">← Back to Your Profile</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
