import React, { useContext } from 'react'
import DataContext from './DataContext'
import {AiOutlineSearch}  from "react-icons/ai";
import '../App.css'

function Search() {
    const {input,handelClick,setInput}=useContext(DataContext)
  return (
    <div>
      <div className='header'>
      
           <h1>Users</h1>
           <div className='search-bar'>
               <input type="search" placeholder='Enter First or last name...' value={input} onChange={(e)=>setInput(e.target.value)} />
               <button className='search-button' onClick={handelClick}><AiOutlineSearch/></button>
           </div>
       </div>
    </div>
  )
}

export default Search
