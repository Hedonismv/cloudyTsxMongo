import React, {FC, useEffect, useState} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import FileList from "./FileList/FileList";
import Button from "../../styledComponent/button";
import Div from "../../styledComponent/Div";
import Input from "../../styledComponent/Input";
import styled from "styled-components";
import {myTheme} from "../../styledComponent/themes/defaultTheme";

const DLabel = styled.label`
  border: 1px solid ${myTheme.colors.mainColor};
  padding: 5px 10px;
  cursor: pointer;
`

const DropDiv = styled.div`
  width: 100%;
  height: calc(100vh - 50px - 40px);
  margin: 20px;
  border: 1px solid ${myTheme.colors.mainColor};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
`

const Disk:FC = () => {

    const { currentDir, dirStack} = useTypedSelector(state => state.file)
    const { getFiles, handlePopupVision, setCurrentDir, uploadFile } = useActions()
    const [dragEnter, setDragEnter] = useState<boolean>(false)

    const backClickHandler = () => {
        const backDirId = dirStack.pop()
        setCurrentDir(backDirId)
    }

    const fileUploadHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
        const filesUp = [{...event.target.files}] // Type 'FileList | null' is not an array type or does not have a '[Symbol.iterator]()' method that returns an iterator. fixed by adding a {}
        filesUp.forEach(file => {
            uploadFile(file, currentDir)
        })
    }

    const dragEnterHandler = (event:React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        event.stopPropagation()
        setDragEnter(true)
    }

    const dragLeaveHandler = (event:React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        event.stopPropagation()
        setDragEnter(false)
    }
    const dropHandler = (event:React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        event.stopPropagation()
        let filesUp = [...event.dataTransfer.files] // fixed in tsconfig downLevelIteration-true
        filesUp.forEach(file => {
            uploadFile(file, currentDir)
        })
        setDragEnter(false)
    }


    useEffect(() => {
        getFiles(currentDir)
    },[currentDir])

    // @ts-ignore
    return ( !dragEnter ?
        <Div display={'block'} margin={'20px 0 0 0'} onDragEnter={dragEnterHandler} onDragOver={dragEnterHandler} onDragLeave={dragLeaveHandler}>
            <Div>
                <Button type={'text'} func={() => backClickHandler()}>Назад</Button>
                <Button margin={'0 0 0 10px'} type={'text'} func={() => handlePopupVision(true)}>Создать папку</Button>
                <Div margin={'0 0 0 40px'}>
                    <DLabel htmlFor={'disk_upload_input'}>Загрузить файл</DLabel>
                    <Input multiple={true} func={(event:React.ChangeEvent<HTMLInputElement>) => fileUploadHandler(event)} id={'disk_upload_input'} display={'none'} type={'file'}/>
                </Div>
            </Div>
            <FileList/>
        </Div>
        :
        <DropDiv
            onDragEnter={(event:React.DragEvent<HTMLDivElement>) => dragEnterHandler(event)}
            onDragLeave={(event:React.DragEvent<HTMLDivElement>) => dragLeaveHandler(event)}
            onDragOver={(event:React.DragEvent<HTMLDivElement>) => dragEnterHandler(event)}
            onDrop={(event:React.DragEvent<HTMLDivElement>) => dropHandler(event)}
        >
            Перетащите файлы сюда
        </DropDiv>
    );
};

export default Disk;