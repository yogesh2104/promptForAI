import Feed from "@components/feed"

const page = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover AI Prompt & Share
            <br className="max-md:hidden"/>
            <span className="green_gradient text-center">AI Prompts</span>
        </h1>
        <p className="desc text-center">
            This is an open-source AI Prompting tool 
            for modern world to discover,create and 
            share creative prompts.
        </p>
        <Feed/>
    </section>
  )
}

export default page