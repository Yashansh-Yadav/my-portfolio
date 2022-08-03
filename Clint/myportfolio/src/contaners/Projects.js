import React from 'react'
import { Buffer } from 'buffer'
import "../index.css"
export const Projects = (props) => {


  return (
    <>
  {props.AllProjdata.map((data)=>{
    const ProjImg =new Buffer.from(data.proj_image).toString()

return(

    <section id="header" className="d-flex align-items-center">
    <div className='container-fluid nav_bg'>
        <div className='row mt-5 pt-4' >
            <div className='col-10 mx-auto' >
                <div className="row text-center">
                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                        <h1>
                            <strong className="brand-name">{data.proj_title}</strong>
                        </h1>
                        <p className="text-light">{data.proj_desc}</p>
                            <div className="mt-3">
                                <a href={data.proj_link} className="btn mr-md-2 mb-md-0 mb-2 btn-outline-warning  ">
                                Project Link
                                </a>
                            </div> 
                    </div>
                    {/* <div className="col-lg-6   order-1 order-lg-2 header-img">
                        <img src={imgUrl} className=" img-fluid floating" alt="../" />
                    </div> */}
                    
                <div className="col-lg-6 order-1 order-lg-2 header-img" >
                    <div className="col-md-8 mb-5 ">
                        <img src={ProjImg} className="img-fluid floating " alt="..." />
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )})}

    </>

  )
}
