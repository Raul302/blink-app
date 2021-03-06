import React from 'react';
import {AppRouter}  from './routers/AppRouter';
import { transitions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic';
import { Provider } from 'react-redux';
import { store } from './store/store';
// import { authReducer } from '../src/auth/authReducer';
import "bootstrap/dist/css/bootstrap.css";
import "../src/assets/scss/paper-dashboard.scss";
import "../src/assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// optional cofiguration
const options = {
  // you can also just use 'bottom center'
  position: 'top center',
  timeout: 5000,
  offset: '30px',
  type: 'error',
  // you can also just use 'scale'
  transition: transitions.SCALE
}
function App() {
  return (
      <Provider store={store} >
        <AlertProvider template={AlertTemplate} {...options}>
      <AppRouter />
      </AlertProvider>
      </Provider>
  );
}

export default App; 
