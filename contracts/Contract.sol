// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21;

import "./Roles.sol";

contract Contract {
  using Roles for Roles.Role;

  Roles.Role private admin;
  Roles.Role private doctor;
  Roles.Role private patient;
  struct Doctor {
    string firstname;
    string lastname;
    string email;
    string doj;
    string speciality;
    address id;
    string drHash;
  }
  struct appointment{
   address ptid;
   string date;
   string time;
  }

  struct Record{
  string rx;
  string tablets;
  string duration;
  string test;
  string rhash;
  }

  mapping(address => Doctor) Doctors;
  mapping(address=>appointment[])appointments;
  mapping(address=>Record[])Records;
  struct Patient {
    address id;
    string firstname;
    string lastname;
    string email;
    string phone;
  }

  mapping(address => Patient) Patients;
  address[] public PtIDs;
  address[] public DrIDs;

  constructor() {
    admin.add(msg.sender);
  }

  //get Admin
  function isAdmin() public view returns (bool) {
    return admin.has(msg.sender);
  }

  //Add Doctor
  function addDrInfo(string memory fn,string memory  ln,string memory  email,string memory sp,address dr_id, string memory _drInfo_hash,string memory doj) public {
    require(admin.has(msg.sender), "Only For Admin");
  Doctor storage drInfo=Doctors[dr_id]; 
    drInfo.id = dr_id;
    drInfo.speciality=sp;
    drInfo.firstname=fn;
    drInfo.lastname=ln;
    drInfo.email=email;
     drInfo.doj=doj;
    drInfo.drHash = _drInfo_hash;
    DrIDs.push(dr_id);
    doctor.add(dr_id);
  }
  //Add Patient
  function addPtInfo(string memory fn,string memory  ln,string memory  email,string memory  ph,address pt_id) public {
    require(admin.has(msg.sender), "Only For Admin");
    Patient storage ptInfo = Patients[pt_id];
    ptInfo.firstname = fn;
    ptInfo.lastname = ln;
    ptInfo.email = email;
    ptInfo.phone = ph;
    ptInfo.id = pt_id;
    PtIDs.push(pt_id);
    patient.add(pt_id);
  }
 
 function appoint(address ptid,address docid,string memory date,string memory time)public{
  require(patient.has(msg.sender),"you are not patient");
  appointments[docid].push(appointment(ptid,date,time));
 }
   function viewappoint(address docid)public view returns(appointment[] memory){
    return appointments[docid];
   }
function record(address ptid,string memory rx,string memory tablets,string memory duration,string memory test,string memory hash)public{
  require(doctor.has(msg.sender),"you are not doctor");
  Records[ptid].push(Record(rx,tablets,duration,test,hash));
}
 function viewrecord(address ptid)public view returns(Record[] memory){
    return Records[ptid];
   }
  function getAllDrs() public view returns (address[] memory) {
    return DrIDs;
  }
function getAllPts() public view returns (address[] memory) {
    return PtIDs;
  }
   function accountBalance(address adminadd) public view returns (uint256){
     return adminadd.balance;
  }
  function getPt(address _id) public view returns (Patient memory) {
    return (Patients[_id]);
  }
   function getDr(address _id) public view returns (Doctor memory) {
    return (Doctors[_id]);
  }
 function totalPt()public view returns(uint256){
   return PtIDs.length;
 }
  function totalDr()public view returns(uint256){
   return DrIDs.length;
 }
  // check is Doctor/patient
  function isDr() public view returns (bool) {
    return doctor.has(msg.sender);
  }
  function isPt() public view returns (bool) {
    return patient.has(msg.sender);
  }
}