import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import * as firebase from "firebase"


var config = {
    apiKey: "AIzaSyBzGcaPx2uvbi30sbFowUIenmmBSeKN8KE",
    authDomain: "planapp-372b1.firebaseapp.com",
    databaseURL: "https://planapp-372b1.firebaseio.com",
    projectId: "planapp-372b1",
    storageBucket: "planapp-372b1.appspot.com",
    messagingSenderId: "183415027394"
  };
  firebase.initializeApp(config);

const render = () => ReactDOM.render(
   
        <App />,
    document.getElementById('root')
);

render();
