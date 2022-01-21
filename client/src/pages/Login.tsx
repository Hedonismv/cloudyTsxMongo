import React, {FC, useState} from 'react';
import Input from "../styledComponent/Input";
import {login} from "../actions/User";
import {useDispatch} from "react-redux";

const Login:FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const dispatch = useDispatch()

    return (
        <div>
            <div>Логин</div>
            <Input type={'text'} func={(e:React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} value={email} placeholder={'Введите Email'}/>
            <Input type={'password'} func={(e:React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} value={password} placeholder={'Введите Пароль'}/>
            <button onClick={() => dispatch(login(email, password))}>Войти</button>
        </div>
    );
};

export default Login;