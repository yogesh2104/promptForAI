import Link from 'next/link'

const Form = ({type,post,setPost,submitting,handleSubmit}) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='green_gradient'>{type} Post</span>
      </h1>
      <p className='desc text-left max-w-md'>
        {type} and share you prompts with world.
      </p>
      <span>we believe in the power of imagination and 
          the transformative capabilities of AI.
      </span>
      <form onSubmit={handleSubmit}
      className='mt-10 w-full flex flex-col gap-7 glassmorphism'>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700 '>
            Prompt
          </span>
          <textarea value={post.prompt}
          onChange={(e)=>setPost({...post,prompt:e.target.value})}
          placeholder='Write Your Prompt here....'
          required
          className='form_textarea'/>
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700 '>
            Tag {` `}
            <span>(#idea, #nextjs13, #webdev)</span>
          </span>
          <input value={post.tag}
          onChange={(e)=>setPost({...post,tag:e.target.value})}
          placeholder='#tag'
          required
          className='form_input'/>
          <div className='flex-end mx-3 mb-5 gap-4'>
            <Link href='/' className='text-gray-500 text-sm'>Cancel</Link>
            <button type='submit' disabled={submitting} 
            className='px-5 py-1.5 text-sm bg-[#22c55e] rounded-full text-white '>
              {submitting?`${type}...`:type}
            </button>
          </div>
        </label>
      </form>
    </section>
  )
}

export default Form