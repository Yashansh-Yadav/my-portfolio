import React from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { IoIosDocument } from 'react-icons/io'
import { Buffer } from 'buffer'

export const Contacts = ({ContactData}) => {
    let DownloadImg = "";
    return (
      <>
         {ContactData.map((conObj)=>{
            DownloadImg = new Buffer.from(conObj.myResume).toString() 
            return(
                <div classNameName='container-fluid nav_bg mt-5 ' >
                <div className='row'>
                    <div className='col-6 mx-auto' >
    
    
    
                        <div className="alert alert-primary" role="alert">
                            <div>
                                <a href={conObj.con_linkdInLink}> <FaLinkedinIn size="7vh" color='blue' />
                                </a>
                                <h5>Check Out my Linkedin</h5>
                            </div>
    
                        </div>
    
                        <div className="alert alert-secondary" role="alert">
                            <a href={conObj.con_emailLink}> < MdEmail size="7vh" color='red' /></a>
                            <h5>Here is my mail</h5>
                        </div>
                        <div className="alert alert-success" role="alert">
                            <a href={conObj.con_instaLink}> <AiFillInstagram size="7vh" color='rgb(233, 87, 155)' /> </a>
                            <h5> In case you wanna talk to me , Welcome! </h5>
                        </div>
                        <div className="alert alert-info" role="alert">
                            <a href={conObj.con_instaPage}> <AiFillInstagram size="7vh" color='rgb(233, 87, 155)' /></a>
                            <h5>Check out some cool stuff at my photography page</h5>
                        </div>
                        <div className="alert alert-danger" role="alert">
                            <a href={conObj.con_fbLink}> <BsFacebook size="7vh" color='blue' /></a>
                            <h5>Check Out my facebook </h5>
                        </div>
                        <div className="alert alert-warning" role="alert">
                            <a href={conObj.con_GitLink}> <AiFillGithub size="7vh" color='black' /></a>
                            <h5> My GitHub account</h5>
                        </div>
                         <div className="alert alert-light" role="alert">
                            <a href={""}><IoIosDocument size="7vh" color="gray" /> </a>
                            <div className="mt-3">
                            <a href={DownloadImg} download className="btn mr-md-2 mb-md-0 mb-2 btn-outline-success  ">Download</a>
                             </div>
                            <h5>Download My resume</h5>
                        </div> 
                    </div>
                </div>
            </div> 
            )
        })} 
         
       
        </>
    )
}
