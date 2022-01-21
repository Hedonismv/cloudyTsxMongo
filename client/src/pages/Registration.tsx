import React, {FC, useState} from 'react';
import Input from "../styledComponent/Input";
import {registration} from "../actions/User";

const Registration:FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    return (
        <div>
            <div>Регистрация</div>
            <Input type={'text'} func={(e:React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} value={email} placeholder={'Введите Email'}/>
            <Input type={'password'} func={(e:React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} value={password} placeholder={'Введите Пароль'}/>
            <button onClick={() => registration(email, password)}>Войти</button>
        </div>
    );
};

export default Registration;