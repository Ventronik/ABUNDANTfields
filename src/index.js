import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

import store from './store';
import App from './components/App';
import { request, AuthenticationService } from './helpers/index'

import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import './index.css';

let newStore = store()

request('/auth/token')
.then((response)=>{
  AuthenticationService.setAuthState(response.data)
})

window.AuthenticationService = AuthenticationService

ReactDOM.render(
  <Provider store={newStore}>
    <App />
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
