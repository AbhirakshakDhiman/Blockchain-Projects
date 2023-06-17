
import './App.css';
import {ethers} from 'ethers';
import AddPat from './component/admin/AddPatient';
import abi from './component/contractc/Contract.json';
import {useState,useEffect} from 'react';
import Navi from './component/navigation/nav';
import Rform from './component/rform';
import Admin from './component/admin/admin_home';
import Appointment from './component/admin/appointment';
import Doc from './component/admin/doc_home';
import Pat from './component/admin/pt_home';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
function App(){
  const [state,setState]=useState({
    provider:null,
    signer:null,
    contract:null,
    account:null
  })
  useEffect(()=>{
    const connectWallet=async()=>{
    try{
      const contractAddress="0xe4721ba84203b74cB06e3D06A17C6DEC6f505487";
      ;
      const contractABI=abi.abi;
      const {ethereum}=window;  
      if(ethereum){
        const account=await ethereum.request({method:"eth_requestAccounts",});
       console.log(account);
       window.ethereum.on('accountsChanged',()=>{
        window.location.reload();
       })
       window.ethereum.on('chainChanged',()=>{
        window.location.reload();
       })
      const provider=new ethers.providers.Web3Provider(ethereum);
      const signer=provider.getSigner();   
   const contract=new ethers.Contract(contractAddress,contractABI,signer);
      setState({provider,signer,contract,account})
      }
    }catch(error){
      console.log(error);
    }
  };
 connectWallet();
},[]);
  return (
    <>
    <div>Account:<span className="acc">{state.account}</span></div>
    <Router>
   <Routes>
   <Route path="*" element={<Navi state={state}/>}/>
   <Route path="/appointment" element={<Appointment state={state}/>}/>
   <Route path="/addPt" element={<AddPat state={state}/>}/>
    <Route path="/register" element={<Rform/>}/>
    <Route path="/admin/*" element={
    <Admin state={state}/>
    }/>
     <Route path="/doc/*" element={
    <Doc state={state}/>
    }/>
      <Route path="/pat/*" element={
    <Pat state={state}/>
    }/>
    </Routes>   
   </Router>
   </>  
  );
}

export default App;
