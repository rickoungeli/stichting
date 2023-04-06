import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import utilisateursReducer from "./utilisateurs.reducer";
import colisReducer from "./colis.reducer";
import clientsReducer from "./clients.reducer";

export default combineReducers({
    userReducer,
    utilisateursReducer,
    colisReducer,
    clientsReducer
});