import axios from "axios";

export const GET_ALL_USERS = "GET_ALL_USERS";
export const GET_ONE_USER = "GET_ONE_USER";
export const LOGIN_USER = "LOGIN_USER";

//Action pour récupérer tous les utilisateurs
export const getAllUsers = () => {
    return (dispatch) => {
        return axios.get(`${process.env.REACT_APP_API_URL}user.dao.php?function=getAllUsersFromBdd`).then(res => {
            dispatch({type:GET_ALL_USERS, payload:res.data})
        }).catch(err => alert(err))

    }
}

//Action pour récupérer un utilisateur
export const getOneUser = (data) => {
    return (dispatch) => {
        return axios.get(`${process.env.REACT_APP_API_URL}user.dao.php?function=getOneUserFromBdd&&email=${data.email}&&password=${data.password}`)
        .then(res => {
            console.log(res);
            dispatch({type:GET_ONE_USER, payload:res.data})
        }).catch(err => alert(err))

    }
}

//Action pour connecter un utilisateur
export const loginUser = (data) => {
    return (dispatch) => {
        return axios.get(`${process.env.REACT_APP_API_URL}user.dao.php?function=loginUser&&email=${data.email}&&password=${data.password}`)
        .then(res => {
            console.log(res);
            dispatch({type:LOGIN_USER, payload:data})
        })
        .catch(err => alert(err))

    }
}