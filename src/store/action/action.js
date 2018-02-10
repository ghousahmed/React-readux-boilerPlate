import ActionTypes from '../constant/constant';
import firebase from 'firebase'
import history from '../../history'

// Initialize Firebase


export function changeUserName(){
    return dispatch => dispatch({type: ActionTypes.USERNAME, payload: 'Ali'})
    
}

export function SignupUser(user){
    console.log(user)
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    .then(function(result){
        console.log(result)
        history.push('/login')

    })
    .catch(function(error) {
        console.log(error)
      });
      
    return dispatch => dispatch({type: ActionTypes.SignupUser, payload: user})
    
}

export function SigninUser(user){
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    .then(function(result){
        console.log(result)
    })
    .catch(function(error) {
        console.log(error)

        // Handle Errors here.
        // ...
      });
    // history.push('/signup')

    return dispatch => dispatch({type: ActionTypes.SigninUser, payload: user})
    
}

export function SignOut(){
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });

      return dispatch => dispatch({type: ActionTypes.SignOut})
    
}