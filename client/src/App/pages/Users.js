import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Users extends Component {

  constructor(props){
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    fetch('/api/getUsers')
    .then(res => res.json())
    .then(users => this.setState({ users }))
  }

  render() {
    const { users } = this.state;

    return (
      <div className="App">
        <h1>List of Users</h1>

        {users.length ? (
          <div>

            {users.map((item) => {
              return(
                <div>
                  {item}
                </div>
              );
            })}

          <Link to={'./'}>
            <button variant="raised">
            Return Home
            </button>
          </Link>

          </div>

        ) : (
          <div>
            <h2>No List Items Found</h2>
          </div>
        )
      }
      </div>

    );
  }

}

export default Users;
