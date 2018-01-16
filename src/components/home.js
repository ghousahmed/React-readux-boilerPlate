import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeUserName } from '../store/action/action';
class Home extends Component {

    _changeData() {
        console.log('event called');
        this.props.changeUserName();
    }

    render() {
        return (
            <div>
                {/* <h1>Hello World {this.props.userName}</h1>
                <button onClick={this._changeData.bind(this)}>Change</button>
                <Link to='/about'>Go to About</Link> */}
                <center>
                    <h1>Signup Login Boiler Plate</h1>
                    <Link to='/login'><button className="btn btn-primary">Login</button></Link><br />
                    <br />
                    <Link to='/signup'><button className="btn btn-success">Signup</button></Link>
                </center>
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
        changeUserName: () => { dispatch(changeUserName()) }
    })
}

export default connect(mapStateToProp, mapDispatchToProp)(Home);

