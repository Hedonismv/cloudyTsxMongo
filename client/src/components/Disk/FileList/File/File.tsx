import React, {FC} from 'react';
import {IFile} from "../../../../types/file";
import {GoFileDirectory} from 'react-icons/go'
import {AiFillFile} from 'react-icons/ai'
import {useActions} from "../../../../hooks/useActions";
import {useTypedSelector} from "../../../../hooks/useTypedSelector";
import Button from "../../../../styledComponent/button";
import styled, {css} from "styled-components";
import {myTheme} from "../../../../styledComponent/themes/defaultTheme";

interface FileProps{
    file:IFile,
}
interface GridDivProps{
    row?:boolean,
    justifySelf?:string,
    margin?:string,
    padding?:string,
    gap?:string,
    grid_temp_col?:string,
    grid_col_start?:string,
    align?:string
}
const GridDiv = styled.div<GridDivProps>`
  display: grid;
  justify-self: ${props => props.justifySelf || ''};
  margin: ${({margin}) => margin || '0'};
  padding: ${({padding}) => padding || '0'};
  gap: ${props => props.gap || ''};
  grid-template-columns: ${props => props.grid_temp_col || ''};
  grid-column-start: ${props => props.grid_col_start || ''};
  align-items: ${props => props.align || 'center'};
  
  ${props => props.row && css`
    border-bottom: 2px solid ${myTheme.colors.secondaryColor};
    cursor: pointer;
    height: 50px;
  `}
  
  .grid_date{
    grid-column-start: 5;
  }
  .grid_size{
    grid-column-start: 6;
  }
  
  &:hover{
    .grid_date{
      grid-column-start: 3;
    }
    .grid_size{
      grid-column-start: 4;
    }
    
    .download_btn{
      grid-column-start: 5;
      display: block;
    }
    
    .delete_btn{
      grid-column-start: 6;
      display: block;
    }
  }
`

const GridBtn = styled.button`
  border-style: solid;
  border-width: 1px;
  border-radius: 5px;
  transition: 0.4s ease-out;
  cursor: pointer;
  display: none;
`


const File:FC<FileProps> = ({file}) => {
    const { currentDir} = useTypedSelector(state => state.file)
    const { setCurrentDir, pushToStack, downloadFile} = useActions()

    const openDirHandler = () => {
        pushToStack(currentDir)
        setCurrentDir(file._id)
    }

    const downloadClickHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        downloadFile(file)
    }

    return (
        <GridDiv row margin={'10px 0'} grid_temp_col={'1fr 4fr repeat(4, 1fr)'} onClick={file.type === 'dir' ? () => openDirHandler(): undefined}>
            {file.type === 'dir' ? <GoFileDirectory style={{justifySelf: 'center'}}/> : <AiFillFile style={{justifySelf: 'center'}}/>}
            <GridDiv>{file.name}</GridDiv>
            <GridDiv className={'grid_date'} justifySelf={'center'}>{file.date.slice(0,10)}</GridDiv>
            <GridDiv className={'grid_size'} justifySelf={'center'}>{file.size}</GridDiv>
            { file.type !== 'dir' ?<GridBtn onClick={(e) => downloadClickHandler(e)} className={'download_btn'}>Скачать файл</GridBtn> : null}
            <GridBtn className={'delete_btn'}>Удалить</GridBtn>
        </GridDiv>
    );
};

export default File;