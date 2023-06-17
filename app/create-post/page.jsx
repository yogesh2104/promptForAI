"use client"
import React,{useState} from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Form from '@components/Form'

const page = () => {
    const [submitting,setsubmitting]=useState(false)
    const [post,setPost]=useState({
        prompt:'',
        tag:'',
        desc:''
    })

    const ceatePost = async(e)=>{

    }
  return (
    <Form
    type="Create"
    post={post}
    setPost={setPost}
    submitting={submitting}
    handleSubmit={ceatePost}
    />
  )
}

export default page