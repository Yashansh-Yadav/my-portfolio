import React from 'react'
import "../index.css"
import { useState } from 'react'
import { NavLink } from 'react-router-dom';

export const Admin = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [link, setLink] = useState("");
  const [linkName, setLinkName] = useState("");
  const [showButton, setShowButton] = useState("0");
  
  

  const uploadFile = (e) => {
    let file = e.target.files;
    //console.log(file);
    let reader = new FileReader();
    reader.readAsDataURL(file[0])
    reader.onload = (e) => {
      setImage(e.target.result);
      //  console.warn(e.target.result);
    }
  }




  const checkBtoggel = (e) => {

    if (e.target.checked === true) {
      setShowButton(1);
    }
    else {
      setShowButton(0);
    }
  }

  const submit = (e) => {
    e.preventDefault();
    if (title==="" || desc==="" || image==="" ) {
      alert("All the fields are required to be filled ");

    }
    else {
      props.AddData(title, desc, image, link, linkName, showButton );
      setTitle("");
      setDesc("");
      setImage("");
      setLink("");
      setLinkName("")

      console.log("buttom ", showButton);
    }
  }



  return (
    <>
    <div className='Submit_form ' encType="multipart/form-data"  >
      <h3 className='text-center text-light'>Enter the data </h3>
      <form onSubmit={submit} encType="multipart/form-data">
        <div className="mb-3">
          <label htmlFor="text" className="form-label text-light">Title</label>
          <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} id="exampleInputtitle" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="text" className="form-label text-light">Description</label>
          <input type="text" className="form-control" value={desc} onChange={(e) => setDesc(e.target.value)} id="exampleInputdesc" />
        </div>
        <div className="form-group text-light">
          <label for="exampleFormControlFile1">Upload Image</label>
          <input type="file" className="form-control-file" onChange={uploadFile} id="exampleFormControlFile1" />
        </div>
        <div className="mb-3">
          <label htmlFor="text" className="form-label text-light">Your Link</label>
          <input type="text" className="form-control" value={link} onChange={(e) => setLink(e.target.value)} id="exampleInputdesc" />
        </div>
        <div className="mb-3">
          <label htmlFor="text" className="form-label text-light">Link Name</label>
          <input type="text" className="form-control" value={linkName} onChange={(e) => setLinkName(e.target.value)} id="exampleInputdesc" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input text-light" value={showButton} onChange={checkBtoggel} id="exampleCheck1" />
          <label className="form-check-label text-light" for="exampleCheck1">Show button</label>
        </div>
        <button type="submit" className="btn btn-sm btn-success">Submit</button>
      </form>
    </div>
    <div className='text-center text-light'>
      <div>
      <NavLink to="/addProjects" className="btn btn-sm  mt-4 btn-warning">Add Projects</NavLink>
      </div>
      <NavLink to="/addContacts" className="btn btn-sm  mt-4 mb-4 btn-warning">Add contacts</NavLink>
    <div/>
  </div>
    </>
  )
}
