import React, {FC, useState} from 'react';
import Button from "../styledComponent/button";
import Input from "../styledComponent/Input";
import styled, {css} from "styled-components";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

interface PopupDivProps{
    viewed:boolean
}

const PopupDiv = styled.div<PopupDivProps>`
  width: 100%;
  height: 100vh;
  background: rgba(0,0,0,0.5);
  right: 0;
  left: 0;
  top:0;
  bottom: 0;
  position: absolute;
  display: none;
  justify-content: center;
  align-items: center;
  
  ${props => props.viewed && css`
    display: flex;
  `}
`
const PopupContent = styled.div`
  width: 400px;
  background: white;
  padding: 20px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
`
const PopupHeader = styled.div`
  display: flex;
  justify-content: space-between;
`


const Popup:FC = () => {

    const { popupDisplay, currentDir} = useTypedSelector(state => state.file)
    const { handlePopupVision, createDir} = useActions()
    const [dirName, setDirName] = useState<string>('')

    const handleDirCreation = () => {
        if (dirName.trim()){
            createDir(currentDir, dirName)
            handlePopupVision(false)
        }else {
            alert('Добавьте имя папки')
        }
    }

    const handleCancel = () => {
        setDirName('')
        handlePopupVision(false)
    }

    return (
        <PopupDiv viewed={popupDisplay}>
            <PopupContent>
                <PopupHeader>
                    <div>Создать новую папку</div>
                    <Button type={'text'} padding={'4px 6px'} func={() => handleCancel()}>Х</Button>
                </PopupHeader>
                <Input padding={'10px 5px 10px 0px'} type={'text'} value={dirName} placeholder={'Введите название папки'} func={(e:React.ChangeEvent<HTMLInputElement>) => setDirName(e.target.value)} margin={'20px 0'}/>
                <Button alignSelf={'flex-end'} type={'text'} padding={'10px 20px'} func={() => handleDirCreation()}>Создать</Button>
            </PopupContent>
        </PopupDiv>
    );
};

export default Popup;