import Sidebar from "@/components/Sidebar";

export default function LayoutRouter({ children }) {
    return (
        <main className="bg-black flex">
            <Sidebar />
            <div className="w-full h-screen">

                {children}
            </div>
        </main>
    )
}