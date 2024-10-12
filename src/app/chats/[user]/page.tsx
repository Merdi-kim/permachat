import Messages from "@/components/Messages";
import Image from "next/image";
//import { useRouter } from "next/router";

export default function Chat() {
  //const router = useRouter()

  const getChats = () => {
    //router.push('/chats')
  }

  return( 
    <div className='flex flex-col justify-between flex-1 h-full max-h-[calc(100vh-6rem)]'>
      <div className='flex justify-between py-3 border-b-2 border-gray-200 sm:items-center'>
        <div className="relative flex items-center space-x-4">
          <div className="relative">
            <div className="relative w-8 h-8 sm:w-12 sm:h-12">
              <img src="https://www.svgrepo.com/show/343494/profile-user-account.svg" alt={`${'chatPartner.name'}`} className='rounded-full' />
            </div>
          </div>
          <div className='flex flex-col leading-tight'>
            <div className='flex items-center text-xl'>
              <span className='mr-3 font-semibold text-gray-700'>{'chatPartner.name'}</span>
            </div>
            <span className='text-sm to-gray-600'>{'chatPartner.email'}</span>
          </div>
        </div>
      </div>
      <Messages messages = {[{id:"12", from:"kljkj", message:"hi", createdAt:23488585}]}/>
      {/*<ChatInput chatId={chatId} chatPartner={chatPartner} />*/}
    </div>
  )
}
