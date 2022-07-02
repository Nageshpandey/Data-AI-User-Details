import React, { useContext } from 'react'
import '../App.css'
import { AiOutlineArrowLeft } from "react-icons/ai";
import DataContext from './DataContext'

function User() {
    const {single,setFlage}=useContext(DataContext)
  return (
    <div className='user_box'>
      <div className='user_info'>
           <h1><span onClick={()=>setFlage(false)} className="cross"><AiOutlineArrowLeft/></span> Details: {single.first_name+" "+single.last_name}</h1>
            <p>First Name: {single.first_name}</p>
            <p>Last Name: {single.last_name}</p>
            <p>Company_name: {single.company_name}</p>
            <p>City: {single.city}</p>
            <p>State: {single.state}</p>
            <p>zip: {single.zip}</p>
            <p>Email: {single.email}</p>
            <p>Web: <a href= {single.web} target="_blank">{single.web}</a> </p>
            <p>Age: {single.age}</p>
       </div>
    </div>
  )
}

export default User
