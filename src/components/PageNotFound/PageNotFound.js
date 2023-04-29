import React from 'react'
import { useNavigate } from 'react-router-dom'

function PageNotFound() {

  const navigate = useNavigate();

  return (
    <>
    <h1>PageNotFound</h1>
    <button onClick={()=> navigate('/')}>Click to Home</button>
    </>
  )
}

export default PageNotFound