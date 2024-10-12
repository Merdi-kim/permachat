'use client'
import { usePathname, useRouter } from 'next/navigation'
import path from 'path'
import { FC, useEffect, useState } from 'react'
//import { toast } from 'react-hot-toast'


type T_SideBarChatList = Array<{
    address:string 
    profile:string 
    messagesCount:number
}>

const SideBarChatList: FC<{chats:T_SideBarChatList}> = ({ chats }) => {
    const router = useRouter()
    const pathName = usePathname() 

    const acChats : T_SideBarChatList = Array(5).fill({address:"bCWp6WpJpN1eiTMGYD7haFN4irLzUUDLqHF_7ZFBaTo", profile:"", messagesCount:5})

    return <ul className='max-h-[25rem] overflow-y-auto space-y-3 mt-2 flex flex-col pl-4'>
        {
            acChats.map(({address, messagesCount}, key) => {
                return (
                    <li key={key} >
                        <a href={`/chats/${address}`} className="flex w-full justify-between items-center p-2 pl-0 text-sm font-semibold leading-6 text-gray-700 rounded-md gap-x-3 hover:text-indigo-600 hover:bg-gray-50 group">
                            {`${address.slice(0, 13)}...${address.slice(-13)}`}
                            {messagesCount > 0 && <div className='flex items-center justify-center w-5 h-5 text-xs text-white bg-indigo-600 rounded-full'>
                                {messagesCount}
                            </div>}
                        </a>
                    </li>
                )
            })
        }
    </ul>
}

export default SideBarChatList