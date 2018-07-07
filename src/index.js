import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import { request, AuthenticationService } from './helpers/index'

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
