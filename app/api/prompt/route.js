import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET=async (request)=>{
    try {
        await connectToDB()

        const prompts=await Prompt.find({}).populate('creator');

        return new Response(JSON.stringify(prompts),{ststus:200})
    } catch (error) {
      return new Response("Failed to find",{status:404})  
    }
}