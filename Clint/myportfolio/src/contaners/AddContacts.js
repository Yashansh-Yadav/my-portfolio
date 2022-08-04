import React from 'react'
import { useState } from 'react';

export const AddContacts = (props) => {
  const [about, setAbout] = useState("");
  const [instaLink, setInstaLink] = useState("");
  const [instapage, setInstapage] = useState("");

  const [fbLink, setFbLInk] = useState("");
  const [linkedinLink, setlinkedinLink] = useState("");
  const [emailLink, setEmailLink] = useState("");
  const [GitLink, setGitLink] = useState("");
  const [resume, setResume] = useState("");


  const submit = (e) => {
    e.preventDefault();
    if (about === "" || linkedinLink === "" || resume === "" || emailLink === "") {
      alert("All the fields are required to be filled ");

    }
    else {

      props.AddContactData(about, instaLink, instapage, fbLink, linkedinLink, ('"' + 'mailto:' + emailLink + '"'), GitLink, resume);

      setAbout("")
      setEmailLink("")
      setFbLInk("")
      setInstaLink("")
      setResume("")
      setlinkedinLink("")
      setGitLink("")
      setInstapage("")
    }
  }

  const uploadResume = (e) => {
    let resume = e.target.files;
    //console.log(file);
    let reader = new FileReader();
    reader.readAsDataURL(resume[0])
    reader.onload = (e) => {
      setResume(e.target.result);
      //  console.warn(e.target.result);
    }
  }

  return (
    <div className='container-fluid '>
      <div className='row'>
        <div className='col-8 mx-auto' >
          <div className='form ' encType="multipart/form-data"  >
            <h3 className='text-center text-light'>Enter Contact data </h3>
            <form onSubmit={submit} encType="multipart/form-data">
              <div className="mb-3">
                <label htmlFor="text" className="form-label text-light">About</label>
                <input type="text" className="form-control" value={about} onChange={(e) => setAbout(e.target.value)} id="exampleInputtitle" aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="text" className="form-label text-light" >Email Link</label>
                <input type="text" className="form-control" value={emailLink} onChange={(e) => setEmailLink(e.target.value)} id="exampleInputdesc" />
              </div>
              <div className="mb-3">
                <label htmlFor="text" className="form-label text-light" >GitHub Link</label>
                <input type="text" className="form-control" value={GitLink} onChange={(e) => setGitLink(e.target.value)} id="exampleInputdesc" />
              </div>
              <div className="mb-3">
                <label htmlFor="text" className="form-label text-light">Your LinkedIn</label>
                <input type="text" className="form-control" value={linkedinLink} onChange={(e) => setlinkedinLink(e.target.value)} id="exampleInputdesc" />
              </div>

              <div className="mb-3">
                <label htmlFor="text" className="form-label text-light" >Instagram Link</label>
                <input type="text" className="form-control" value={instaLink} onChange={(e) => setInstaLink(e.target.value)} id="exampleInputdesc" />
              </div>
              <div className="mb-3">
                <label htmlFor="text" className="form-label text-light" >Instagram Page Link</label>
                <input type="text" className="form-control" value={instapage} onChange={(e) => setInstapage(e.target.value)} id="exampleInputdesc" />
              </div>
              <div className="mb-3">
                <label htmlFor="text" className="form-label text-light" >FaceBook Link</label>
                <input type="text" className="form-control" value={fbLink} onChange={(e) => setFbLInk(e.target.value)} id="exampleInputdesc" />
              </div>
              <div className="form-group text-light">
                <label for="exampleFormControlFile1">Upload resume</label>
                <input type="file" className="form-control-file" onChange={uploadResume} id="exampleFormControlFile1" />
              </div>
              <button type="submit" className="btn btn-sm btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
