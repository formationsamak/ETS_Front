import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Carte from "../../components/cartes/Cartes";
import CartesIcon from "../../components/cartesIcon/cartesIcon";
import Carousel from "../../components/carousel/Carousel";
import Business from "../../components/business/Business";
import Ets23d from "../../components/ETS-2d-3d/Ets23d";
import Rated from "../../components/rated/Rated";
import Icongird from "../../components/iconegrid/Icongird";
export function Home() {
    return (
        <div className="App">
            <header>
                <Navbar/>
            </header>
            <section id={"homecarte"}>
                <Carte/>
            </section>
            <section >
                <CartesIcon/>
            </section>
            <section >
                <Icongird/>
            </section>
            <section >
                <Carousel/>
            </section>
            <section >
                <Ets23d/>
            </section>
            <section >
                <Rated/>
            </section>
            <section >
                <Business/>
            </section>
        </div>
    );
}