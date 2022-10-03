import React from 'react';
import {Home} from "./pages/home/Home";
import {Route, Routes} from "react-router";
import Traffic from "./pages/traffic/Traffic";
import Sale from "./pages/sale/Sale";
import Buildings from "./pages/buildings/Buildings";


function App() {
    return (
        <>
            <Routes>
                <Route path="home" element={<Home/>}/>
                <Route path="traffic" element={<Traffic/>}/>
                <Route path="sale" element={<Sale/>}/>
                <Route path="buildings" element={<Buildings/>}/>
             
            </Routes>
        </>
    );
}

export default App;
