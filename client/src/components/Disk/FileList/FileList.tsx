import React, {FC} from 'react';
import Div from "../../../styledComponent/Div";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import File from './File/File';
import GridDiv from "../../../styledComponent/GridDIv";
import Popup from "../../Popup";

const FileList:FC = () => {

    const { files} = useTypedSelector(state => state.file)
    // const files = [
    //     {_id:1, name:'directory', type: 'dir', size: '5gb', date: '25.01.2022'},
    //     {_id:2, name:'directory2', type: 'file', size: '10gb', date: '12.01.2022'}
    // ]


    return (
        <Div display={'block'} margin={'20px 0'}>
            <GridDiv display={'grid'} grid_temp_col={'1fr 4fr repeat(4,1fr)'}>
                <GridDiv display={'grid'} grid_col_start={'2'} >Название</GridDiv>
                <GridDiv display={'grid'} grid_col_start={'5'} justifySelf={'center'}>Дата</GridDiv>
                <GridDiv display={'grid'} grid_col_start={'6'} justifySelf={'center'}>Размер</GridDiv>
            </GridDiv>
            {!files.length
                ?
                <h1 style={{textAlign: 'center'}}>У вас нет файлов</h1>
                :
                files.map(file => (
                    <File key={file._id} file={file}/>
                ))
            }
            <Popup/>
        </Div>
    );
};

export default FileList;