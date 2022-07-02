import React, { useContext } from 'react'
import '../App.css'
import DataContext from './DataContext'
import {AiOutlineCaretUp,AiOutlineCaretDown} from "react-icons/ai";

function Table() {
  const {pesrsonDetails,paginated,setPaginated}=useContext(DataContext)
  
  const sorting=(value)=>{
      const sorted=[...paginated].sort((a,b)=>
      a[value].toLowerCase()>b[value].toLowerCase()?1:-1);
      setPaginated(sorted)
  }
  const unsorting=(value)=>{
    const sorted=[...paginated].sort((a,b)=>
    a[value].toLowerCase()<b[value].toLowerCase()?1:-1);
    setPaginated(sorted)
}
const sortingforNumber=(value)=>{
    const sorted=[...paginated].sort((a,b)=>
    a[value]>b[value]?1:-1);
    setPaginated(sorted)
}
const unsortingforNumber=(value)=>{
  const sorted=[...paginated].sort((a,b)=>
  a[value]<b[value]?1:-1);
  setPaginated(sorted)
}

  return (
     <div className='head'>
     <div className='table'>
        <table className='table-area'>
            <thead className='thead'>
                <tr>
                    <th>First Name <span className='sort'> <p className='sort-btn' onClick={()=>sorting("first_name")}><AiOutlineCaretUp/></p><p className='sort-btn2' onClick={()=>unsorting("first_name")}><AiOutlineCaretDown/></p></span> </th>
                    <th>Last Name<span className='sort'> <p className='sort-btn' onClick={()=>sorting("last_name")}><AiOutlineCaretUp/></p><p className='sort-btn2' onClick={()=>unsorting("last_name")}><AiOutlineCaretDown/></p></span> </th>
                    <th>Age<span className='sortother'> <p className='sort-btn' onClick={()=>sortingforNumber("age")}><AiOutlineCaretUp/></p><p className='sort-btn2' onClick={()=>unsortingforNumber("age")}><AiOutlineCaretDown/></p></span> </th>
                    <th>Email<span className='sortother'> <p className='sort-btn' onClick={()=>sorting("email")}><AiOutlineCaretUp/></p><p className='sort-btn2' onClick={()=>unsorting("email")}><AiOutlineCaretDown/></p></span> </th>
                    <th>Website<span className='sortother'> <p className='sort-btn' onClick={()=>sorting("web")}><AiOutlineCaretUp/></p><p className='sort-btn2' onClick={()=>unsorting("web")}><AiOutlineCaretDown/></p></span> </th>
                </tr>
            </thead>
            <tbody className='tbody'>
                {paginated.map((item,id)=>{
                    return(
                        
                        <tr  key={id} >
                        <td ><p className='name' onClick={()=>pesrsonDetails(item)} >{item.first_name}</p></td>
                        <td >{item.last_name}</td>
                        <td >{item.age}</td>
                        <td >{item.email}</td>
                        <td ><a href={item.web} target="_blank"  rel="noopener noreferrer">{item.web}</a></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
      
     </div>
    </div>
  )
}

export default Table
