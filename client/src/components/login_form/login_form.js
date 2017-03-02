import React, {Component} from 'react';
import axios from 'axios';
import store from 'store';
import { browserHistory } from 'react-router';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: 'giotisgr@gmail.com',
      password: 'testpass',
    }
  }

  render() {
    return (
      <form onSubmit={(evt) => this.onSubmit(evt)}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>  
          <input 
            onChange={(evt) => this.setState({email: evt.target.value})}
            type="email" 
            id="email" 
            value={this.state.email}
            placeholder="Enter your e-mail" 
            className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>  
          <input 
            onChange={(evt) => this.setState({password: evt.target.value})}
            type="password" 
            id="password" 
            value={this.state.password}
            placeholder="Enter your password" 
            className="form-control" />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-success">Log in</button>
        </div>
      </form>
    );
  }

  onSubmit(evt) {
    evt.preventDefault();
    const { email, password } = this.state;

    const data = JSON.stringify({
      email: email,
      password: password
    });

    axios.post('http://localhost:3000/login', data, {
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then(res => {
        const { auth_token } = res.data;
        store.set('auth_token', auth_token);
        browserHistory.push('/');
      })
      .catch(errors => console.log(errors));
  }
}

export default LoginForm;
