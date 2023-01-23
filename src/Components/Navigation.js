import React from 'react'

const Navigation = ({setSearch,handleShow,show}) => {
  return (
    <div>
        <button onClick={handleShow}>search</button>
        {show?<input placeholder='search' onChange={(e)=>setSearch(e.target.value)}></input>:null}
        
    </div>
  )
}

export default Navigation