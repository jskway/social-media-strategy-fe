import { v4 as uuid } from 'uuid';
import lists from './dummyListsPosts';
import {
    UPDATE_LISTS,
    ADD_LIST,
    ADD_POST
} from '../actions/types';

const initialState = {
    // lists
    lists: null
};

const kanbanReducer = (state=initialState, action) => {
    const { type, payload } = action;
    
    switch (type) {
        case UPDATE_LISTS: 
            return {
                ...state,
                lists: payload
            };
        case ADD_LIST:
            return {
                ...state,
                lists: {
                    ...state.lists,
                    [payload.id]: payload
                }
            };
        case ADD_POST: 
            return {
                ...state,
                lists: {
                    ...state.lists,
                    [payload.list_id]: {
                        ...state.lists[payload.list_id],
                        posts: [
                            ...state.lists[payload.list_id].posts,
                            payload
                        ]
                    }
                }
            }
        default:
            return state;
    }
}

export default kanbanReducer;