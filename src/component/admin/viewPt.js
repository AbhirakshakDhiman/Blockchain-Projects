import {useState ,useEffect} from "react";
export default function ViewPt({state})
{      const [a,setA]=useState([]);
  const [pts,setPts]=useState([]);
          const {contract}=state;
          var j;
          useEffect(()=>{
              const ptInfo=async()=>{
                  const drs=await contract.getAllPts();
                  for(var i=0;i<drs.length;i++){
                    if(i==j)
                    continue;
                    else
                   j=i;
                    console.log(i)
                     const y=await contract.getPt(drs[i]);
                     a.push(y);
                  }
                  setPts(drs);
                  setA(a);
              };
              contract && ptInfo();
          },[contract]);
  
  
          //console.log(a.length);
  
        
  return(
  <>
  {a.map((p,i)=>{
              return(
          <div className="cl" key={i}>
          <div class="card w-75 mb-3">
            <div class="card-body">
              <h5 class="card-title">Patient Id : {p.id}</h5>
              <p class="card-text">Patient Name: {p.firstname} {p.lastname}</p>
              <p class="card-text">Patient Email: {p.email}</p>
              <p class="card-text">Patient Phone Number: {p.phone}</p>
              <p class="card-text">Patient Email: {p.email}</p>
              <a href="#" class="btn btn-primary">Remove</a>
            </div>
          </div>
          </div>
          );
        })
      }  
  </>
  
  );
}