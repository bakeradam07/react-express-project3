import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Drinks extends Component {
  state = {
    drinks: [],
    name: "",
    brewer: "",
    ingredients: ""
  };

  componentDidMount() {
    this.loadDrinks();
  }

  loadDrinks = () => {
    API.getDrinks()
      .then(res =>
        this.setState({ drinks: res.data, name: "", brewer: "", ingredients: "" })
      )
      .catch(err => console.log(err));
  };

  deleteDrink = id => {
    API.deleteDrink(id)
      .then(res => this.loadDrinks())
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
    if (this.state.name) {
      console.log(this.state.name,
        this.state.brewer,
        this.state.ingredients)
      API.saveDrink ({
        name: this.state.name,
        brewer: this.state.brewer,
        ingredients: this.state.ingredients
      })
        .then(res => this.loadDrinks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Drinks should I try?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="Drink name (required)"
              />
              <Input
                value={this.state.brewer}
                onChange={this.handleInputChange}
                name="brewer"
                placeholder="Brewer"
              />
              <TextArea
                value={this.state.ingredients}
                onChange={this.handleInputChange}
                name="ingredients"
                placeholder="Ingredients (Optional)"
              />
              <FormBtn>
                disabled={!(this.state.drink)}
                onClick={this.handleFormSubmit}
              
                Submit Drink
              </FormBtn>
            </form>
            {/* {this.state.drink.name (
            <Col size="md-6 sm-12">
              <Jumbotron>
                <h1>My Drink</h1>
                <button onClick={() => this.setState({ drinks: [] })}>X</button>
              </Jumbotron>
              {this.state.drinks.name}
            </Col>
          )} */}
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Drinks On My List</h1>
            </Jumbotron>
            {this.state.drinks.length ? (
              <List>
                {this.state.drinks.map(drink => (
                  <ListItem key={drink._id}>
                   <Link to={"/drinks/" + drink._id}>
                      <strong>
                        {drink.name}
                      </strong>
                    </Link> 
                  {/* <button onClick={() => this.loadDrinks(drink._id)}>{drink.name}</button> */}
                    <DeleteBtn onClick={() => this.deleteDrink(drink._id)} />
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

export default Drinks;
