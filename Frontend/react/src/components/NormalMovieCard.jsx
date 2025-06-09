import React, {useState} from "react";
import leftArrow from '../assets/Icons/left.png'
import rightArrow from '../assets/Icons/next.png'
import wednesday from '../assets/images/homeImgs/wednesday.jpg'

export function NMovieCard(props) {
    return (
        <div className="w-[250px] cursor-pointer ">
            <div className="w-full h-[200px] mb-[20px] rounded-[10px] overflow-hidden hover:brightness-[1.5] duration-300 transition-all">
                <img src={props.image} alt="" className="w-full h-full object-cover"/>
            </div>
            <div>
                <h1 className="text-white font-sans font-semibold text-[20px]">{props.movieName}</h1>
                <p className="text-[#cfcfcf] font-sans font-normal ">|  {props.movieType}</p>
            </div>
        </div>
    )
}

export function NormalMovieCard() {
     const centerY = {
            top : "50%",
            transform : "translateY(-50%)"
        }
    
        const [translateX, setTranslateX] = useState(0);
        const slideWidth = 300;
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
         <div className="w-full px-[30px] mb-[80px] mt-[50px]">
                    <h1 className="font-semibold text-[20px] sm:text-[35px] text-white font-sans mb-[20px] pl-[20px] sm:pl-[40px]">Movies</h1>
                    <div className="w-full h-auto flex justify-center items-center relative">
                        <div className="w-[95%] h-auto overflow-hidden">
                            <div className="flex space-x-[70px] items-center w-[1000%] transition-transform duration-500" id="carouselImageContainer" style={{transform : `translateX(${translateX}px)`}}> 
                                <NMovieCard image={wednesday} movieName='Wednesday Season1' movieType='Action . Movie'/>
                                <NMovieCard image={wednesday} movieName='Wednesday Season1' movieType='Action . Movie'/>
                                <NMovieCard image={wednesday} movieName='Wednesday Season1' movieType='Action . Movie'/>
                                <NMovieCard image={wednesday} movieName='Wednesday Season1' movieType='Action . Movie'/>
                                <NMovieCard image={wednesday} movieName='Wednesday Season1' movieType='Action . Movie'/>
                                <NMovieCard image={wednesday} movieName='Wednesday Season1' movieType='Action . Movie'/>
                                <NMovieCard image={wednesday} movieName='Wednesday Season1' movieType='Action . Movie'/>
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