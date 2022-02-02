import React, {FC} from 'react';
import styled from "styled-components";



interface ButtonProps{
    type:any,
    func?: any,
    width?:string,
    padding?:string,
    margin?:string,
    alignSelf?:string,
    className?:string
}

const StyledButton = styled.button<ButtonProps>`
  padding: ${({padding}) => padding || '0'};
  margin: ${({margin}) => margin || '0'};
  border-color: ${props => props.theme.colors.secondaryColor};
  align-self: ${props => props.alignSelf || ''};
  border-style: solid;
  border-width: 1px;
  border-radius: 5px;
  transition: 0.4s ease-out;
  cursor: pointer;
  
  .download_btn{
    display: none;
  }

  .delete_btn{
    display: none;
  }
  
  &:hover{
    background-color: ${props => props.theme.colors.mainColor};
    color: ${props => props.theme.colors.secondaryColor};
  }
`


const Button:FC<ButtonProps>= (props) => {
    return (
        <StyledButton {...props} type={props.type} onClick={props.func} className={props.className}/>
    );
};

export default Button;