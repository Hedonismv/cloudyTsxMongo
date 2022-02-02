import React, {FC} from 'react';
import styled, {css} from "styled-components";
import {myTheme} from "./themes/defaultTheme";

interface GridDivProps {
    display?:string,
    justifyContent?:string,
    direction?:string,
    align?:string,
    margin?:string
    padding?:string,
    gap?:string,
    position?:string,
    left?:string,
    top?:string,
    grid_temp_col?:string,
    grid_col_start?:string,
    justifySelf?:string,
    border?:string,
    row?: boolean,
    five?:boolean,
    six?:boolean,
    click?:any
}

const StyledGridDiv = styled.div<GridDivProps>`
  display: ${(props) => props.display || 'grid'};
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
    
    &:hover{
      &five{
        
      }
    }
  `}

  ${props => props.five && css`
    grid-column-start: 5;
  `}
  ${props => props.six && css`
    grid-column-start: 6;
  `}
`

const GridDiv:FC<GridDivProps> = (props) => {
    return <StyledGridDiv {...props} onClick={props.click}/>
};

export default GridDiv;