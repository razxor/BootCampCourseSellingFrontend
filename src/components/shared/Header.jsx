import React from "react";
import ReactDOM from 'react-dom';
import { Link, useLocation } from "react-router-dom";
import ROUTES from "../../routes";
const Header = () => {
    const {pathname} = useLocation();    
    return (
        <div className="navbar bg-base-100 px-0 lg:px-16 shadow-md sticky top-0 z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li className={`${pathname==ROUTES.HOME && 'text-orange-500'}`}><Link to={ROUTES.HOME}>Home</Link></li>
                        <li className={`${pathname==ROUTES.ABOUT && 'text-orange-500'}`}><Link to={ROUTES.ABOUT}>About</Link></li>
                        <li className={`${pathname==ROUTES.BLOG && 'text-orange-500'}`}><Link to={ROUTES.BLOG}>Blog</Link></li>
                        <li className={`${pathname==ROUTES.FAQ && 'text-orange-500'}`}><Link to={ROUTES.FAQ}>FAQ</Link></li>
                    </ul>
                </div>
                <Link className="text-6xl font-bold" to={ROUTES.HOME}>
                    <img src='/images/logo.png' width={100} height={30} />
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex justify-end items-end text-right w-3/5">
                <ul className="flex gap-5 px-1">
                    <li className={`py-3 px-4 text-lg font-semibold hover:text-orange-500 cursor-pointer ${pathname==ROUTES.HOME && 'text-orange-500'}`}>
                        <Link to={ROUTES.HOME}>Home</Link>
                    </li>
                    <li className={`py-3 px-4 text-lg font-semibold hover:text-orange-500 cursor-pointer ${pathname==ROUTES.ABOUT && 'text-orange-500'}`}>
                        <Link to={ROUTES.ABOUT}>About</Link>
                    </li>
                    <li className={`py-3 px-4 text-lg font-semibold hover:text-orange-500 cursor-pointer ${pathname==ROUTES.BLOG && 'text-orange-500'}`}>
                        <Link to={ROUTES.BLOG}>Blog</Link>
                    </li>
                    <li className={`py-3 px-4 text-lg font-semibold hover:text-orange-500 cursor-pointer ${pathname==ROUTES.FAQ && 'text-orange-500'}`}>
                        <Link to={ROUTES.FAQ}>FAQ</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end sm:1/2 lg:w-2/5 pr-2 lg:pr-0">
                <div className="flex gap-3 justify-center">
                    <div className="tooltip tooltip-bottom" data-tip="Buy Book">
                        <Link className="py-2 px-4 bg-orange-500 rounded text-white text-lg font-semibold hover:bg-yellow-500">
                            <i className="fa-solid fa-cart-shopping"></i>
                        </Link>
                    </div>
                    <div className="tooltip tooltip-bottom" data-tip="Sign In">
                        <Link className="py-2 px-4 bg-orange-500 rounded text-white text-lg font-semibold hover:bg-lime-500" title="">
                        <i className="fa-solid fa-right-to-bracket"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header