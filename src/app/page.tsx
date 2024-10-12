'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()

  const loginHandler = () => {
    router.push('/chats')
  }

  return (
    <div className="h-[100vh] w-full flex items-center justify-center">
      <div onClick={loginHandler} className="px-4 py-1 bg-blue-600 font-bold rounded-sm cursor-pointer hover:bg-red-500">Login</div>
    </div>
  );
}
