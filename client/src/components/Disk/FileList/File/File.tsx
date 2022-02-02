import React, {FC} from 'react';
import {IFile} from "../../../../types/file";
import GridDiv from "../../../../styledComponent/GridDIv";
import {GoFileDirectory} from 'react-icons/go'
import {AiFillFile} from 'react-icons/ai'
import {useActions} from "../../../../hooks/useActions";
import {useTypedSelector} from "../../../../hooks/useTypedSelector";

interface FileProps{
    file:IFile,
}


const File:FC<FileProps> = ({file}) => {
    const { currentDir} = useTypedSelector(state => state.file)
    const { setCurrentDir, pushToStack} = useActions()

    const openDirHandler = () => {
        pushToStack(currentDir)
        setCurrentDir(file._id)
    }

    return (
        <GridDiv row margin={'10px 0'} grid_temp_col={'1fr 4fr repeat(4, 1fr)'} click={file.type === 'dir' ? () => openDirHandler(): null}>
            {file.type === 'dir' ? <GoFileDirectory style={{justifySelf: 'center'}}/> : <AiFillFile style={{justifySelf: 'center'}}/>}
            <GridDiv>{file.name}</GridDiv>
            <GridDiv grid_col_start={'5'} justifySelf={'center'}>{file.date.slice(0,10)}</GridDiv>
            <GridDiv grid_col_start={'6'} justifySelf={'center'}>{file.size}</GridDiv>
        </GridDiv>
    );
};

export default File;