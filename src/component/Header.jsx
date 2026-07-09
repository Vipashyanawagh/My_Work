import React from 'react'
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <div className="bg-blue-300 p-3  px-5 " >
            <div className="">
                <div className="flex gap-5 justify-between    ">
                    <ul className="flex justify-center gap-5 cursor-pointer  ">
                        <NavLink to="/">HOME</NavLink>
                        <li>ABOUT</li>
                        <li>CONTACT</li>

                    </ul>
                    <ul className="flex  justify-center cursor-pointer ">
                        <li><i className="fa-solid fa-cart-shopping"></i>CART</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header