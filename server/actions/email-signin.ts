'use server'
import { LoginSchema } from '@/types/login-schema'
import {createSafeActionClient} from 'next-safe-action'
import { users } from '../schema'
import { db } from '..'
import { eq } from 'drizzle-orm'
import { log } from 'console'
const action=createSafeActionClient()
export const emailSignin = action.schema(LoginSchema).action(async ({parsedInput})=>{
    const existingUser = await db.query.users.findFirst({where:eq(users.email,parsedInput.email)})
console.log(existingUser,"existingUser")

    if (!existingUser) {
        // throw new Error("Email not found")
        return {error:"Email not found"}
    }

// if(existingUser.emailVerified){
//     return
// }


    return {success:parsedInput.email,password:parsedInput.password}
})