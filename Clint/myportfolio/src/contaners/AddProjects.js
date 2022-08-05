import React from 'react'
import { useState } from 'react';

export const AddProjects = (props) => {
  const [projTitle, setProjTitle] = useState("");
  const [projDesc, setProjDesc] = useState("");
  const [projLink, setProjLink] = useState("");
  const [projImage, setProjImage] = useState("");
  const [carouselImage, setcarouselImage] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (projTitle === "" || projLink === "" || projImage === "" || projDesc === "" || carouselImage === "") {
      alert("All the fields are required to be filled ");

    }
    else {
      props.AddProjectData(projTitle, projDesc, projLink, projImage, carouselImage);

      setProjTitle("");
      setProjDesc("");
      setProjImage("");
      setProjLink("");
      setcarouselImage("")
    }
  }

  const uploadProjFile = (e) => {
    let Projfile = e.target.files;
    //console.log(file);
    let reader = new FileReader();
    reader.readAsDataURL(Projfile[0])
    reader.onload = (e) => {
      setProjImage(e.target.result);
      //  console.warn(e.target.result);
    }
  }
  const uploadProjFileCr = (e) => {
    let carouselfile = e.target.files;
    //console.log(file);
    let reader = new FileReader();
    reader.readAsDataURL(carouselfile[0])
    reader.onload = (e) => {
      setcarouselImage(e.target.result);
       console.warn(e.target.result);
    }
  }

  return (
    <div className='container-fluid '>
      <div className='row'>
        <div className='col-8 mx-auto' >
          <div className='form' encType="multipart/form-data"  >
            <h3 className='text-center text-light'>Enter Project data </h3>
            <form onSubmit={submit} encType="multipart/form-data">
              <div className="mb-3">
                <label htmlFor="text" className="form-label text-light">Project title</label>
                <input type="text" className="form-control" value={projTitle} onChange={(e) => setProjTitle(e.target.value)} id="exampleInputtitle" aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="text" className="form-label text-light">Project description</label>
                <input type="text" className="form-control" value={projDesc} onChange={(e) => setProjDesc(e.target.value)} id="exampleInputdesc" />
              </div>
              <div className="form-group text-light mb-4">
                <label for="exampleFormControlFile1 ">Upload project image</label>
                <input type="file" className="form-control-file mt-2" onChange={uploadProjFile} id="exampleFormControlFile1" />
              </div>
              <div className="form-group text-light mb-4">
                <label for="exampleFormControlFile1 ">Upload project image for carousel</label>
                <input type="file" className="form-control-file mt-2" onChange={uploadProjFileCr} id="exampleFormControlFile1" />
              </div>
              <div className="mb-3">
                <label htmlFor="text" className="form-label text-light" >Project Link</label>
                <input type="text" className="form-control" value={projLink} onChange={(e) => setProjLink(e.target.value)} id="exampleInputdesc" />
              </div>
              <button type="submit" className="btn btn-sm btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
