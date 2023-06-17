
import React from 'react';
import { useState } from "react";
import axios from 'axios';
//const fs = require('fs');
function AddDoc({state}) {
  let {contract}=state;
   const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("No image selected");
  const handleSubmit = async (e) => {
    const dr_id=document.querySelector("#dr_id").value;
    const xfn=document.querySelector("#fn").value;
     const xln=document.querySelector("#ln").value;
      const xemail=document.querySelector("#email").value;
       const xsp=document.querySelector("#sp").value;
    e.preventDefault();
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);
        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: `b0f2d58a64cf2d164177`,
            pinata_secret_api_key: `
73f93c5299db40580b74a5f796e2d3f523d97e75957655b1a535d62b9ef8ad3c`,
            "Content-Type": "multipart/form-data",
          },
        });
       
      const ImgHash = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;
       console.log(ImgHash); 
      contract.addDrInfo(xfn,xln,xemail,xsp,dr_id,ImgHash);
        
        alert("Successfully Image Uploaded");
        setFileName("No image selected");
        setFile(
           null
        );
      } catch (e) {
        console.log(e);
        alert("Unable to upload image to Pinata");
      }
    }
    alert("Successfully Image Uploaded");
    setFileName("No image selected");
    setFile(null);
  
  };
  const retrieveFile = (e) => {
      
 
    const data = e.target.files[0]; //files array of files object
    console.log(data);
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
      setFile(
        e.target.files[0]
 
      );
     
    };
    setFileName(e.target.files[0].name);
    console.log(fileName);
    e.preventDefault();
  };
    return (
      <>
        <div className="box-form">
        <div className="left">
          <div className="overlay">
          <h1>Welcome to BlockChain Hospital.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Curabitur et est sed felis aliquet sollicitudin</p>
          
          </div>
        </div>
          <div className="R">
          <h2>Register</h2>
          <div className="cr">
          <h2>A Doctor</h2>
          </div>

          <div className="inputs">
          <form className="form" onSubmit={handleSubmit}>
            <input type="text" id="fn" name="first name" placeholder="First name"/>
            <br/>
            <input type="text" id="ln" name="lastname"placeholder="Last name"/>
            <br/>
            <input type="email" id="email" name="email" placeholder="Email"/>
            <br/>
           <span>Date of joining:</span>
            <input type="date" id="doj" name="doj" placeholder="Date of Joining"/>
            <br/>
            <input type="text" name="dr_id" id="dr_id" placeholder="Doctor Id"/>
            <br/>
            <input type="text" id="sp"name="speciality" placeholder="Speciality"/>
            <br/>
            <input type="file" id="file-upload" name="data" onChange={retrieveFile}/>
            <span>Image:{fileName}</span>
            <br/>
              <button  type="submit" className="upload"  disabled={!file}>Register</button>
              </form>
          </div>
            <br/>
            
          
        </div>
        
      </div>
    </>
    );
}
export default AddDoc;
