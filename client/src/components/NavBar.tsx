import React, {FC} from 'react';
import Flex from "../styledComponent/Flex";
import {NavLink} from "react-router-dom";
import Div from "../styledComponent/Div";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";



const NavBar:FC = () => {

    const { isAuth} = useTypedSelector(state => state.user)
    const { logoutUser} = useActions()

    return (
        <Flex justifyContent={'space-around'} align={'center'}>
            <Div>
                <h3><NavLink to={'/'}>Cloud Storage</NavLink></h3>
            </Div>
            <Div gap={'1rem'}>
                {!isAuth && <NavLink to={'/login'}>Войти</NavLink>}
                {!isAuth &&<NavLink to={'/registration'}>Регистрация</NavLink>}
                {isAuth && <div onClick={() => logoutUser()}>Выйти</div>}
            </Div>
        </Flex>
    );
};

export default NavBar;