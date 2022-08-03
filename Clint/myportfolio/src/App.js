import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import { Navbar } from "./contaners/Navbar";
import { About } from "./contaners/About";
import { Projects } from "./contaners/Projects";
import { CardCont } from "./contaners/CardCont";
import { Contacts } from "./contaners/Contacts";
import { Admin } from "./contaners/Admin";
import { AddProjects } from "./contaners/AddProjects";
import { AddContacts } from "./contaners/AddContacts";
import { Foooter } from "./contaners/Footer";

import Axios from 'axios'
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"

import { useState, useEffect } from "react";


function App() {
  const [alldata, setdata] = useState([]);
  const [allProjData, setProjData] = useState([]);
  const [allVisitorsData, setVisitorsData] = useState([]);
  const [allConatactData, setContactData] = useState([]);


  const addData = (title, desc, image, link, linkName, showButton , ) => {
    Axios.post("http://localhost:3001/api/insert", {
      pf_title: title,
      pf_desc: desc,
      my_image: image,
      pf_link: link,
      pf_linkName: linkName,
      pf_showButton: showButton,
    }).then(() => {
      alert('successfull insert');
    })

    // console.log(title , desc , image , link , linkName  , showButton );
  }

  const addVisitorData = (V_name, V_email, V_feedback, V_PfRating) => {
    Axios.post("http://localhost:3001/api/vsitor_Insert", {
      V_name: V_name,
      V_email: V_email,
      V_feedback: V_feedback,
      V_PfRating: V_PfRating,
    }).then(() => {
      alert('successfull insert');
    })
  }

  const addProjectData = (projTitle, projDesc, projLink, projImage,carouselImage) => {
    Axios.post("http://localhost:3001/api/Project_data_insert", {
      proj_title: projTitle,
      proj_desc: projDesc,
      proj_link: projLink,
      proj_image: projImage,
      proj_CarouselImg:carouselImage,
    }).then(() => {
      alert('successfull insert');
    })
  }

  const addContacts= (about , instaLink , fbLink , instapage , linkedinLink , emailLink ,GitLink , resume ) => {
    Axios.post("http://localhost:3001/api/Contact_insert", {
      con_About:about , 
      con_emailLink:emailLink ,
      con_fbLink:fbLink,
      con_instaLink:instaLink ,
      con_instaPage:instapage , 
      con_linkdInLink :linkedinLink,
      con_GitLink:GitLink,
      myResume:resume,
    }).then(() => {
      alert('successfull insert');
    })
  }

    useEffect(() => {
      Axios.get("http://localhost:3001/api/get").then((Response) => {
        setdata(Response.data);
        // console.log(Response.data);
      })
    }, [])

    useEffect(()=>{
      Axios.get("http://localhost:3001/api/getVistorsData").then((Response)=>{
        setVisitorsData(Response.data);
      })
    },[])

    useEffect(()=>{
      Axios.get("http://localhost:3001/api/getProjectData").then((Response)=>{
        setProjData(Response.data);
      })
    },[])

    useEffect(()=>{
      Axios.get("http://localhost:3001/api/getContactData").then((Response)=>{
        setContactData(Response.data);
      })
    },[])

    const background = {
      backgroundImage: "url('https://images.pexels.com/photos/13021342/pexels-photo-13021342.jpeg?cs=srgb&dl=pexels-yashansh-singh-13021342.jpg&fm=jpg')",
      backgroundSize: "cover",

    }
    return (
<>
      <div class="bg-image" style={background}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<CardCont Alldata={alldata} projData = {allProjData}/>} />
            <Route path="/about" element={<About visitorData = {addVisitorData} getVistorInfo ={allVisitorsData} ContactData ={allConatactData}/>} />
            <Route path="/Projects" element={<Projects AllProjdata={allProjData} />} />
            <Route path="/contacts" element={<Contacts ContactData = {allConatactData}/>} />
            <Route path="/admin.myportfolio@0299" element={<Admin AddData={addData} />} />
            <Route path="/addProjects" element={<AddProjects AddProjectData={addProjectData} />} />
            <Route path="/addContacts" element={<AddContacts AddContactData={addContacts} />} />
            <Route render={() => <Navigate to="/" />} />
          </Routes>
          <Foooter/>
        </Router>
      </div>
      </>
    );
  }

  export default App;