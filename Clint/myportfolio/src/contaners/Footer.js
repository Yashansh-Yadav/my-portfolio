import React from 'react'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
export const Foooter = () => {
  let footerStyle = {
    top: "16vh",
    width: "100%",
}

return (
<footer className='bg-transprent text-light py-2 ' style={footerStyle}>
    <p className='text-center'>
    copyright &copy; MyPortfolio.com
    </p>
    <div className='text-center'>
    <NavLink className="badge" to='/contacts'>
     <AiFillInstagram size="5vh" color='white'/>
    </NavLink>
    <NavLink className="badge" to='/contacts'  >
     <BsFacebook size="5vh" color='white'/>
    </NavLink>
    <NavLink className="badge" to='/contacts' >
     <AiFillGithub size="5vh" color='white'/>
    </NavLink>
    <NavLink className="badge" to='/contacts'>
     <FaLinkedinIn size="5vh" color='white'/>
    </NavLink>
    </div>
</footer>
)
}