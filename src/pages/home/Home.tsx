import React from "react";
import {Route,Routes} from "react-router"
import Navbar from "../../components/navbar/Navbar";
import Traffic from "../traffic/Traffic";
import Sale from "../sale/Sale";
import Buildings from "../buildings/Buildings";
import Carte from "../../components/cartes/Carte";

export function Home() {
    return (
        <div className="App">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="Traffic" element={<Traffic/>}/>
                    <Route path="Sale" element={<Sale/>}/>
                    <Route path="Buildings" element={<Buildings/>}/>
                </Routes>
                <Carte/>
                <Navbar/>
        </div>
    );
}