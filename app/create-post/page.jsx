"use client"
import React,{useState} from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Form from '@components/Form'

const page = () => {
    const [submitting,setsubmitting]=useState(false)
    const {data:session}=useSession()
    const router=useRouter()
    const [post,setPost]=useState({
        prompt:'',
        tag:'',
        desc:''
    })

    const ceatePost = async(e)=>{
      e.preventDefault()
      setsubmitting(true)
      try {
        const response=await fetch('/api/prompt/new',{
          method:'POST',
          body:JSON.stringify({
            prompt:post.prompt,
            userId:session?.user.id,
            tag:post.tag,
            desc:post.desc==''?null:post.desc
          })
        })

        if(response.ok){
          router.push('/')
        } 
      } catch (error) {
        console.log("error from create post",error)
      } finally{
        setsubmitting(false)
      }
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