import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { SignupUser } from '../store/action/action';


class Signup extends Component {
    constructor(props){
        super(props)
        this.state = {
            userName: "",
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
            userName: this.state.userName,
            email: this.state.email,
            password: this.state.password
        }
        this.props.SignupUser(data);
        }

    render() {
        console.log(this.props.userName + this.props.password)
        return (
            <div>
                <div className="container">
                <form onSubmit={this.submit.bind(this)}>
                    <h1>Signup</h1>
                    <input type="text" name="userName" onChange={this.handleChange.bind(this)} placeholder="Username" />
                    <br />
                    <br />
                    <input type="email" name="email" onChange={this.handleChange.bind(this)} placeholder="Email"/>
                    <br />
                    <br />
                    <input type="password" name="password" onChange={this.handleChange.bind(this)} placeholder="password"/>
                    <br />
                    <button type="submit">Signup</button>
                    </form>
                </div>
                
            </div>
        )
    }
}

function mapStateToProp(state){
    return({
        userName: state.root.userName,
        password: state.root.password
    })
}
function mapDispatchToProp(dispatch) {
    return ({
        SignupUser: (data) => { dispatch(SignupUser(data)) }
    })
}

export default connect(mapStateToProp,mapDispatchToProp)(Signup);
