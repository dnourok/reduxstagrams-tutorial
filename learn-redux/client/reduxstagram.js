// One of the main differences behind Redux is that we keep all of the data related to our application
// in a store. So rather than holding our state in a component state we hold our state in a redux store
// So we have one giant object that contains all of our data for all of our stores

// You can think of an action in Redux as something that happens in your application. Someone clicks a photo
// someoneone loads a page, someone likes it, someone adds a comments or deletes it. Whenever
// someone does this it dispatches an action. That dispatch action has two things in it
// First type of action is increment likes and the second is a payload of information which is needed like which
// comment got deleted, which photo should be added, what was the comments someone added. Just information about what
// specifically happened

// Anytime you fire off an action or dispatch an action you're going to see all of the 
// information is going to be logged

import React from 'react';

import { render } from 'react-dom';

// Import css -- webpack is handeling all of the css loading so no need for a link tag
import css from './styles/style.styl';

// Import Components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
// essentially 'react-redux' binding package that allows us to use redux with react
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
