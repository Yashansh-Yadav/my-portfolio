import React from 'react';
import "../index.css";
import { NavLink } from 'react-router-dom';

export const Navbar = () => {

    const naveItem={
        marginLeft:"auto",
    }
    const colorWhite={
        color : "#ffff"
    }

    return (
        <>
         
            <div className='container-fluid nav_bg ' >
                <div className='row'>
                    <div className='col-10 mx-auto' >
                        <nav className="navbar  navbar-expand-lg navbar-light bg-transprent mt-4"  >
                            <div className="container-fluid">
                                {/* <NavLink className="navbar-brand" to="/">Navbar</NavLink> */}
                                <a className="logCont" href='/'>
                                <img src="/mylogo.ico" className="img-fluid" alt="..."  height="100px" width="100px"/>
                                </a>
                               
                                <button className="navbar-toggler bg-light " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav  ml-auto mb-2 mb-lg-0 " style={naveItem}>
                                        <li className="nav-item">
                                            <NavLink  activeClassName="menu_active" className="nav-link active"  aria-current="page" to="/" style={colorWhite}>Home</NavLink>
                                        </li>
                                        <li className="activeCav-item">
                                            <NavLink  activeClassName="menu_active" className="nav-link"  to="/about" style={colorWhite} >About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink  activeClassName="menu_active" className="nav-link"  to="/Projects" style={colorWhite}>Projects</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink  activeClassName="menu_active" className="nav-link"  to="/contacts" style={colorWhite}>Contact</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}
