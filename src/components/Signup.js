import React, { Component } from 'react';
import axios from 'axios';

import classes from './Input.module.css';





class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      username: '',
      password: ''
    })

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.login = this.login.bind(this);
  }

  handleChange(e) {
    // console.log('e is ' + e.target.value, 'name is', e.target.name)
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password
    }

    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));
      this.setState({
        username: '', 
        password: ''
      })

      window.location = '/'
  }
  
  render() {
    return (
      <div className={classes.container}>
          <h3>Create New User</h3>
        <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Username: </label>
              <input type="text" 
                required  
                className={classes.input}
                name="username"
                value={this.state.username}
                onChange={this.handleChange}/>


              <label>Password: </label>
              <input type="text"
                required  
                className={classes.input}
                name="password"
                value={this.state.password}
                onChange={this.handleChange}/>
            </div>


              <input type="submit" value="create User" className={classes.button} />

        </form>
      </div>    
    )
  }
}

export default Signup;