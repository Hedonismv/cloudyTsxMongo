import React from 'react';
import NavBar from "./components/NavBar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Registration from "./pages/Registration";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
        <div>
            <NavBar/>
            <Routes>
                <Route path={'/registration'} element={<Registration/>}/>
                <Route path={'/login'} element={<Login/>}/>
            </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
