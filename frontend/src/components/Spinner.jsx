import React from 'react'

const Spinner = () => {
  return (
    <div className='d-flex justify-content-center align-items-center ' style={{minHeight:'50vh'}}>
      <div className="spinner-border text-dard " role="status" >
  <span className="visually-hidden">Loading...</span>
</div>
    </div>
  )
}

export default Spinner
