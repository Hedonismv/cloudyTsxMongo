import {FileAction, FileActionsTypes, FileReducer} from "../../types/file";


const initialState :FileReducer = {
    files: [],
    currentDir: null,
    popupDisplay:false,
    dirStack:[]
}

export default function fileReducer(state = initialState, action: FileAction):FileReducer {
    switch (action.type){
        case FileActionsTypes.SET_FILES:
            return {
                ...state,
                files: action.payload
            }
        case FileActionsTypes.SET_CURRENT_DIR:
            return {
                ...state,
                currentDir: action.payload
            }
        case FileActionsTypes.ADD_FILE:
            return{
                ...state,
                files: [...state.files, action.payload]
            }
        case FileActionsTypes.HANDLE_POPUP_VISION:
            return{
                ...state,
                popupDisplay: action.payload
            }
        case FileActionsTypes.PUSH_TO_STACK:
            return{
                ...state,
                dirStack: [...state.dirStack, action.payload]
            }
        case FileActionsTypes.POP_FROM_STACK:
            return{
                ...state,
                dirStack: [...state.dirStack, action.payload]
            }
        default:
            return state
    }
}