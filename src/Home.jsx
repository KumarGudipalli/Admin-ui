import React from 'react'
import { useEffect, useState } from 'react';
import New from './new';
import Pagination from './Pagination';
function Home() {
  const [data,setData] = useState([])
  const [page,setPage]=useState([])
  const [input, setInput] = useState("")
  useEffect(()=>{
    fetch('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json')
    .then((res)=>res.json())
    .then((dat)=>{setData(dat);setPage(dat.slice(0,10)) })
  
  },[])
  const handleChange =(pageno) => {
     setPage(data.slice((pageno*10)-10, pageno*10))
  }
  const handleDelete = (page) => {

  }
const handleSearch = (e) => {
     setInput(e.target.value)
}

 
  return (
    <div > 
    <div className='search'>
      <h1> Search By:-</h1>
     <input type="text"  placeholder = 'search...' className='search' value={input} onChange={handleSearch}  />
    </div>
     <New search={input}  data={page}  handleDelete={handleDelete} />
    <Pagination page={data} handleChange={handleChange} />
   </div>
  )
}

export default Home
