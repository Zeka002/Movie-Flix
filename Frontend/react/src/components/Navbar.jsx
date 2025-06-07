import React from "react"
import { useEffect } from "react"
import { Link } from "react-router"
import searchIcon from '../assets/Icons/search-svgrepo-com.svg'
import barIcon from '../assets/Icons/bars-sort-svgrepo-com.svg'
import xMarkIcon from '../assets/Icons/close-svgrepo-com.svg'

export function Navbar() {
    const transfromYCenter = {
        top : "50%",
        transform : "translateY(-50%)"
    }
    useEffect(() => {
        const navSearchIconBox = document.getElementById('navSearchIconBox');
        const navSearchIcon = document.getElementById('navSearchIcon');
            navSearchIcon.addEventListener('click', () => {
                navSearchIconBox.classList.add('flex');
                navSearchIconBox.classList.remove('hidden');
        });
        const navSearchInputX = document.getElementById('searchInputX');
            navSearchInputX.addEventListener('click', () => {
                navSearchIconBox.classList.add('hidden');
                navSearchIconBox.classList.remove('flex');
        });
        const rpsNavBar = document.querySelector('#rpsNavbar');
        const navBarIcon = document.querySelector('#navBarIcon');
            navBarIcon.addEventListener('click', () => {
                rpsNavBar.classList.remove('hidden');
                rpsNavBar.classList.add('block');
        })
        const rpsNavXmark = document.querySelector('#rpsNavXmark');
            rpsNavXmark.addEventListener('click', () => {
                rpsNavBar.classList.remove('block');
                rpsNavBar.classList.add('hidden');
        })
    })
    return (
        <div className="absolute top-0 w-full h-auto">
            <div className="relative w-full h-screen overflow-x-hidden">
                <nav className="w-full h-auto px-[20px] md:px-[40px] py-[35px] flex justify-between items-center bg-gradient-to-b from-black via-10% to-transparent relative z-20 overflow-hidden" id="navbar">
                    <div className="logoBrand">
                        {/* <h1 className="text-white font-sans font-bold text-[25px]">MovieFlix</h1> */}
                        <button className="button" data-text="Awesome">
                            <span className="actual-text">&nbsp;MovieFlix&nbsp;</span>
                            <span aria-hidden="true" className="front-text">&nbsp;MovieFlix&nbsp;</span>
                        </button>
                    </div>       
                    <div className="navAtype hidden lg:block">
                        <ul className="flex items-center space-x-5">
                            <li>
                                <Link to="/" className='font-sans font-semibold text-[20px] text-white hover:text-gray-400 transition duration-400'>Home</Link>
                            </li>
                            <li>
                                <Link to="/DfDiscoverPage" className='font-sans font-semibold text-[20px] text-white hover:text-gray-400 transition duration-400'>Discover</Link>
                            </li>
                            <li>
                                <Link to="/DfMovieReleasePage" className='font-sans font-semibold text-[20px] text-white hover:text-gray-400 transition duration-400'>MovieRelease</Link>
                            </li>
                            <li>
                                <Link to="/DfFourmpage" className='font-sans font-semibold text-[20px] text-white hover:text-gray-400 transition duration-400'>Fourm</Link>
                            </li>
                            <li>
                                <Link to="/DfAbout" className='font-sans font-semibold text-[20px] text-white hover:text-gray-400 transition duration-400'>About</Link>
                            </li>
                        </ul>
                        </div>
                        <div className="flex space-x-4 items-center">
                            <div className="bg-none sm:w-[30px] sm:h-[30px] w-[25px] h-[25px]">
                                <img src={searchIcon} alt="" className="h-full w-full cursor-pointer" id="navSearchIcon"/>
                            </div>
                            <div className="w-[100px] h-[45px] hidden lg:block">
                                <button className="w-full h-full border outline-0 rounded-[10px] bg-transparent font-sans font-semibold text-[16px] text-white hover:border-white hover:bg-white hover:text-black transition duration-500 cursor-pointer">Sign up</button>
                            </div>
                            <div className="w-[100px] h-[45px] hidden lg:block">
                                <button className="w-full h-full border-white outline-0 bg-green-600 rounded-[10px] font-sans font-semibold text-white hover:bg-black transition duration-300 hover:border-green-600 cursor-pointer">Login</button>
                            </div>
                            <div className="sm:w-[40px] sm:h-[40px] w-[35px] h-[35px] block lg:hidden cursor-pointer">
                                <img src={barIcon} alt="" className="h-full w-full" id="navBarIcon"/>
                            </div>
                            {/* <label class="bar" for="check" id="navBarIcon">
                                <input type="checkbox" id="check"/>

                                <span class="top"></span>
                                <span class="middle"></span>
                                <span class="bottom"></span>
                            </label> */}
                        </div>
                    <div className="absolute z-30 right-0 justify-end mr-[40px] items-center overflow-hidden hidden transition duration-500" id="navSearchIconBox">
                        <div className="input-container relative">
                            <input className="bg-gray-500 outline-0 border-0 pl-[70px] py-[20px] font-semibold font-sans rounded-2xl w-[300px] sm:w-[300px]" name="text" type="text" placeholder="Search" id="navSearchInputIcon"/>
                            <div className="w-[25px] h-[25px] absolute left-5" style={transfromYCenter}>
                                <img src={searchIcon} alt="" className="w-full h-full" />
                            </div>
                            <div className="w-[25px] h-[25px] absolute right-5" style={transfromYCenter}>
                                <img src={xMarkIcon} alt="" className="w-full h-full cursor-pointer" id="searchInputX" />
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="rpsNavbar rpsNavOn overflow-hidden bg-transparent absolute top-0 right-0 z-30 w-full h-full sm:w-[500px] transition duration-1000 py-[40px] px-[30px] backdrop-blur-[40px] hidden" id="rpsNavbar">
                    <div className="rpsNavHeader flex justify-between mb-[20px]">
                        <h1 className="font-bold text-white font-sans text-2xl">MovieFlix</h1>
                        <div className="w-[30px] h-[30px] cursor-pointer" >
                            <img src={xMarkIcon} alt="" className="w-full h-full" id="rpsNavXmark"/>
                        </div>
                    </div>
                    <hr className="mb-[90px]"/>
                    <div className="flex flex-col items-center gap-y-5">
                        <div className="rpsNavA leftGp a1">
                            <a href="#" className="text-white text-[20px] font-normal hover:text-gray-400">Home</a>
                        </div>
                        <hr className="w-[300px] text-center rpsNavHr hr1"/>
                        <div className="rpsNavA rightGp a2">
                            <a href="#" className="text-white text-[20px] font-normal hover:text-gray-400">Discover</a>
                        </div>
                        <hr className="w-[300px] text-center rpsNavHr hr2"/>
                        <div className="rpsNavA leftGp a3">
                            <a href="#" className="text-white text-[20px] font-normal hover:text-gray-400">Movie Release</a>
                        </div>
                        <hr className="w-[300px] text-center rpsNavHr hr3"/>
                        <div className="rpsNavA rightGp a4">
                            <a href="#" className="text-white text-[20px] font-normal hover:text-gray-400">Forum</a>
                        </div>
                        <hr className="w-[300px] text-center rpsNavHr hr4"/>
                        <div className="rpsNavA leftGp a5">
                            <a href="#" className="text-white text-[20px] font-normal hover:text-gray-400">About</a>
                        </div>
                    </div>
                    <hr className="mt-[70px] mb-[50px]"/>
                    <div className="w-full flex justify-center space-x-[50px]">
                        <div className="w-[150px] h-[50px] rpsNavBtn rpsNavBtnA">
                            <button className="w-full h-full border border-amber-50 rounded-2xl text-white font-semibold  tracking-[1px] hover:bg-white hover:text-black cursor-pointer">Sign up</button>
                        </div>
                        <div className="w-[150px] h-[50px] rpsNavBtn rpsNavBtnB">
                            <button className="w-full h-full rounded-2xl border-emerald-700 border bg-green-600 font-semibold tracking-[0.8] hover:border-0 hover:bg-black hover:text-white cursor-pointer">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
