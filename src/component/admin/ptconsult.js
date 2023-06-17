import React from 'react';
import {useState} from "react";
import axios from 'axios';
export default function Ptconsult({state})
{
  let {contract}=state;
   const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("No image selected");
  const handleSubmit = async (e) => {
    const ptid=document.querySelector("#ptid").value;
    const xrx=document.querySelector("#rx").value;
     const xtab=document.querySelector("#tab").value;
      const xdur=document.querySelector("#dur").value;
       const xtest=document.querySelector("#test").value;
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
      contract.record(ptid,xrx,xtab,xdur,xtest,ImgHash);
        
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

      
return(
<>
<div className="cl">
  <div className="ct">
<div class="card">
  <div class="card-body">

<form  onSubmit={handleSubmit}>

<div class="mb-3">
<label for="exampleInputEmail1" class="form-label">Patient ID</label>
  <input class="form-control" id="ptid" type="text" placeholder="Enter Id"/>
  </div>
  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Rx</label>
  <textarea class="form-control" id="rx" rows="3"></textarea>
</div>
  <div class="mb-3">
  <label for="exampleInputEmail1" class="form-label">Tablet && Dosage</label>
  <input class="form-control" type="text" id="tab" placeholder="Ex. Dolo:1-1-1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Duration</label>
    <input type="text" class="form-control" id="dur" placehoder="Ex. 1 week"/>
    </div>
    <label for="exampleInputEmail1" class="form-label">Lab Test</label>
    <input type="text" class="form-control" id="test"/>
    <label for="exampleInputEmail1" class="form-label">Report : </label>
    <input type="file" id="file-upload" name="data"  onChange={retrieveFile}/>
            <span>Image:{fileName}</span>
   <p></p>
            <button  type="submit" className="btn btn-outline-primary"  disabled={!file}>Save</button>
</form>
</div>
</div>
</div>
</div>
</>

);

}