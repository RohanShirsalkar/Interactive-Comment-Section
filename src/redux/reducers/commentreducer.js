import actionType from "../constants/action_types";


export const getCommentsReducer = (state={}, {type, payload}) => {
    switch (type) {
        case actionType.GET_COMMENTS:
            return {...state, ...payload}
            break;

        default:
            return state;
    }
}

export const getPostReducer = (state={}, {type, payload}) => {

    switch (type) {
        case actionType.GET_POST:
            return {...state, ...payload}
            break;
    
        default:
            return state;
    }
}

export const postCommentsReducer = (state={}, {type, payload}) => {
    switch (type) {
        case actionType.POST_COMMENTS:
            return {...state, ...payload}
            break;
    
        default:
            return state;
    }
}

export const deleteCommentsReducer = (state={}, {type, payload}) => {
    switch (type) {
        case actionType.DELETE_COMMENTS:
            return {state}
            break;
    
        default:
            return state;
    }
}
