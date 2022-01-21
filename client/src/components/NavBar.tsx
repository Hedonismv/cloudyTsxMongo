import React, {FC} from 'react';
import Flex from "../styledComponent/Flex";
import {NavLink} from "react-router-dom";
import Div from "../styledComponent/Div";



const NavBar:FC = () => {
    return (
        <Flex justifyContent={'space-around'} align={'center'}>
            <Div>
                <h3><NavLink to={'/'}>Cloud Storage</NavLink></h3>
            </Div>
            <Div gap={'1rem'}>
                <NavLink to={'/login'}>Войти</NavLink>
                <NavLink to={'/registration'}>Регистрация</NavLink>
            </Div>
        </Flex>
    );
};

export default NavBar;