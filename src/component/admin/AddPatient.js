import React from 'react';

function AddPat({state}){
  let {contract}=state;
  const handleSubmit =(e)=> {
    console.log("clicked");
    e.preventDefault();
    const pt_id=document.querySelector("#pt_id").value;
    const xfn=document.querySelector("#fn").value;
     const xln=document.querySelector("#ln").value;
      const xemail=document.querySelector("#email").value;
       const xph=document.querySelector("#ph").value;
       contract.addPtInfo(xfn,xln,xemail,xph,pt_id);  
      }
    return(
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
          <h2>A Patient</h2>
          </div>
          <div className="inputs">
          <form className="form" onSubmit={handleSubmit}>
            <input type="text" id="fn" placeholder="First name"/>
            <br/>
            <input type="text" id="ln" placeholder="Last name"/>
            <br/>
            <input type="email" id="email" placeholder="Email"/>
            <br/>
            <input type="number" id="ph" placeholder="Phone number"/>
            <br/>
            <input type="text" id="pt_id" placeholder="Patient Id"/>
            <br/>
            <button  type="submit" className="upload" >Register</button>
            </form>
            </div>
            
            
        </div>
        
      </div>
      </>
    );
}
export default AddPat;