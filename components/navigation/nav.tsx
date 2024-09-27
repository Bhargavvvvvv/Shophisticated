import {auth} from '@/server/auth'
import { UserButton } from './user-button';
import { Button } from '../ui/button';
import Link from 'next/link';
import { LogIn } from 'lucide-react';
import Logo from './logo';

export default async function Nav(){
    const session =await auth();
    return(
        <header className=' py-8'>
            <nav>
                <ul className='flex justify-between'>
                    <li>
                    <Link href={'/'}>
                    <Logo ></Logo>
                     
                    </Link></li>
                    {!session?(
                        <Button asChild className='flex gap-2'>
                            <Link href={'/auth/login'}> <LogIn/>
                                <span>Login</span></Link>
                        </Button>
                    ):(
                        <li><UserButton expires={session?.expires} user={session?.user}/></li>
                    )}
                </ul>
            </nav>
        </header>
    )
}