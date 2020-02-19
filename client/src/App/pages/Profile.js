import React, { Component } from 'react'
import ProfileJumbo from "../components/ProfileJumbo";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card";
import { Link } from 'react-router-dom';
import "./profileStyle.css";
import API from "../utils/API";
import { List, ListItem } from '../components/List';
import MOVIE from "../utils/MOVIE";
 
class Profile extends Component {
    state = { img: [
      './Eliza.png',
      './Bert.png',
      './Brendan.png',
      './Deborah.png',
      './Weesley.png',
      './Steve.png'
    ],
    records: [],
    status: "",
    imgsrc: ""
}


    selectstatus = (event) => {
        var target = event.target
        var value = target.value
        var name = target.name
        var img = this.state.img
        console.log(value)
        this.setState({imgsrc: img[value],
        [name]: value
        })
    }

    componentDidMount() {
        this.loadDrinks();
        this.loadMovies();
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
    
        render() {
        return (
            
            <Container fluid>
                <Row>
                    <Col size="md-6">
          
                <h1>Let us Drink</h1>
                
                <ProfileJumbo className = "profileJumbo">
                <img src = {this.state.imgsrc} className = "img" alt = "img"/>
                </ProfileJumbo>
                
            
                
                <ProfileJumbo>
                <label className = "chooseProfile" for="status">Choose your profile:</label>
            <select name = "status" value = {this.state.status} onChange = {this.selectstatus}>
            <option value="0">Eliza</option>
                <option value="1">Bert</option>
                <option value="2">Brendan</option>
                <option value="3">Deborah</option>
                <option value="4">Weesley</option>
                <option value="5">Steve</option>
            </select>
           
            </ProfileJumbo>
            
            </Col>
            <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Drinks On My List</h1>
            </Jumbotron>
            {this.state.drinks ? (
              <List>
                {this.state.drinks.map(drink => (
                  <ListItem key={drink._id}>
                    <Link to={"/drinks/" + drink._id}>
                      <strong>
                        {drink.name}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteDrink(drink._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Movies On My List</h1>
            </Jumbotron>
            {this.state.movies ? (
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
export default Profile;