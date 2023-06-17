import React from 'react';
import AddDoc from './AddDoctor';
import AddPat from './AddPatient';
import Admindash from './dashboard';
import home from './home.png';
import Viewdoc from './viewDoc';
import Viewpt from './viewPt';
import dash from './dash.png';
import addPer from './addperson.png';
import './admin_home.css';
import {Link,Routes,Route} from 'react-router-dom';
export default function adHome({state}){   
    
  return(
 <>
<header>
  <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
    <div className="position-sticky">
      <div className="list-group list-group-flush mx-3 mt-4">
      <a href="/" className="list-group-item list-group-item-action py-2 ripple" aria-current="true">
          <img className="dash-image-icon" src={home}/><span>Home</span>
        </a>
        <Link  className="list-group-item list-group-item-action py-2 ripple" aria-current="true" to="/admin/adminDash">
        <img className="dash-image-icon" src={dash}/><span>Dashboard</span>
        </Link>
        <h  className="dropdown-toggle list-group-item list-group-item-action py-2 ripple" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img className="dash-image-icon" src={addPer}/><span>Doctors Info</span>
          </h>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/admin/addDoc">Add Doctors</Link></li>
            <li><Link className="dropdown-item" to="/admin/viewdoc">View Doctors</Link></li>
          </ul>
      
        <Link to="/admin" className="dropdown-toggle list-group-item list-group-item-action py-2 ripple"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
        <img className="dash-image-icon" src={addPer} /><span>Patients Info</span></Link>
        <ul className="dropdown-menu">
            <li><Link to="/admin/addPat" className="dropdown-item" >Add Patients</Link></li>
            <li><Link className="dropdown-item" to="/admin/viewpt">View Patients</Link></li>
          </ul>
      </div>
    </div>
  </nav>
  

  
  <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
    
    <div className="container-fluid">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
      
      <a className="navbar-brand" href="#">
        <h>Welcome to Admin Panel</h>
      </a>  
  
    </div>
  </nav>
</header>
<main style={{marginTop: "58px"}}>
  <div className="container pt-4"></div>
</main>
   <Routes>
   <Route path="/viewdoc" element={<Viewdoc state={state}/>}/>
   <Route path="/viewpt" element={<Viewpt state={state}/>}/>
   <Route path="/addDoc" element={<AddDoc state={state}/>} />
   <Route path="/addPat" element={<AddPat state={state}/>}/>
   <Route path="/adminDash" element={<Admindash state={state}/>}/>
   </Routes>
</>
    );
}