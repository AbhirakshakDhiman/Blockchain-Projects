import React from 'react';
import appoint from './apoint.jpg';

//import{Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
//import Dlogin from './dlogin';
function Navi({state}){
  let navigate=useNavigate();
const isAd=async(event)=>{
  event.preventDefault();
  console.log("Button was clicked");
     let {contract}=state;
if(await contract.isAdmin()){
console.log("admin");
navigate("/admin");
}
else{
  alert("not admin")
}
  console.log(contract.isAdmin());
};
const isDr=async(event)=>{
  event.preventDefault();
  console.log("Button was clicked");
     let {contract}=state;
if(await contract.isDr()){
console.log("doctor");
navigate("/doc");
}
else{
 alert("not doctor");
}
  console.log(contract.isDr());
};
const isPt=async(event)=>{
  event.preventDefault();
  console.log("Button was clicked");
     let {contract}=state;
if(await contract.isPt()){
console.log("patient");
navigate("/pat");
}
else{
  alert("not patient")
}
  console.log(contract.isPt());
};
const isPta=async(event)=>{
  event.preventDefault();
  console.log("Button was clicked");
     let {contract}=state;
if(await contract.isPt()){
console.log("patient");
navigate("/appointment");
}
else if(await contract.isDr()){
  alert("You are Registered as doctor");
}
else if(await contract.isAdmin()){
  alert("You are Admin");
}
else{
    let text = "You are not registered , please Register first";
    if (window.confirm(text) === true) {
      navigate("/addPt");
    } else {
      text = "You canceled!";
    }
}
 // console.log(contract.isPt());
};
    return (
      <>
      <nav className="navbar navbar-expand-lg bg-body-info">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">BlockChain Hospital</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
    <div  className="offcanvas offcanvas-end" tabIndex="-1" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
      <div className="offcanvas-header">
      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">OPD</a></li>
            <li><a className="dropdown-item" href="/">Emergency</a></li>
            <li><a className="dropdown-item" href="/">others</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
      </ul>
      <div className="dropdown">
  <button className="btn btn-info dropdown-toggle me-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Login
  </button>
  <ul className="dropdown-menu">
    <li><button  className="dropdown-item"  type="button" onClick={isDr}>LogIn AS Doctor</button></li>
    <li><button  className="dropdown-item"  type="button" onClick={isPt}>LogIn AS Patient</button></li>
  </ul>
  <button className="btn btn-info me-2" type="button" onClick={isAd}>
Admin
  </button>
  </div>
  </div>
</div>
    </div>
</nav>
<div class="card ms-5 mt-5" style={{width: "18rem"}}>
  <img src={appoint} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Appintment</h5>
    <p class="card-text">Please click the below button to make an appointment</p>
    <button class="btn btn-primary" onClick={isPta}>Appointment</button>
  </div>
</div>
</>
    );
}
export default Navi;