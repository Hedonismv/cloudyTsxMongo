export enum FileActionsTypes{
    SET_FILES = "SET_FILES",
    SET_CURRENT_DIR = "SET_CURRENT_DIR",
    ADD_FILE = "ADD_FILE",
    HANDLE_POPUP_VISION = "HANDLE_POPUP_VISION",
    PUSH_TO_STACK = "PUSH_TO_STACK",
    POP_FROM_STACK = "POP_FROM_STACK"
}

export type FileAction = setFiles | setCurrentDir | addFile | handlePopupVision | popFromStack | pushToStack

export interface FileReducer {
    files:any[],
    currentDir:string | null,
    popupDisplay:boolean,
    dirStack:any[]
}

export interface pushToStack{
    type: typeof FileActionsTypes.PUSH_TO_STACK,
    payload:any
}

export interface popFromStack{
    type: typeof FileActionsTypes.POP_FROM_STACK,
    payload:any
}


export interface handlePopupVision{
    type: typeof FileActionsTypes.HANDLE_POPUP_VISION,
    payload:boolean
}

export interface setFiles{
    type:typeof FileActionsTypes.SET_FILES,
    payload: any
}
export interface setCurrentDir{
    type:typeof FileActionsTypes.SET_CURRENT_DIR,
    payload:any
}

export interface addFile{
    type:typeof FileActionsTypes.ADD_FILE,
    payload:any
}

export interface IFile{
    _id:number,
    name:string,
    date:string,
    size:string,
    type:string
}
