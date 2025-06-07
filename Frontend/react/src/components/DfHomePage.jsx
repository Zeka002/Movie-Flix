import React from "react";
import { DfHomeS1 } from "./DfHomeS1";
import { MovieStudioSlider } from "./MovieStudioSlider";
import { CarouselSlider } from "./CarouselSlider";
import { Navbar } from "./Navbar";
import { PopularOfTheWeekSlider } from "./PopularOfTheWeekSlider";


export function DfHomePage() {
    return(
        <div className="page">
            <Navbar/>
            <DfHomeS1/>
            <MovieStudioSlider/>
            <CarouselSlider/>
            <PopularOfTheWeekSlider/>
        </div>
    )
}