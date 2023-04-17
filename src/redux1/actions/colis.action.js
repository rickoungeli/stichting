import axios from "axios";

export const GET_COLIS = "GET_COLIS"

export const getColis = () => {
    return (dispatch) => {
        return axios.get("http://localhost/stichting/models/user.dao.php?function=getColisFromBdd").then(res => {
            console.log(res.data)
        }).catch(err => console.log(err))

    }
}