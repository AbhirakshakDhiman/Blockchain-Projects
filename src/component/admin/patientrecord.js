import React from 'react';
import {useState,useEffect} from 'react';
export default function Ptrecord({state})
{
    let {contract}=state;
    const [pt,setPt]=useState(null);
    const [drs,setDrs]=useState([]);
  
    const HandleSubmit =(e)=> {
      console.log("clicked");
      e.preventDefault();
      const pt_id=document.querySelector("#pt_id").value;
      console.log(pt_id);
     setPt(pt_id);
    }
      useEffect(()=>{
        const drInfo=async()=>{
            if(pt!=null){
            const rs=await contract.viewrecord(pt);
            setDrs(rs);
            }
        };
        contract && drInfo();
    },[contract,pt]);

       const list= drs.map((p,i)=>{
            return(
        <div className="cl" key={i}>
        <div className="card w-75 mb-3">
          <div className="card-body">
            <p className="card-title">Rx : {p.rx}</p>
            <p className="card-title">Tablets && Dosage: {p.tablets} </p>
            <p className="card-title">Duration:{p.duration}</p>
            <p className="card-title">Tests:{p.test}</p>
            <button className="btn btn-outline-primary" onClick={()=>{
              window.open(p.rhash);
            }}>Reports</button>
          </div>
        </div>
        </div>
        );
      }) 
    return(
        <>
        <div className="cl">
        <form className="d-flex" role="search"  onSubmit={HandleSubmit}>
        <input className="form-control me-2" id="pt_id" type="search" placeholder="Enter Patient Id here" aria-label="Search"/>
        <button className="btn btn-info btn-outline-success" type="submit">Search</button>
      </form>
    <div>{list}</div>
</div>
        </>
    );
}