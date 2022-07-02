import React, { useContext } from 'react'
import '../App.css'
import DataContext from './DataContext'
import {AiOutlineLeft,AiOutlineRight} from "react-icons/ai";
const Pagination=()=>{
   const {pages,currentPage,pagination,prevChange,nextChange}=useContext(DataContext)
   return (
    <div className='pagination'>

       <button className='pagination-button' onClick={()=>prevChange(currentPage)}><AiOutlineLeft/></button>

       {     
           pages.map((page)=>{
             return(
               <>
              {page<6?<li className={page===currentPage?"page active":"page"}><p className='page-link' onClick={()=>pagination(page)}>{page}</p></li>:null}
              </>
              )})       
         }

        {currentPage>=6? <li className="page active"><p className='page-link' onClick={()=>pagination(currentPage)}>{currentPage}</p></li>:null}
    
     <button className='pagination-button' onClick={()=>nextChange(currentPage)}><AiOutlineRight/></button>
   
    </div>
  )
}

export default Pagination
