"use client"
import React,{useState,useEffect} from 'react'
import PromptCard from './PromptCard'

const PromptCardList=({data,handelTagClick})=>{
  return(
    <div className='mt-16 prompt_layout'>
      {data?.map((post)=>(
        <PromptCard key={Math.random()}
        post={post}
        handelTagClick={handelTagClick}/>
      ))}
    </div>
  )
}

const feed = () => {
  const [searchText,setsearchText]=useState('')
  const [posts, setposts] = useState([])
  const handleTextChange=(e)=>{
    e.preventDefault()
  }

  useEffect(()=>{
    const fetchPost=async ()=>{
      const response=await fetch('/api/prompt')
      const data=await response.json()
      setposts(data)
    }
    fetchPost()
  },[])
  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input type='text'
        placeholder='Search Username or Tag'
        value={searchText}
        onChange={handleTextChange}
        required
        className='search_input peer'/>
      </form>
      <PromptCardList 
      data={posts}
      handelTagClick={()=>{}}
      />
    </section>
  )
}

export default feed