import React from 'react';
import home from './home.png';
import addPer from './addperson.png';
import Pta from './ptrecord';
import './admin_home.css';
import {Link,Routes,Route} from 'react-router-dom';
export default function ptHome({state}){   
    
  return(
 <>
<header>
  <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
    <div className="position-sticky">
      <div className="list-group list-group-flush mx-3 mt-4">
      <Link to="/" className="list-group-item list-group-item-action py-2 ripple" aria-current="true">
          <img className="dash-image-icon" src={home} alt="Home"/><span>Home</span>
        </Link>
        <Link to="/pat/pthrecord" className="list-group-item list-group-item-action py-2 ripple"aria-current="true" >
        <img className="dash-image-icon" src={addPer}  alt="H"/><span>Health Record</span></Link>
      </div>
    </div>
  </nav>
  <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
    <div className="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
      <Link className="navbar-brand" to="/pat">
        <h>Welcome to Patient Panel</h>
      </Link>  
    </div>
  </nav>
 
</header>
<main style={{marginTop: "58px"}}>
  <div className="container pt-4"></div>
</main>
   <Routes>
<Route path="/pthrecord" element={<Pta state={state}/>}/>
   </Routes>
</>
    );
}