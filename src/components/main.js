import React, { Component } from 'react';
import { SignOut } from '../store/action/action';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';




class Main extends Component {
    render() {
        return (
            <div>
                <h1>Main </h1>
                <h1>Hello About {this.props.userName}</h1>
                <button onClick={this.props.SignOut}>SignOut</button>
                <Link to="./user"><button>User</button></Link>
               
            </div>
        )
    }
}

 function mapStateToProp(state){
    return({
        userName: state.root.userName
    })
}
function mapDispatchToProp(dispatch) {
    return ({
        SignOut: () => { dispatch(SignOut()) }
    })
}

export default connect(mapStateToProp,mapDispatchToProp)(Main);
