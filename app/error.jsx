'use client'
import React from 'react'

const error = ({error,reset}) => {
  return (
    <>
    <div>Error occure in app</div>
    <div onClick={()=>reset()}>reset</div>
    </>
  )
}

export default error