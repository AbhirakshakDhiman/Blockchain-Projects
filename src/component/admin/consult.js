import React from 'react';
import {useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
export default function Consult({state})
{
  let navigate=useNavigate();
    const [drs,setDrs]=useState([]);
            const {contract}=state;
            const click=(e)=>{
            e.preventDefault();
            navigate("/doc/consult");
            };
            useEffect(()=>{
                const drInfo=async()=>{
                    const address = await state.signer.getAddress();
                    console.log(address);
                    const rs=await contract.viewappoint(address);
                    setDrs(rs);
                };
                contract && drInfo();
            },[contract,state.signer]);
          
    return(
    <>
    {drs.map((p,i)=>{
                return(
            <div className="cl" key={i}>
            <div class="card w-75 mb-3">
              <div class="card-body">
                <h5 class="card-title">Patient Id : {p.ptid}</h5>
                <p class="card-text">Appointment Date: {p.date}</p>
                <p class="card-text">Appointment Time: {p.time}</p>
                <button className="btn btn-outline-primary" onClick={click}>Consult</button>
              </div>
            </div>
            </div>
            );
          })
        }  
    </>
    
    );
}