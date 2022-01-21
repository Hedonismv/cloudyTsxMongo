import React, {FC, useState} from 'react';
import Input from "../styledComponent/Input";
import {login} from "../actions/User";
import {useDispatch} from "react-redux";
import Div from "../styledComponent/Div";
import Button from "../styledComponent/button";

const Login:FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const dispatch = useDispatch()

    return (
        <Div justifyContent={'center'} align={'center'} padding={'250px 0 0 0'}>
            <Div direction={'column'} align={'center'}>
                <div>Войти в аккаунт</div>
                <Input type={'text'} margin={'15px 0'} padding={'10px 5px 10px 40px'} func={(e:React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} value={email} placeholder={'Введите Email'}/>
                <Input type={'password'} margin={'15px 0'} padding={'10px 5px 10px 40px'} func={(e:React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} value={password} placeholder={'Введите Пароль'}/>
                <Button padding={'10px 30px'} type={'submit'} func={() => dispatch(login(email, password))}>Войти</Button>
            </Div>
        </Div>
    );
};

export default Login;