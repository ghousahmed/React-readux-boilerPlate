import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import ComponentRoute from './componentsRoute'

class About extends Component {
    render() {
        return (
            <div>
                <ComponentRoute />
            </div>
        )
    }
}

// function mapStateToProp(state){
//     return({
//         userName: state.root.userName
//     })
// }
// function mapDispatchToProp(dispatch) {
//     return ({
//         SignOut: () => { dispatch(SignOut()) }
//     })
// }

export default connect(mapStateToProp,mapDispatchToProp)(About);
