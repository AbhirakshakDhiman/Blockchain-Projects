import React from 'react';
import {Link} from 'react-router-dom';
export default function appointment({state})
{
  let {contract}=state;
  const handleSubmit =(e)=> {
    console.log("clicked");
    e.preventDefault();
    const pt_id=document.querySelector("#pt_id").value;
   // const xsp=document.querySelector("#sp").value;
     const xdrid=document.querySelector("#drid").value;
      const xd=document.querySelector("#d").value;
       const xt=document.querySelector("#t").value;
       contract.appoint(pt_id,xdrid,xd,xt);  
      }
return(
<>
<nav className="navbar navbar-expand-lg bg-body-info">
<Link className="nav-link active ms-3" aria-current="page" to="/"><b>Home</b></Link>
</nav>
<div className="m">
<div class="card">
  <div class="card-body">
<div className="cl"><form onSubmit={handleSubmit}>
  <div class="mb-3">
  <label for="exampleInputEmail1" class="form-label">Patient ID</label>
  <input class="form-control" id="pt_id" type="text" placeholder="Enter Id"/>

    <label for="exampleInputEmail1" class="form-label">Doctor ID</label>
    <input type="text" id="drid" class="form-control" />
    <label for="exampleInputEmail1" class="form-label">Date</label>
    <input type="date" id="d" class="form-control"/>
    <label for="exampleInputEmail1" class="form-label">Time</label>
    <input type="time" id="t" class="form-control" />
  </div>
  <button type="submit" class="btn btn-primary">Book</button>
</form>

</div>
  </div>
</div>
</div>
</>
);

}