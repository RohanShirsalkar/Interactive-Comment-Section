import { combineReducers } from "redux";
import { deleteCommentsReducer, getCommentsReducer, getPostReducer, postCommentsReducer } from "./commentreducer";

const reducers = combineReducers({
    comments: getCommentsReducer,
    postComment: postCommentsReducer,
    deleteComment: deleteCommentsReducer,
    post: getPostReducer,
})

export default reducers