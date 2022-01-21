import React from 'react';
import NavBar from "./components/NavBar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Container from "./styledComponent/Container";

function App() {
  return (
    <BrowserRouter>
        <Container>
            <NavBar/>
                <Routes>
                    <Route path={'/registration'} element={<Registration/>}/>
                    <Route path={'/login'} element={<Login/>}/>
                </Routes>
        </Container>
    </BrowserRouter>
  );
}

export default App;
