import React, {useEffect} from 'react';
import NavBar from "./components/NavBar";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Container from "./styledComponent/Container";
import {useTypedSelector} from "./hooks/useTypedSelector";
import {useActions} from "./hooks/useActions";
import Disk from "./components/Disk/Disk";

function App() {

    const {isAuth} = useTypedSelector(state => state.user)
    const { auth} = useActions()

    useEffect(() => {
        auth()
    }, [])

  return (
    <BrowserRouter>
        <NavBar/>
        <Container>
            {!isAuth ?
                <Routes>
                    <Route path={'/registration'} element={<Registration/>}/>
                    <Route path={'/login'} element={<Login/>}/>
                    <Route path={'*'} element={<Navigate to={'/login'}/>}/>
                </Routes>
                :
                <Routes>
                    <Route path={'/'} element={<Disk/>}/>
                    <Route path={'*'} element={<Navigate to={'/'}/>}/>
                </Routes>
            }
        </Container>
    </BrowserRouter>
  );
}

export default App;
