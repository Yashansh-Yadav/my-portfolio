import React from 'react'
import { useState } from 'react'
import ReactStars from 'react-rating-stars-component'

export const About = (props) => {
  const [V_name, setV_name] = useState("");
  const [V_email, setV_email] = useState("");
  const [V_feedback, setfeedback] = useState("");
  const [V_PfRating, setPfRating] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (V_name === "" || V_PfRating === "") {
      alert("email and Rating can't be blank");
    }
    else {
      props.visitorData(V_name, V_email, V_feedback, V_PfRating);
      setV_name("")
      setV_email("")
      setfeedback("")
      setPfRating("")
    }
  }

  const ratingChange = (rating) => {
    setPfRating(rating)
  }




  return (
    <>
      <div className='container-fluid '>
        <div className='row'>
          <div className='col-8 mx-auto' >
            <div class="card text-center mt-4">
              <div class="card-body">
                <h4 class="card-title">Hello! Visitors</h4>
                {props.ContactData.map((dataObj) => {
                  return (
                    <p class="card-text">{dataObj.con_About}</p>
                  )
                })}
              </div>
            </div>
            <div className='form mt-4' encType="multipart/form-data">
              <h3 className='text-center text-light'>For Visitors </h3>
              <form onSubmit={submit} encType="multipart/form-data">
                <div className="mb-3">
                  <label htmlFor="text" className="form-label text-light">Your name</label>
                  <input type="text" className="form-control" value={V_name} onChange={(e) => setV_name(e.target.value)} id="exampleInputtitle" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                  <label htmlFor="text" className="form-label text-light">Your email</label>
                  <input type="text" className="form-control" value={V_email} onChange={(e) => setV_email(e.target.value)} id="exampleInputdesc" />
                </div>
                <div className="form-outline">
                  <label className="form-label text-light" htmlFor="textAreaExample">Your feedback matters</label>
                  <textarea className="form-control" value={V_feedback} onChange={(e) => setfeedback(e.target.value)} id="textAreaExample" rows="4"></textarea>
                </div>
                <div className='stars mt-2'>
                  <label className="form-label text-light" htmlFor="textAreaExample">Your ratings here</label>
                  <ReactStars
                    activeColor="yellow"
                    size={25}
                    count={5}
                    onChange={ratingChange}
                  />

                </div>
                <button type="submit" className="btn btn-sm mt-2 mb-4 btn-success">Submit</button>
              </form>
            </div>
            <h3 className='text-center text-light'>Visitors responces</h3>

            {props.getVistorInfo.map((v_data) => {
              return (
                <div class="card mt-4 mb-4 bg-dark">
                  <div class="card-body" >
                    <h5 class="card-title text-light">{v_data.V_name}</h5>
                    <div className='stars'>
                      <ReactStars
                        a11y={false}
                        activeColor="Yellow"
                        size={15}
                        count={5}
                        value={v_data.V_PfRating}

                      />
                    </div>
                    <p class="card-text text-light mt-2 ">{v_data.V_feedback}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
