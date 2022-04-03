import React from 'react'

const Pagination = ({page,handleChange}) => {
    let pageno = []
   for(let i=1; i<Math.ceil(page.length/10)+1; i++) {
         pageno.push(i)
   }

  return (
    <div>
        <div className='page'>
            {pageno.map(page => 
            <button className='pagebutton' onClick={()=>handleChange(page)}>{page}</button>)}
        </div>
    </div>
  )
}

export default Pagination