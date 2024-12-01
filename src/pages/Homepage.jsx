import React from "react";
import NavBar from "../components/NavBar";
import ItemsFlow from "../components/ItemsFlow";
import Offers from "../components/Offers";
import MenFashion from "../components/MenFashion";
import WomenFashion from "../components/WomenFashion";
import KidsWear from "../components/KidsWear";

function Homepage() {
    return (
        <div>
            <NavBar></NavBar>
            <main>
                <ItemsFlow></ItemsFlow>
                <Offers></Offers>
                <MenFashion></MenFashion>
                <WomenFashion></WomenFashion>
                <KidsWear></KidsWear>
            </main>
        </div>
    );
}

export default Homepage;
