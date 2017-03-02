import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import store from 'store';

class GreatContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: typeof store.get('auth_token') !== 'undefined',
      userEmail: null,
    }
  }

  componentDidMount() {
    const { loggedIn, userEmail } = this.state;
    const auth_token = store.get('auth_token');

    if (!userEmail && loggedIn)
    axios.get('/users/1', {
      headers: {
        "Authorization": `Bearer ${auth_token}`
      }
    })
      .then(res => {
        this.setState({
          userEmail: res.data.user.email
        });
        console.log(res)
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        { this._renderContent() }
        { this._renderLogInOutButton() }
      </div>
    );
  }

  _renderContent() {
    const { loggedIn, userEmail } = this.state;

    if (loggedIn) {
      return (
        <div>
          <div className="alert alert-success">Welcome {userEmail}</div>
          <p>
            Some great content here.        
          </p>
        </div>
      );
    }
    else
      return (
        <p>
          You first need to log in.
        </p>
      )
  }

  _renderLogInOutButton() {
    const { loggedIn } = this.state;

    if (loggedIn)
      return (
        <button 
          type="button" 
          onClick={() => {
            store.remove('auth_token');
            this.setState({loggedIn:false});
          }}
          className="btn btn-primary">
          Log out
        </button>
      )
    else
      return <Link to={'/login'}>Login</Link>
  }
}

export default GreatContent;
