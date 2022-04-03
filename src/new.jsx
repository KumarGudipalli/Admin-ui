import React from 'react'
import "./new.css"
function New({ data,handleDelete,search}) {

  return (
    <div>
      <div className='Container'>
        <div className='heading'>
          <h3>Select All  <span> <input type="checkBox" /> </span></h3>
          <h2>Name</h2>
          <h2>Email</h2>
          <h2>Role</h2>
          <h2>Actions</h2>
        </div>
        {data.filter(e=>e.name.toLowerCase().includes(search.toLowerCase())).map((item, index) => {
          return (


            <div className='details'>
              <input type="checkBox"
          
           
              
               />
              <label>{item.name}</label>
              <label>{item.email}</label>
              <label>{item.role}</label>
              <div className='btns'>
                <p> <button>Edit</button></p>
                <p> <button  onClick={()=>handleDelete(item)}>Delete</button></p>
              </div>


            </div>



          )
        })}

      </div>
    </div>
  )
}

export default New