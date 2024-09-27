"use server"

import {db} from '@/server';
import { posts } from '../schema';
import { revalidatePath } from 'next/cache';


export default async function createPosts(formData:FormData) {
    console.log(formData)
   const title=formData.get("title")?.toString();
   if(!title){
         return {error:"Title is required"};    
   }

revalidatePath("/");
    // if(!posts){
    //     return {error:"No posts found"};
    // }
    const post=await db.insert(posts).values({title});
    return {success:" Post created successfully"}
}