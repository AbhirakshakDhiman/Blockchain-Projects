import {useState ,useEffect} from "react";
export default function Pta({state})
{   
  const [pts,setPts]=useState([]);
          const {contract}=state;
        
          useEffect(()=>{
              const ptInfo=async()=>{
                const address = await state.signer.getAddress();
                console.log(address);
                  const drs=await contract.viewrecord(address);
                 
                  setPts(drs);
                
              };
              contract && ptInfo();
          },[contract,state.signer]);
  
  
          //console.log(a.length);
  
        
  return(
  <>
  {pts.map((p,i)=>{
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
      }  
  </>
  
  );
}