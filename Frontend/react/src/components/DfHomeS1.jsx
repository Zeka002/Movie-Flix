import React, {useEffect, useState} from "react";
import CyberPunk from '../assets/images/homeImgs/cyberpunkmovieposter.jpg'
import Arcane from '../assets/images/homeImgs/EN-US_Arcane_Payoff_Horizontal_Wallpaper_1920x1080_RGB_W1.0.webp'
import SquadGame from '../assets/images/homeImgs/squadgameposter.jpg'
import MoneyHeist from '../assets/images/homeImgs/moneyheistposter.jpg'
import BreakingBad from '../assets/images/homeImgs/breaking bad.jpg'
import SpiderManAcrossTheSpiderVerse from '../assets/images/homeImgs/spider-man-across-3840x2160-11595.jpg'

export function Dfhs1Content(props) {
    return (
        <div className="w-auto h-auto ">
            <span className="bg-black dfbsc-movieType text-white px-[10px] py-[5px] rounded-[10px] cursor-pointer mb-[20px]">{props.MovieType}</span>
            <h1 className="text-white dfbsc-movieHeader font-sans text-[30px] sm:text-[40px] xl:text-[60px] font-semibold mb-[10px]">{props.MovieHeader}</h1>
            <span className='text-blue-500 dfbsc-movieInfo text-[20px] cursor-pointer mb-[20px]'>{props.MovieInfo}</span>
            <p className="text-white dfbsc-movieAbout font-sans text-[13px] sm:text-[20px] xxl:text-[30px] mt-[10px] mb-[20px]">{props.MovieAbout}</p>
            <div className="flex space-x-[20px] h-[60px] dfbsc-movieBtn">
                <button className="px-[30px] bg-green-700 text-white font-sans font-semibold rounded-2xl cursor-pointer hover:bg-black transition duration-300">Watch Trailer</button>
                <button className="px-[30px] bg-transparent text-white font-sans font-semibold rounded-2xl border cursor-pointer hover:bg-white hover:text-black transition duration-300 hover:border-0 outline-0">Add Watchlist</button>
            </div>
        </div>
    );
}

export function DfHomeS1() {
    const totalSlides = 6;
    const [ currentIndex, setCurrentIndex ] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(
                (prevIndex) => (prevIndex + 1) % totalSlides
            )
        }, 10000)
        return () => clearInterval(interval)
    }, [])
    
    return (
        <div className="overflow-hidden mb-[30px]">
            <section className="dfHomeS1 w-[1000vw] h-screen flex transition-all duration-500 relative" style={{
                transform : `translateX( -${currentIndex * 100}vw)`
            }}>
                <div className="relative w-screen h-screen z-10 overflow-hidden">
                    <div className="w-full h-full">
                        <img src={CyberPunk} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="content absolute w-[80%] sm:w-[60%] h-auto left-[40px] bottom-[200px] sm:bottom-[100px] z-[22] flex items-center bg-transparent backdrop-blur-[2px]">
                        <Dfhs1Content MovieType='Series' MovieHeader='CyberPunk : Edgerunner' MovieInfo='2022 . Action ' MovieAbout='In Cyberpunk: Edgerunners, a "shot" refers to a moment of intense action, often involving violence and quick-thinking, characteristic of the Edgerunners' className='w-full h-full '/>
                    </div>
                    <div className="overlay absolute left-0 right-0 w-full inset-0 bg-gradient-to-r from-[#000000fe] via-black/30 to-transparent z-20 ">
                    </div>
                    <div className="overlay absolute left-0 right-0 w-full inset-0 bg-gradient-to-t from-[#000000] via-black/50 to-transparent z-20 ">
                    </div>
                </div>
                <div className="relative w-screen h-screen z-10 overflow-hidden">
                    <img src={Arcane} alt="" className="object-cover w-full h-full" />
                    <div className="content absolute w-[80%] sm:w-[60%] h-auto left-[40px] bottom-[200px] sm:bottom-[100px] z-[22] flex items-center bg-transparent backdrop-blur-[2px]" >
                        <Dfhs1Content MovieType='Series' MovieHeader='Arcane' MovieInfo='2022 . Action ' MovieAbout='"Arcane: League of Legends" is a Netflix animated series based on the popular online game, League of Legends. It primarily focuses on the origins of the characters Vi and Jinx (originally known as Powder), two sisters from the underground city of Zaun, as they become caught in a conflict between their home and the wealthy city of Piltover. '/>
                    </div>
                    <div className="overlay absolute left-0 right-0 w-full inset-0 bg-gradient-to-r from-[#000000ce] via-black/30 to-transparent z-20 ">
                    </div>
                    <div className="overlay absolute left-0 right-0 w-full inset-0 bg-gradient-to-t from-[#00000085] via-black/30 to-transparent z-20 ">
                    </div>
                </div>
                <div className="relative w-screen h-screen z-10 overflow-hidden">
                    <img src={SquadGame} alt="" className="object-cover w-full h-full" />
                    <div className="content absolute w-[80%] sm:w-[60%] h-auto left-[40px] bottom-[200px] sm:bottom-[100px]  z-[22] flex items-center bg-transparent backdrop-blur-[2px]" >
                        <Dfhs1Content MovieType='Series' MovieHeader='Squid Game' MovieInfo='2022 . Action ' MovieAbout=" The series revolves around a secret contest where 456 players, all of whom are in deep financial hardship, risk their lives to play a series of deadly children's games for the chance to win a ₩45.6 billion (US$39.86 million) prize. The series' title draws from ojingeo"/>
                    </div>
                    <div className="overlay absolute left-0 right-0 w-full inset-0 bg-gradient-to-r from-[#000000ce] via-black/30 to-transparent z-20 ">
                    </div>
                    <div className="overlay absolute left-0 right-0 w-full inset-0 bg-gradient-to-t from-[#00000085] via-black/30 to-transparent z-20 ">
                    </div>
                </div>
                <div className="relative w-screen h-screen z-10 overflow-hidden">
                    <img src={MoneyHeist} alt="" className="object-cover w-full h-full" />
                    <div className="content absolute w-[80%] sm:w-[60%] h-auto left-[40px] bottom-[200px] sm:bottom-[100px]  z-[22] flex items-center bg-transparent backdrop-blur-[2px]" >
                        <Dfhs1Content MovieType='Series' MovieHeader='Money Heist' MovieInfo='2022 . Action ' MovieAbout='"Money Heist," originally titled "La Casa de Papel," is a Spanish crime drama series about a group of robbers who orchestrate two heists, one on the Royal Mint of Spain and another on the Bank of Spain, led by a mastermind known as "The Professor". The series is told from the perspective of one of the robbers, Tokyo, and uses techniques like flashbacks and time-jumps to create complexity. '/>
                    </div>
                    <div className="overlay absolute left-0 right-0 w-full inset-0 bg-gradient-to-r from-[#000000ce] via-black/30 to-transparent z-20 ">
                    </div>
                    <div className="overlay absolute left-0 right-0 w-full inset-0 bg-gradient-to-t from-[#00000085] via-black/30 to-transparent z-20 ">
                    </div>
                </div>
                <div className="relative w-screen h-screen z-10 overflow-hidden">
                    <img src={SpiderManAcrossTheSpiderVerse} alt="" className="object-cover w-full h-full" />
                    <div className="content absolute w-[80%] sm:w-[60%]h-auto left-[40px] bottom-[200px] sm:bottom-[100px]  z-[22] flex items-center bg-transparent backdrop-blur-[2px]" >
                        <Dfhs1Content MovieType='Series' MovieHeader='SpiderMan : Across the Spider Verse' MovieInfo='2022 . Action ' MovieAbout='Miles Morales returns once again to save the multiverse! After being reunited with Gwen Stacy, Miles races across the multiverse ...'/>
                    </div>
                    <div className="overlay absolute left-0 right-0 w-full inset-0 bg-gradient-to-r from-[#000000ce] via-black/30 to-transparent z-20 ">
                    </div>
                    <div className="overlay absolute left-0 right-0 w-full inset-0 bg-gradient-to-t from-[#00000085] via-black/30 to-transparent z-20 ">
                    </div>
                </div>
                <div className="relative w-screen h-screen z-10 overflow-hidden">
                    <img src={BreakingBad} alt="" className="object-cover w-full h-full" />
                    <div className="content absolute w-[80%] sm:w-[60%] h-auto left-[40px] bottom-[200px] sm:bottom-[100px]  z-[22] flex items-center bg-transparent backdrop-blur-[2px]" >
                        <Dfhs1Content MovieType='Series' MovieHeader='Breaing Bad' MovieInfo='2022 . Action ' MovieAbout='"El Camino: A Breaking Bad Movie" is a 2019 American neo-Western crime thriller film that serves as a sequel and epilogue to the television series "Breaking Bad". It focuses on Jesse Pinkman escape from captivity and his subsequent journey following the events of the series finale'/>
                    </div>
                    <div className="overlay absolute left-0 right-0 w-full inset-0 bg-gradient-to-r from-[#000000ce] via-black/30 to-transparent z-20 ">
                    </div>
                    <div className="overlay absolute left-0 right-0 w-full inset-0 bg-gradient-to-t from-[#00000085] via-black/30 to-transparent z-20 ">
                    </div>
                </div>
            </section>
        </div>
    )
}