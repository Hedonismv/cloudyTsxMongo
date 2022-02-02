import React, {FC, useEffect} from 'react';
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

const Disk:FC = () => {

    const { currentDir, dirStack} = useTypedSelector(state => state.file)
    const { getFiles, handlePopupVision, setCurrentDir, uploadFile } = useActions()

    const backClickHandler = () => {
        const backDirId = dirStack.pop()
        setCurrentDir(backDirId)
    }

    const fileUploadHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        const filesUp = [...event.target.files]
        filesUp.forEach(file => {
            uploadFile(file, currentDir)
        })
    }


    useEffect(() => {
        getFiles(currentDir)
    },[currentDir])

    return (
        <Div display={'block'} margin={'20px 0 0 0'}>
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
    );
};

export default Disk;