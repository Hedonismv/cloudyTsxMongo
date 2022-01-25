import React from 'react';
import NavBar from "./components/NavBar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Container from "./styledComponent/Container";
import {useTypedSelector} from "./hooks/useTypedSelector";

function App() {

    const {isAuth} = useTypedSelector(state => state.user)

  return (
    <BrowserRouter>
        <Container>
            <NavBar/>
            {isAuth && <h1>Hi Hey Lal</h1>}
                <Routes>
                    <Route path={'/registration'} element={<Registration/>}/>
                    <Route path={'/login'} element={<Login/>}/>
                </Routes>
        </Container>
    </BrowserRouter>
  );
}

export default App;
