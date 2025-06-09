import react , {useState}from "react";
import filmIcon from '../assets/Icons/movie-film-svgrepo-com (1).svg'
import theLastOfUs from '../assets/images/homeImgs/theLastOfUs.jfif'
import arcaneS2 from '../assets/images/homeImgs/arcane-season-2-poster.avif'
import theGorge from '../assets/images/homeImgs/The_Gorge_(film)_poster.jpg'
import civilWar from '../assets/images/homeImgs/Civil-War.webp'
import newAvenger from '../assets/images/homeImgs/newAvenger.jpg'
import sonic from '../assets/images/homeImgs/sonic32.jpg'
import howToTrainYourDragon from '../assets/images/homeImgs/howTotrainYourDragon.webp'
import leftArrow from '../assets/Icons/left.png'
import rightArrow from '../assets/Icons/next.png'

export function MovieInfoCard(props) {
    return(
        <div className="flex border-white space-x-[20px] hover:cursor-pointer">
            <div className="posterImage w-[100px] h-[150px] rounded-2xl overflow-hidden hover:cursor-pointer hover:brightness-[1.5] duration-300" >
                <img src={props.image} alt="" className=" object-cover"/>
            </div>
            <div className="CardContent">
                <button className="text-white cursor-pointer text-[15px] bg-black border-1 rounded-[5px] p-[5px] mb-[15px] hover:text-black hover:bg-white transition-all duration-300">Pg-13</button>
                <h1 className="text-white text-[15px] font-sans mb-[10px] font-semibold">{props.movieName}</h1>
                <div className="text-[#9a9a9a] mb-[10px] flex items-center">
                    <img src={filmIcon} alt="" className="w-[20px] h-[20px] mr-[5px]" />
                    {props.movieType}
                </div>
                <span className=" text-white mt[10px]">
                    |{props.type}
                </span>
            </div>
        </div>
    )
}


export function PopularOfTheWeekSlider() {
     const centerY = {
            top : "50%",
            transform : "translateY(-50%)"
        }
    
        const [translateX, setTranslateX] = useState(0);
        const slideWidth = 380;
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
        <div className="w-full px-[30px] mt-[60px] mb-[40px]">
            <h1 className="text-white text-[20px] sm:text-[35px] pl-[20px] sm:pl-[40px] font-semibold font-sans mb-[30px]">Popular of the week</h1>
             <div className="w-full h-auto flex justify-center items-center relative">
                <div className="w-[95%] h-auto overflow-hidden">
                    <div className="flex space-x-[30px] items-center w-[1000%] transition-transform duration-500" id="carouselImageContainer" style={{transform : `translateX(${translateX}px)`}}> 
                        <div className="flex items-center space-x-[15px] w-[350px]">
                            <h1 className="text-white text-[40px] font-bold ml-[10px]">1</h1>
                            <MovieInfoCard image={theLastOfUs} movieName='The Last Of Us' movieType='Horror . Thriller' type='Movie'/>
                        </div>
                        <div className="flex items-center space-x-[15px] w-[350px]">
                            <h1 className="text-white text-[40px] font-bold ml-[10px]">2</h1>
                            <MovieInfoCard image={arcaneS2} movieName='Arcane Season 2' movieType='Action . Thriller' type='Movie'/>
                        </div>
                        <div className="flex items-center space-x-[15px] w-[350px]">
                            <h1 className="text-white text-[40px] font-bold ml-[10px]">3</h1>
                            <MovieInfoCard image={theGorge} movieName='The Gorge' movieType='Action . Horror . Thriller' type='Movie'/>
                        </div>
                        <div className="flex items-center space-x-[15px] w-[350px]">
                            <h1 className="text-white text-[40px] font-bold ml-[10px]">4</h1>
                            <MovieInfoCard image={sonic} movieName='Sonic' movieType='Action . Thriller' type='Movie'/>
                        </div>
                        <div className="flex items-center space-x-[15px] w-[350px]">
                            <h1 className="text-white text-[40px] font-bold ml-[10px]">5</h1>
                            <MovieInfoCard image={civilWar} movieName='Civil War' movieType='Action . Thriller' type='Movie'/>
                        </div>
                        <div className="flex items-center space-x-[15px] w-[350px]">
                            <h1 className="text-white text-[40px] font-bold ml-[10px]">6</h1>
                            <MovieInfoCard image={newAvenger} movieName='New Avenger' movieType='Action . Thriller' type='Movie'/>
                        </div>
                        <div className="flex items-center space-x-[15px] w-[350px]">
                            <h1 className="text-white text-[40px] font-bold ml-[10px]">7</h1>
                            <MovieInfoCard image={howToTrainYourDragon} movieName='How To Train Your Dragon' movieType='Horror . Thriller' type='Movie'/>
                        </div>
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