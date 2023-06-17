
import {useState ,useEffect,useRef} from "react";
export default function Viewdoc({state})
{     
  const [a,setA]=useState([]);
 const [drs,setDrs]=useState([]);
 const i=useRef(0);
 const j=useRef(1);
          const {contract}=state;
         
          useEffect(()=>{
          
              const drInfo=async()=>{
                  const drs=await contract.getAllDrs();
                  for(i.current=0;(i.current)<drs.length;(i.current++)){
                    if(i.current===j.current)
                    continue;
                    else{
                      j.current=i.current;
                    }
                    console.log(i)
                     const y=await contract.getDr(drs[i.current]);
                     a.push(y);
                  }
                  setDrs(drs);
                  setA(a);
              };
              contract && drInfo();
          },[contract,a]);
  
  
          //console.log(a.length);
  
        
  return(
  <>
  {a.map((p,i)=>{
              return(
          <div className="cl" key={i}>
          <div class="card w-75 mb-3">
            <div class="card-body">
              <h5 class="card-title">Doctor Id : {p.id}</h5>
              <p class="card-text">Doctor Name: {p.firstname} {p.lastname}</p>
              <p class="card-text">Doctor Email: {p.email}</p>
              <p class="card-text">Date of joining: {p.id}</p>
              <p class="card-text">Speciality: {p.speciality}</p>
              <button class="btn btn-primary"  onClick={()=>{
              window.open(p.drHash);}}
              >PhotoId</button>
            </div>
          </div>
          </div>
          );
        })
      }  
  </>
  
  );
}