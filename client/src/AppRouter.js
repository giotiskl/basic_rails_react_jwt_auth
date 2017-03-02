import React from 'react';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import App from './App';
import GreatContent from './components/great_content/great_content';
import LoginForm from './components/login_form/login_form';

const AppRouter = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={GreatContent} />
        <Route path="/login" component={LoginForm}></Route>
      </Route>
    </Router>
  );
}

export default AppRouter;
