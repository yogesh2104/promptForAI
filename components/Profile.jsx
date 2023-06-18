import React from 'react'
import PromptCard from './PromptCard'

const Profile = ({name,description,data,handleEdit,handleDelete}) => {
  return (
    <section className='w-full'>
        <h1 className='head_text text-left'>
            <span className='app_gradient'>{name} Profile</span>
        </h1>
        <p className='desc text-left'>{description}</p>
        <div className='mt-10 prompt_layout'>
            {data?.map((post)=>(
                <PromptCard
                key={Math.random()}
                post={post}
                handleEdit={()=>handleEdit && handleEdit}
                handleDelete={()=>handleDelete && handleDelete(post)}
                />
            ))}
        </div>
        
    </section>
  )
}

export default Profile