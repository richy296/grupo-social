import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { RootState } from "..";

export const localStorageMiddleware = (state: MiddlewareAPI) => {
    return (next: Dispatch) => (action: Action) => {
        next(action);
        
        if (action.type === 'post/setNewPost') {
            const {post} = state.getState() as RootState;
            localStorage.setItem('new-post', JSON.stringify(post));
            return;
        }
    }
}