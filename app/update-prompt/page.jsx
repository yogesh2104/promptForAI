"use client"
import React,{useEffect, useState} from 'react'
import { useSession } from 'next-auth/react'
import { useParams, useRouter ,useSearchParams} from 'next/navigation'
import Form from '@components/Form'

const page = () => {
    const [submitting,setsubmitting]=useState(false)
    const {data:session}=useSession()
    const router=useRouter()
    const searchParams=useSearchParams()
    const promptID=searchParams.get('id')
    const [post,setPost]=useState({
        prompt:'',
        tag:'',
        desc:''
    })

    useEffect(()=>{
        const getPromptDetails=async()=>{
            const response=await fetch(`/api/prompt/${promptID}`)
            const datas=await response.json()
            setPost({
                prompt:datas.prompt,
                tag:datas.tag,
                desc:datas.desc
            })
        }
        if(promptID){
            getPromptDetails()
        }
    },[promptID])

    const updatePrompt = async(e)=>{
      e.preventDefault()
      setsubmitting(true)
      if(!promptID){
        alert("No Prompt ID Found!")
      }
      try {
        const response=await fetch(`/api/prompt/${promptID}`,{
          method:'PATCH',
          body:JSON.stringify({
            prompt:post.prompt,
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
    type="Edit"
    post={post}
    setPost={setPost}
    submitting={submitting}
    handleSubmit={updatePrompt}
    />
  )
}

export default page