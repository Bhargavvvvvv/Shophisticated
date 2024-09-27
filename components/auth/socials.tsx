'use client'

import { Button } from "@/components/ui/button"
import { signIn, signOut } from "next-auth/react"
import { FcGoogle } from "react-icons/fc"
import { FaGithub} from "react-icons/fa"

export default function Socials() {
    return (
        <div className="flex flex-col items-center w-full gap-4">
            <Button variant={"outline"} className="flex gap-4 w-full" onClick={()=>signIn('google',{redirect:false,callbackUrl:'/'})}><p>SignIn with Google</p>
            <FcGoogle></FcGoogle> </Button>
            <Button variant={"outline"} className="flex gap-4 w-full"  onClick={()=>signIn('github',{redirect:false,callbackUrl:'/'})}><p>SignIn with Github </p>
                <FaGithub></FaGithub>
            </Button>

        </div>
    )
}