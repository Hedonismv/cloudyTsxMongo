import React, {FC} from 'react';
import styled from "styled-components";



interface InputProps{
    type:string,
    placeholder: string,
    value?:string,
    func?: any,
    width?:string,
    padding?:string,
    margin?:string
}

const StyledInput = styled.input<InputProps>`
  width: ${({width}) => width || '100%'};
  padding: ${({padding}) => padding || '0'};
  margin: ${({margin}) => margin || '0'};
  border-color: ${props => props.theme.colors.secondaryColor};
  border-style: solid;
  border-width: 1px;
  border-radius: 4px;
  transition: 0.2s ease-out;
  
  &:focus{
    padding: 10px 5px 10px 10px;
    outline: none;
    border-color: ${props => props.theme.colors.mainTextColor};
  }
`


const Input:FC<InputProps>= (props) => {
    return (
        <StyledInput {...props} type={props.type} value={props.value} placeholder={props.placeholder} onChange={props.func}/>
    );
};

export default Input;