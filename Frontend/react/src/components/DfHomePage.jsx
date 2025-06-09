import React from "react";
import { DfHomeS1 } from "./DfHomeS1";
import { MovieStudioSlider } from "./MovieStudioSlider";
import { CarouselSlider } from "./CarouselSlider";
import { Navbar } from "./Navbar";
import { PopularOfTheWeekSlider } from "./PopularOfTheWeekSlider";
import { FeatureInMovieFlix } from "./FeatureInMovieFlix";
import { NormalMovieCard } from "./NormalMovieCard";

export function DfHomePage() {
    return(
        <div className="page">
            <Navbar/>
            <DfHomeS1/>
            <MovieStudioSlider/>
            <CarouselSlider/>
            <PopularOfTheWeekSlider/>
            <FeatureInMovieFlix/>
            <NormalMovieCard/>
            <NormalMovieCard/>
            <NormalMovieCard/>
        </div>
    )
}