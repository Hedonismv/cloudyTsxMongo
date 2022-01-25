import {AnyAction} from "redux";

interface FileReducer {
    name:string;
}

const initialState :FileReducer = {
    name: '',
}

export default function fileReducer(state = initialState, action: AnyAction) {
    switch (action.type){
        default:
            return state
    }
}