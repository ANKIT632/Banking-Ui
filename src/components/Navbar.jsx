import { useState } from "react";
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants'

const Navbar = () => {

  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-3 items-center justify-beetween navbar">
      <img src={logo} alt="hooBank" className="w-[124px] h-[32px]" />

      <ul className=" sm:flex hidden justify-end items-center flex-1">

        {
          navLinks.map((nav, index) =>
          (<li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>)
          )
        }
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[25px] h-[20px] object-contain"
          onClick={() => setToggle((pre) => !pre)}
        />
      </div>

      <div className={`${toggle ? 'flex' : 'hidden'} p-4 bg-black-gradient absolute top-10 right-0 mx-4 my-4 min-w-[140px] rounded-xl sidebar`}>
        <ul className="flex flex-col justify-end items-center flex-1">

          {
            navLinks.map((nav, index) =>
            (<li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mb-3'}`}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>)
            )
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;

//sm : work for 768px and upper screen 