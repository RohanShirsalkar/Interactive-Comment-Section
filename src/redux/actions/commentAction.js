import axios from "axios"
import actionType from "../constants/action_types"

const baseUrl = "https://dummyapi.io/data/v1"
const userId = "62bbf6cc0c0f94161ff52de7"
const headers = {
    "app-id": "62bae606f5b94f1f28befff7"
}

export const getPost = () => {
    return async function (dispatch) {
        await axios({
            url: baseUrl + `/user/${userId}/post`,
            method: "GET",
            headers: headers,
        })
            .then(res => dispatch({
                type: actionType.GET_POST,
                payload: res.data
            }))
            .catch(err => console.log(err))
    }
}

export const getComments = () => {
    // `https://dummyapi.io/data/v1/user/${userId}/comment`,
    return async function (dispatch) {
        await axios({
            url: baseUrl + `/user/${userId}/comment`,
            method: "GET",
            headers: headers
        })
            .then(res => dispatch({
                type: actionType.GET_COMMENTS,
                payload: res.data,
            }))
            .catch(err => console.log(err))
    }
}

export const postComment = (message) => {


    return async function () {

        const commentData = {
            "message": message,
            "owner": userId,
            "post": userId,
        }

        await axios({
            url: baseUrl + `/comment/create`,
            method: "POST",
            headers: headers,
            data: commentData
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
}

export const deleteComments = (id) => {

    return async function () {

        axios.delete(baseUrl + `/comment/${id}`, {
            headers: headers,
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
}
