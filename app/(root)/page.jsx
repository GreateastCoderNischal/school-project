
import Navbar from "@/components/Navbar"
import { Anton } from "next/font/google";
import Link from "next/link";

const anton = Anton({ subsets: ['latin'], weight: '400' })

export default function Page() {
    
    return (
        <div className="w-full h-screen flex flex-col" style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1562813733-b31f71025d54?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
        }}>
            <Navbar />
            <div className="flex-1 flex flex-col text-white justify-center items-center">
                <h1 className={anton.className + " text-5xl font-bold tracking-widest"}>This is your virtual Assistant</h1>
                <Link href={'/main'}>
                    <button className=" bg-green-800 mt-4 text-2xl p-4 rounded-xl"> Chat with Your Assistant </button>
                </Link>

            </div>
        </div>
    )
}