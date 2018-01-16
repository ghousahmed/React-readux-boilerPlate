import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
    email: "",
    userName: "",
    password: ""
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.SignupUser:
            return ({
                ...state,
                email: action.payload.email,
                userName: action.payload.userName,
                password: action.payload.password
            })
        case ActionTypes.SigninUser:
            return ({
                ...state,
                userName: action.payload.userName,
                password: action.payload.password
            })
            case ActionTypes.SignOut:
            return ({
                ...state,
                userName: "",
                password: ""
            })
        default:
            return state;
    }

}