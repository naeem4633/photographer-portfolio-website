import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const Header = ({ fixed, transparent }) => {
    const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);

    const handlePortfolioHover = () => {
      setIsPortfolioOpen(true);
    };
  
    const handlePortfolioUnhover = () => {
      setIsPortfolioOpen(false);
    };
    
  return (
    <section className={fixed ? "fixed top-0 bg-transparent w-full h-[15vh] text-white" : "bg-gray-800 w-full h-[15vh] text-white"}>
        <div className='h-full flex flex-row justify-between px-16 items-center'>
            <div className='bg-gray-900 p-2 text-white'>
                <Link to={'/'} className='h-24 p-2 bg-gray-900 flex flex-col items-center justify-center text-2xl outline outline-2 outline-gray-100 cursor-pointer'>
                    <p>JOHN DOE</p>
                    <p className='font-bold'>IMAGES</p>
                </Link>
            </div>  
            <div className=' flex items-center'>
                <div className='flex flex-row justify-between space-x-20'>
                    <ul className='flex flex-row space-x-8 tracking-wider font-semibold'>
                        <Link to={'/'} className='cursor-pointer hover:underline'>HOME</Link>
                        <div className='flex flex-col items-center space-x-1 cursor-pointer hover:underline'>
                            <li onMouseEnter={handlePortfolioHover} onClick={() => setIsPortfolioOpen(false)} className='flex flex-row items-center space-x-2 cursor-pointer hover:underline'>
                                <p>PORTFOLIO</p>
                                <img className={`w-3 h-3 ${isPortfolioOpen ? 'transform rotate-180' : ''}`} src='../static/images/down-arrow.png'></img>
                            </li>
                            {isPortfolioOpen && (
                            <ul onMouseLeave={handlePortfolioUnhover} className='w-36 absolute mt-8 flex flex-col bg-gray-700 text-sm'>
                                <Link to={'/architecture'} className='p-2 hover:bg-gray-800'>ARCHITECTURE</Link>
                                <Link to={'/commercial'} className='p-2 hover:bg-gray-800'>COMMERCIAL</Link>
                                <Link to={'/healthcare'} className='p-2 hover:bg-gray-800'>HEALTHCARE</Link>
                            </ul>   
                            )}
                        </div>

                        <Link to={'/about'} className='cursor-pointer hover:underline'>ABOUT</Link>
                        <Link to={'/contact'} className='cursor-pointer hover:underline'>CONTACT</Link>
                    </ul>
                    <ul className='flex flex-row space-x-3 font-semibold items-center'>
                        <li>
                            <img className='w-4 h-4 cursor-pointer' src='../static/images/twitter.png'></img>
                        </li>
                        <li>
                            <img className='w-4 h-4 cursor-pointer' src='../static/images/facebook.png'></img>
                        </li>
                        <li>
                            <img className='w-4 h-4 cursor-pointer' src='../static/images/instagram.png'></img>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Header