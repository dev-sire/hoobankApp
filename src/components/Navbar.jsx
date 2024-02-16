import { useState } from "react"
import { close, logo, menu } from "../assets"
import { navLinks } from "../constants/constants"

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <nav className="w-full flex py-6 justify-between items-center navbar">
            <img src={logo} className="w-[124px] h-[34px]" alt="main-logo" />
            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                {navLinks.map((nav, index) => (
                    <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-white text-[16px] ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}>
                        <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                ))}
            </ul>
            <div className="sm:hidden flex flex-1 justify-end items-center">
                <img src={toggle ? close : menu} className="w-[28px] h-[28px] object-contain" onClick={() => setToggle(prevstate => !prevstate)} alt="menu/close logo" />
                <div className={`${toggle ? "flex" : "hidden"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                    <ul className="list-none flex flex-col justify-end items-center flex-1">
                        {navLinks.map((nav, index) => (
                            <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-white text-[16px] ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}>
                                <a href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar