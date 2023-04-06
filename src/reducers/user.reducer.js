import { GET_ONE_USER, GET_USER, LOGIN_USER } from "../actions/user.action";

const initialState = {};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER:
            return action.payload;
        case GET_ONE_USER:
            return action.payload;
            case LOGIN_USER:
            return action.payload;
        default:
            return state;
    }
}