import {FileAction, FileActionsTypes} from "../../types/file";
import axios from "axios";
import {Dispatch} from "react";


export function getFiles(dirId:any){
    return async (dispatch: Dispatch<FileAction>) => {
        try{
            const response = await axios.get(`api/files${dirId ? '?parent='+dirId : ''}`,{
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            })
            dispatch(setFiles(response.data))
            console.log(response.data)
        }catch (e) {
            console.log(e)
        }
    }
}

export function createDir(dirId:any, name:string){
    return async (dispatch: Dispatch<FileAction>) => {
        try{
            const response = await axios.post(`api/files`,{
                name,
                parent: dirId,
                type: 'dir'
            },
            {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            })
            dispatch(addFile(response.data))
            console.log(response.data)
        }catch (e) {
            console.log(e)
        }
    }
}

export function uploadFile(file:any, dirId:any){
    return async (dispatch: Dispatch<FileAction>) => {
        try{
            const formData = new FormData()
            formData.append('file', file)
            console.log(file)
            if(dirId){
                formData.append('parent', dirId)
            }
            console.log(formData.get('file'))
            const response = await axios.post(`api/files/upload/`, formData, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
                onUploadProgress: progressEvent => {
                    const totalLength = progressEvent.lengthComputable ? progressEvent.total : progressEvent.target.getResponseHeader('content-length') || progressEvent.target.getResponseHeader('x-decompressed-content-length');
                    console.log('total', totalLength)
                    if (totalLength) {
                        let progress = Math.round((progressEvent.loaded * 100) / totalLength)
                        console.log(progress)
                    }
                }
            })
            dispatch(addFile(response.data))
            console.log(response.data)
        }catch (e) {
            console.log(e)
        }
    }
}


// export function uploadFiles(file:any, dirId:any) {
//     return async (dispatch: Dispatch<FileAction>) => {
//         try {
//             const formData = new FormData()
//             formData.append('file', file)
//             if (dirId) {
//                 formData.append('parent', dirId)
//             }
//             const response = await axios.post(`api/files/upload`, formData, {
//                 headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
//                 onUploadProgress: progressEvent => {
//                     const totalLength = progressEvent.lengthComputable ? progressEvent.total : progressEvent.target.getResponseHeader('content-length') || progressEvent.target.getResponseHeader('x-decompressed-content-length');
//                     console.log('total', totalLength)
//                     if (totalLength) {
//                         let progress = Math.round((progressEvent.loaded * 100) / totalLength)
//                         console.log(progress)
//                     }
//                 }
//             });
//             dispatch(addFile(response.data))
//         } catch (e) {
//             // @ts-ignore
//             alert(e.response.data.message)
//         }
//     }
// }


export const handlePopupVision = (visible:boolean):FileAction => ({type: FileActionsTypes.HANDLE_POPUP_VISION, payload: visible})
export const addFile = (files:any):FileAction => ({type: FileActionsTypes.ADD_FILE, payload: files})
export const setFiles = (files:any):FileAction => ({type: FileActionsTypes.SET_FILES, payload: files})
export const setCurrentDir = (dir:any):FileAction => ({type: FileActionsTypes.SET_CURRENT_DIR, payload: dir})
export const pushToStack = (dir:any):FileAction => ({type: FileActionsTypes.PUSH_TO_STACK, payload: dir})
export const popFromStack = (dir:any):FileAction => ({type: FileActionsTypes.POP_FROM_STACK, payload: dir})