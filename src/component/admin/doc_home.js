import React from 'react';
import home from './home.png';
import dash from './dash.png';
import addPer from './addperson.png';
import Ptrecord from './patientrecord';
import Consult from './consult';
import PtConsult from './ptconsult';
import './admin_home.css';
import {Link,Routes,Route} from 'react-router-dom';
export default function docHome({state}){   
    
  return(
 <>
<header>
  <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
    <div className="position-sticky">
      <div className="list-group list-group-flush mx-3 mt-4">
      <Link to="/" className="list-group-item list-group-item-action py-2 ripple" aria-current="true">
          <img className="dash-image-icon" src={home}/><span>Home</span>
        </Link>
        <Link  className="list-group-item list-group-item-action py-2 ripple" aria-current="true" to="/doc/ptconsult">
          <img className="dash-image-icon" src={addPer}/><span>Consult</span>
          </Link>
        <Link to="/doc/ptrecord" className="list-group-item list-group-item-action py-2 ripple"aria-current="true" >
        <img className="dash-image-icon" src={addPer} /><span>Patient Record</span></Link>
      </div>
    </div>
  </nav>
  <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
    <div className="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
      <a className="navbar-brand" href="#">
        <h>Welcome to Doctor Panel</h>
      </a>  
    </div>
  </nav>
</header>
<main style={{marginTop: "58px"}}>
  <div className="container pt-4"></div>
</main>
   <Routes>
<Route path="/ptrecord" element={<Ptrecord state={state}/>}/>
<Route path="/ptconsult" element={<Consult state={state}/>}/>
<Route path="/consult" element={<PtConsult state={state}/>}/>
   </Routes>
</>
    );
}