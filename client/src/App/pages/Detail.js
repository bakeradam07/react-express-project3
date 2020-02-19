import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { List, ListItem } from "../components/List";

class Detail extends Component {
  state = {
    drink: []
  };

  componentDidMount() {
    console.log("mount it")
    API.getDrink(this.props.match.params.id)
      .then(res => this.setState({ drink: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.drink.name}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Ingredients</h1>
              <li>
                {this.state.drink.ingredients}
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
