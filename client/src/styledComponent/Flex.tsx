import React, {FC} from 'react';
import styled from "styled-components";

interface FlexProps {
    display?:string,
    justifyContent?:string,
    align?:string,
    margin?:string
    padding?:string,
    height?:string,
    width?:string
}

const StyledFlex = styled.div<FlexProps>`
  display: ${(props) => props.display || 'flex'};
  justify-content: ${props => props.justifyContent || 'stretch'};
  align-items: ${props => props.align || 'stretch'};
  margin: ${({margin}) => margin || '0'};
  padding: ${({padding}) => padding || '0'};
  height: ${props => props.height || '100%'};
  width: ${props => props.width || '100%'};
  background-color: ${props => props.theme.colors.secondaryColor};
  
`

const Flex:FC<FlexProps> = (props) => {
    return <StyledFlex {...props}/>
};

export default Flex;