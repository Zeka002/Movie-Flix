import React, {useState} from "react";
// import { useEffect } from "react";

import cImage1 from '../assets/images/carouselImages/1131w-YZ-0GJ13Nc8.webp'
import cImage2 from '../assets/images/carouselImages/1_iQhzIW0ZffqWaTI10ywLsA.jpg'
import cImage3 from '../assets/images/carouselImages/moonlight_0.jpg'
import cImage4 from '../assets/images/carouselImages/drive.jpg'
import cImage5 from '../assets/images/carouselImages/Joker-2019-Final-Style-steps-Poster-buy-original-movie-posters-at-starstills__62518.jpg'
import cImage6 from '../assets/images/carouselImages/original-ef853765fc767c6f1d0648662220c2a3.webp'
import leftArrow from '../assets/Icons/left.png'
import rightArrow from '../assets/Icons/next.png'

function MovieImageCard(props) {
    return (
        <div className="w-[200px] h-[300px] rounded-2xl relative overflow-hidden">
            <a href="#">
                <img src={props.McardImage} alt="" className="absolute left-0 top-0 z-0 w-full h-full hover:brightness-[1.5] transition duration-300"/>
            </a>
        </div>  
    )   
}

export function CarouselSlider() {
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
        <div className="w-full px-[30px] mb-[60px]">
            <h1 className="font-semibold text-[20px] sm:text-[35px] text-white font-sans mb-[20px] pl-[20px] sm:pl-[40px]">Just Release</h1>
            <div className="w-full h-auto flex justify-center items-center relative">
                <div className="w-[95%] h-auto overflow-hidden">
                    <div className="flex space-x-[20px] items-center w-[1000%] transition-transform duration-500" id="carouselImageContainer" style={{transform : `translateX(${translateX}px)`}}> 
                        <MovieImageCard McardImage={cImage1}/>
                        <MovieImageCard McardImage={cImage2}/>
                        <MovieImageCard McardImage={cImage3}/>
                        <MovieImageCard McardImage={cImage4}/>
                        <MovieImageCard McardImage={cImage5}/>
                        <MovieImageCard McardImage={cImage6}/>
                        <MovieImageCard McardImage={cImage1}/>
                        <MovieImageCard McardImage={cImage2}/>
                        <MovieImageCard McardImage={cImage3}/>
                        <MovieImageCard McardImage={cImage4}/>
                        <MovieImageCard McardImage={cImage5}/>
                        <MovieImageCard McardImage={cImage6}/>
                    </div>
                </div>
                <button className="w-[50px] h-[50px] outline-black backdrop-blur-[40px] outline-1 bg-transparent flex justify-center items-center rounded-[50%] cursor-pointer hover:brightness-[1.2] transition duration-300 active:bg-black absolute left-[0px]" style={centerY} id="imagePreBtn" onClick={scrollLeft}>
                    <img src={leftArrow} alt=""  className="w-[30px] h-[30px]"/>
                </button>
                <button className="w-[50px] h-[50px] outline-black backdrop-blur-[40px] outline-1 bg-transparent flex justify-center items-center rounded-[50%] cursor-pointer hover:brightness-[1.2] transition duration-300 active:bg-black absolute right-[0px]" style={centerY} id="imageNextBtn" onClick={scrollRight}>
                    <img src={rightArrow} alt=""  className="w-[30px] h-[30px]" />
                </button>
            </div>
        </div>
       
    )
}