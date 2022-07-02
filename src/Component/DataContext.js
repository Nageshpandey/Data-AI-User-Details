import { createContext, useState, useEffect } from "react";

let pageSize=10;
const DataContext = createContext({});
export const DataProvider =({children}) =>{

  const [data,setData]=useState([])
  const [input,setInput]=useState('')
  const [single,setSingle]=useState([])
  const [error,setError]=useState('')
  const [paginated,setPaginated]=useState([])
  const [currentPage,setCurrentPage]=useState(1)
  const [flage,setFlage]=useState(false)
  
  const handelClick=(e)=>{
     e.preventDefault();
    if(input!==''){
       const temp = data.filter(
         (ch) =>
           ch.first_name.toLowerCase().includes(input.toLowerCase()) ||
           ch.last_name.toLowerCase().includes(input.toLowerCase())
         );
        setPaginated(temp)
        if (temp.length === 0){
          setError('⚠ Oops! Data not found');
         }
     }
   else{
        alert('please enter a name')
      }  
   }

useEffect(()=>{ 
  fetch('https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json')
  .then((response)=>response.json())
  .then(data=>{
   setData(data)
   setPaginated(data.slice(0,9))
})
},[])

const pageCount=data?Math.ceil(data.length/pageSize):0;
const pages=[];
if(pageCount===1){
  return null
}
  else{
    for(let i=1;i<=pageCount;i++){
      pages.push(i)
    }
  }
  




const pagination=(page)=>{
  setCurrentPage(page);
  const index=(page-1)*pageSize;
  const paginatedPost=data.slice(index,index+pageSize)
  setPaginated(paginatedPost)
}

 const pesrsonDetails=(item)=>{
    setSingle(item)
    setFlage(true)
 }
const prevChange=(page)=>{
  page--;
  if(page>=1){
    console.log(page)
    setCurrentPage(page)
    const index=(page-1)*pageSize;
    const paginatedPost=data.slice(index,index+pageSize)
    setPaginated(paginatedPost)
  }
  
}
const nextChange=(page)=>{
  page++;
   if(page<=pageCount){
    setCurrentPage(page)
    const index=(page-1)*pageSize;
    const paginatedPost=data.slice(index,index+pageSize)
    setPaginated(paginatedPost)
    console.log(page)
   }
  
}
  return (
    <div>
      <DataContext.Provider
      value={{ input,setInput,handelClick,data,paginated,setPaginated,error,pages,currentPage,pagination,pesrsonDetails,single,flage,setFlage,prevChange,nextChange }} >
      {children}
    </DataContext.Provider>
    </div>
  )
}

export default DataContext
