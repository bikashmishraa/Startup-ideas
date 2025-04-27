import Link from "next/link"
import { auth,signOut,signIn } from "@/auth"
export default async function Navbar(){
    const session =await auth()
    return(
        <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
            <div className="text-lg font-bold">My Startup</div>
           <div className="flex space-x-4">
            {session && session?.user?(
                <>
                    <Link href='/startup/create'>Create</Link>
                    <form action={async () =>{
                        'use server';
                        await signOut({redirectTo:''})
                    }}>
                    <button type="submit">Logout</button>
                    </form>
                    <Link href={`/user/${session?.user?.id}`}>
                        {session?.user?.name}
                    </Link>
                </>
            ):(
                <>
                
                <form action={async() => {
                    'use server';
                    await signIn('github');
                }}>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Login with GitHub</button>

                </form>
                <form action={async() => {
                    'use server';
                    await signIn('google');
                }}>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Login with Google</button>
                </form>
                </>
            )}

           </div>
        </nav>
    )
}