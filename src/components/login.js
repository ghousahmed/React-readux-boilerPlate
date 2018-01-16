import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { SigninUser } from '../store/action/action';


class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    
    }

    handleChange(e){
        this.setState({ [e.target.name]: e.target.value })
    }
    submit(ev){
        ev.preventDefault()
        let data = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.SigninUser(data);
        }
    render() {
        return (
            <div>
                
                <div className="container">
                <form onSubmit={this.submit.bind(this)}>
                <h1>Signin</h1>
                <input type="email" name="email" onChange={this.handleChange.bind(this)} placeholder="Email"/>
                <br />
                <br />
                <input type="password" name="password" onChange={this.handleChange.bind(this)} placeholder="password"/>
                <br />
                <button type="submit">Signin</button>
                </form>
            </div>
             

            </div>
        )
    }
}

function mapStateToProp(state) {
    return ({
        userName: state.root.userName
    })
}
function mapDispatchToProp(dispatch) {
    return ({
        SigninUser: (data) => { dispatch(SigninUser(data)) }
    })
}


export default connect(mapStateToProp, mapDispatchToProp)(Login);
