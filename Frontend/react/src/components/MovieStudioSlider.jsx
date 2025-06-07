import React from "react";
import { useState } from "react";

import marvel from '../assets/images/studioImgs/Marvel_Logo.svg-removebg-preview.png'
import netflix from '../assets/images/studioImgs/netflix-logo-png-clip-art-removebg-preview.png'
import pixar from '../assets/images/studioImgs/Pixar-Logo-PNG-Clipart-Background.png'
import wanerBro from '../assets/images/studioImgs/transparent-hd-warner-bros-logo-701751694771269ul6ouuu2ik-removebg-preview.png'
import disney from '../assets/images/studioImgs/pngimg.com - walt_disney_PNG3.png'
import paramount from '../assets/images/studioImgs/de4vlr0-541893fe-dd27-4d36-8dda-718317e44fad.png'
import hboMax from '../assets/images/studioImgs/HBO-Max-Emblem-removebg-preview.png'
import leftArrow from '../assets/Icons/left.png'
import rightArrow from '../assets/Icons/next.png'

function MovieStudioCard(props) {
    return (
        <div>
            <div className="w-[200px] h-[100px] rounded-2xl bg-black flex justify-center items-center hover:brightness-[1.5] transition duration-300">
                <a href="#">
                    <img src={props.image} alt="" className="w-[150px] h-[80px]" />
                </a>
            </div>
        </div>
    )
}

export function MovieStudioSlider() {
    const centerY = {
        top : "50%",
        transform : "translateY(-50%)"
    }

    const [translateX, setTranslateX] = useState(0);
    const slideWidth = 500;
    const totalSlides = 6;
    const visibleSlides = 3;

    const maxTranslateX = -slideWidth * (totalSlides - visibleSlides);
    const scrollLeft = () => {
        setTranslateX((prevX) => {
            const nextX = prevX + slideWidth;
            if(nextX > 0) {
                return maxTranslateX;
            }
            return nextX;
        }) ;
    };
    const scrollRight = () => {
        setTranslateX((prevX) => {
            const nextX = prevX - slideWidth;
            if (nextX < maxTranslateX) {
                return 0;
            } 
            return nextX;
        }) ;
    };
    return (
        <div className="w-full h-auto flex justify-center overflow-hidden relative items-center py-[50px] mb-[40px]">
            <div className="w-[90%] h-auto overflow-hidden flex px-[40px] sm:px-[0px]">
                <div className="flex space-x-[20px] items-center w-[1000%] transition-transform duration-500" id="carouselImageContainer " style={{transform : `translateX(${translateX}px)`}}> 
                    <MovieStudioCard image={netflix}/>
                    <MovieStudioCard image={marvel}/>
                    <MovieStudioCard image={pixar}/>
                    <MovieStudioCard image={wanerBro}/>
                    <MovieStudioCard image={disney}/>
                    <MovieStudioCard image={paramount}/>
                    <MovieStudioCard image={hboMax}/>
                    <MovieStudioCard image={netflix}/>
                    <MovieStudioCard image={marvel}/>
                    <MovieStudioCard image={pixar}/>
                    <MovieStudioCard image={netflix}/>
                    <MovieStudioCard image={marvel}/>
                </div>
            </div>
            <button className="w-[50px] h-[50px] outline-black backdrop-blur-[40px] outline-1 bg-transparent flex justify-center items-center rounded-[50%] cursor-pointer hover:brightness-[1.2] transition duration-300 active:bg-black absolute left-[30px]" style={centerY} id="imagePreBtn" onClick={scrollLeft}>
                <img src={leftArrow} alt=""  className="w-[30px] h-[30px]"/>
            </button>
            <button className="w-[50px] h-[50px] outline-black backdrop-blur-[40px] outline-1 bg-transparent flex justify-center items-center rounded-[50%] cursor-pointer hover:brightness-[1.2] transition duration-300 active:bg-black absolute right-[30px]" style={centerY} id="imageNextBtn" onClick={scrollRight}>
                <img src={rightArrow} alt=""  className="w-[30px] h-[30px]" />
            </button>
        </div>
       
    )
}