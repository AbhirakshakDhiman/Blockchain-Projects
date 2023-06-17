import React from 'react';
import doctor from './doctor.png';
import patient from './patient.png';
import wallet from './wallet.png';
//import nurse from './nurse.png';
import bal from './balance.png';
import {useState,useEffect,useCallback} from 'react';
import {ethers} from 'ethers';
export default function Admindash({state}){
const {contract}=state;
const [dash, setDash] = useState({
  bal:0,
  tp:0,
  td:0,
  accbal:0
});
const fetchBalance = useCallback(async () => {
  const address = await state.signer.getAddress();
  console.log(address);
  const rawBalance = await contract.accountBalance(address);
  const rtpt = await contract.totalPt();
  const tpt=rtpt.toNumber();
  const rtdr = await contract.totalDr();
  const tdr=rtdr.toNumber();
  const rcon = await contract.accountBalance("0xD70d8FA7C185AA2eF498E67C641a607d397Fc2A6");
  const value = parseFloat(ethers.utils.formatEther(rawBalance));
  const con = parseFloat(ethers.utils.formatEther(rcon));
  setDash({
    bal:value,
     accbal:con,
     tp:tpt,
     td:tdr
  }
    );
}, [state.signer,contract]);

useEffect(() => {
  fetchBalance();
}, [fetchBalance]);
    return(
<>
<div className="xCard" style={{marginLeft:"18%"}}>
<div class="row me-2">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body">
      <img src={wallet} alt="wallet"/>
        <h5 class="card-title">Total Earnings :<h>{dash.accbal}</h></h5>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
      <img src={bal} alt="wallet"/>
        <h5 class="card-title">Account Balance:<h>{dash.bal}</h></h5>
      </div>
    </div>
  </div>
</div>
<div class="row mt-3 me-2">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body">
        <img   src={doctor} alt="doctor" />
        <h5 class="card-title pt-2">Active Doctors :<h>{dash.td}</h></h5>
        <p class="card-text"></p>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
      <img src={patient} alt="Patient"/>
        <h5 class="card-title pt-2">Total Number of Patient :<h>{dash.tp}</h></h5>
        <p class="card-text"></p>
      </div>
    </div>
  </div>
</div>

 

</div>
</>
    );
}