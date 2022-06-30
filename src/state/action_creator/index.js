export const postComment = (message) => {
    return (dispatch) => {
        dispatch({type: "postComment", payload: message})
    }
}

export const deleteComment = (messageID) => {
    return(dispatch) => {
        dispatch({type: "deleteComment", payload: messageID})
    }
}

export const getComments = () => {
    return(dispatch) => {
        dispatch({type: "getComment", payload :""})
    }
}