import React, {FC} from 'react';
import Flex from "../styledComponent/Flex";
import {NavLink} from "react-router-dom";



const NavBar:FC = () => {
    return (
        <Flex justifyContent={'space-around'} align={'center'}>
            <div>
                <h3><NavLink to={'/'}>Cloud Storage</NavLink></h3>
            </div>
            <div>
                <NavLink to={'/login'}>Войти</NavLink>
                <NavLink to={'/registration'}>Регистрация</NavLink>
            </div>
        </Flex>
    );
};

export default NavBar;