import React from "react";
import "../index.css"
import { Buffer } from 'buffer';

export const Home = ({ HomeContaner }) => {

    const imgUrl = new Buffer.from(HomeContaner.pf_image).toString()

    return (

        <>
            <section id="header" className="d-flex align-items-center">
                <div className='container-fluid nav_bg'>
                    <div className='row mt-5 pt-4' >
                        <div className='col-10 mx-auto' >
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>
                                        <strong className="brand-name">{HomeContaner.pf_title}</strong>
                                    </h1>
                                    <p className="text-light">{HomeContaner.pf_desc}</p>
                                    {(HomeContaner.pf_showButton === 1) ?
                                        <div className="mt-3">
                                            <a href={HomeContaner.pf_link} className="btn mr-md-2 mb-md-0 mb-2 btn-outline-warning  ">
                                                {HomeContaner.pf_linkName}
                                            </a>
                                        </div> : <></>
                                    }
                                </div>
                                {/* <div className="col-lg-6   order-1 order-lg-2 header-img">
                                    <img src={imgUrl} className=" img-fluid floating" alt="../" />
                                </div> */}
                                
                            <div className="col-lg-6 order-1 order-lg-2 header-img" >
                                <div className="col-md-8 mb-5 ">
                                    <img src={imgUrl} className="img-fluid floating " alt="..." />
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
