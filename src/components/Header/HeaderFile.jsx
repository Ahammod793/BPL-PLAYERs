import React from 'react';
import logo from '../../assets/logo.png';
import coinLogo from '../../assets/coin.png';
import bannerIMG from '../../assets/banner-main.png';
import '../../App.css'
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
function Header({coinHandler}){
    
    return (
        <div>
            <nav className='flex flex-row justify-between w-11/12 mx-auto my-5'>
                <div>
                    <img src={logo} alt="BPL-LOGO" className='w-16 h-16'/>
                </div>
                <div>
                    <ul className='flex flex-row justify-between items-center gap-10'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Teams</a></li>
                        <li><a href="#">Fixture</a></li>
                        <li><a href="#">Schedules</a></li>
                        <div className='flex flex-row items-center border border-rose-200 rounded-lg p-2 shadow-md'>
                            <h2 className='text-xl font-medium '>
                                <span id="coin">0</span> coin &nbsp;
                            </h2>
                            <img src={coinLogo} alt="" />
                        </div>
                    </ul>
                </div>
            </nav>
            <div className='flex flex-col rounded-xl  banner bg-[#1E1E1E] items-center justify-center text-center w-11/12 py-10 mx-auto'>
                <img src={bannerIMG} alt="" className='items-center justify-center pb-6' />
                <h1 className='font-bold text-white'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <h3 className='text-[#FFFFFFB3] pt-2 pb-6'>Beyond Boundaries Beyond Limits</h3>
                <button className="btn border-2 border-[#E7FE29] rounded-lg p-1" onClick={coinHandler} >
                    <span className="bg-[#E7FE29] block rounded-lg claim p-3 shadow">Claim Free Credit</span>
                </button>
            </div>
        </div>
    )
}

export default Header;