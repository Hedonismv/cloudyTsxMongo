import React, {FC} from 'react';
import styled from "styled-components";

interface DivProps {
    display?:string,
    justifyContent?:string,
    direction?:string,
    align?:string,
    margin?:string
    padding?:string,
    gap?:string,
    position?:string,
    left?:string,
    top?:string
}

const StyledDiv = styled.div<DivProps>`
  display: ${(props) => props.display || 'flex'};
  justify-content: ${props => props.justifyContent || 'stretch'};
  align-items: ${props => props.align || 'stretch'};
  flex-direction: ${props => props.direction || 'row'};
  margin: ${({margin}) => margin || '0'};
  padding: ${({padding}) => padding || '0'};
  gap: ${props => props.gap || 'none'};
`

const Div:FC<DivProps> = (props) => {
    return <StyledDiv {...props}/>
};

export default Div;