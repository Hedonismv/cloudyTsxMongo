import React, {FC} from 'react';
import styled from "styled-components";

interface PropsContainer {

}


const StyledContainer = styled.div`
  margin: auto;
  max-width: 1190px;
`


const Container:FC<PropsContainer> = (props) => {
    return <StyledContainer {...props}/>
};

export default Container;