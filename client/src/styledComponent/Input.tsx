import React, {FC} from 'react';
import styled from "styled-components";



interface InputProps{
    type:string,
    placeholder: string,
    value?:string,
    func?: any
}

const StyledInput = styled.input<InputProps>`
    
`


const Input:FC<InputProps>= (props) => {
    return (
        <StyledInput {...props} type={props.type} value={props.value} placeholder={props.placeholder} onChange={props.func}/>
    );
};

export default Input;