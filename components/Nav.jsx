"use client";

import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {signIn,signOut,useSession,getProviders} from 'next-auth/react'
const Nav = () => {
  const isUserLoggedIn=true
  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image src='/assets/images/logo.svg' 
        width={50} 
        height={50}
        alt='PromptForAI'
        className='object-contain'
        />
        <p className='logo_text'>PromptForAI</p>
      </Link>


      {/* Mobile Navigation */}
      <div className='sm:flex hidden'>
        {isUserLoggedIn?(
          <div className='flex gap-3 mg:gap-5'>
            <Link href='/create-prompt' className='post_btn'>Create Post</Link>
            <button type='button' onClick={signOut} className='outline_btn'>Sign Out</button>
            <Link href='/profile'>
              <Image src='/assets/images/profile.svg'
              width={40}
              height={40}
              className='rounded-full'
              alt='profile'/>
            </Link>
          </div>
        ):(<></>)}
      </div>
    </nav>
  )
}

export default Nav