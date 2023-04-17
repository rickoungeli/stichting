import { configureStore } from "@reduxjs/toolkit";
import coliesSlice from '../features/coliesReducer';
import usersSlice from "../features/usersReducer";
import homeSlice from "../features/homeReducer";

export default configureStore({
    reducer:{
        colies: coliesSlice,
        users: usersSlice,
        home:homeSlice,
        
    },
})