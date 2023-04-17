import {createSlice} from '@reduxjs/toolkit';

export const usersSlice = createSlice({
    name: 'users',
    initialState:{
        user:{},
        users:[]

    },
    reducers:{
        PUSH_USER: (state, action) => {  
            state.user = action.payload
        },
        PUSH_USERS: (state, action) => {  
            state.users = action.payload
        },
        
    },
})

export const {PUSH_USER, PUSH_USERS} = usersSlice.actions;

export const selectUser = (state) => state.users.user ;
export const selectUsers = (state) => state.users.users;


export default usersSlice.reducer;