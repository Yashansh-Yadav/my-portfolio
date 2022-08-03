import React from 'react'
import { Buffer } from 'buffer'
import { NavLink } from 'react-router-dom'
export const Carousel = ({ CarouselContaner }) => {



    return (
        <div className='container-fluid nav_bg'>
            <div className='row'>
                <div className='col-6 mx-auto' >
                    <div id="carouselExampleDark" class="carousel carousel-Dark slide" data-bs-ride="carousel" >
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner  "hight="40vh">
                        {CarouselContaner.map((projObj) => {
                            const imgUrl = new Buffer.from(projObj.proj_CarouselImg).toString()
                            
                            
                            return (
                                <>
                                    
                                        <div class="carousel-item active mt-5 mb-5" data-bs-interval="10000">
                                            <div className='brand-name text-center text-light'>
                                                <h4>Project Works</h4>
                                            </div>
                                           <NavLink to = "/Projects"><img src={imgUrl} class="d-block w-100 " alt="..." /></NavLink>   
                                           <div class="carousel-caption d-none d-md-block">
                                           <NavLink to="/Projects" className="btn mr-md-2 mb-md-0 mb-2 btn-outline-light  ">
                                               Go to Projects
                                            </NavLink>
                                        </div>
                                        </div>
                                  
                                </>
                            )
                        })

                        }
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
