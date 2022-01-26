import React, {useEffect} from 'react';
import NavBar from "./components/NavBar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Container from "./styledComponent/Container";
import {useTypedSelector} from "./hooks/useTypedSelector";
import {useActions} from "./hooks/useActions";

function App() {

    const {isAuth} = useTypedSelector(state => state.user)
    const { auth} = useActions()

    useEffect(() => {
        auth()
    }, [])

  return (
    <BrowserRouter>
        <Container>
            <NavBar/>
            {!isAuth &&
                <Routes>
                    <Route path={'/registration'} element={<Registration/>}/>
                    <Route path={'/login'} element={<Login/>}/>
                </Routes>
            }
        </Container>
    </BrowserRouter>
  );
}

export default App;
