'use client'
import { format } from 'date-fns'
import { FC, useRef } from 'react'

type MessagesProps = Array<{
    id:string
    from:string
    message:string
    createdAt:number
}>

const Messages: FC<{messages:MessagesProps}> = ({ messages  }) => {

    const scrollDownRef = useRef<HTMLDivElement | null>(null)

    const formatTimestamp = (timestamp: number) => {
        return format(timestamp, 'HH:m')
    }

    return <div id='messages' className='flex flex-col-reverse flex-1 h-full gap-4 overflow-y-auto scrolling-touch scrollbar-thumb-blue scrollbar-w-2 scrollbar-thumb-rounded scrollbar-track-blue-lighter'>
        <div ref={scrollDownRef} />
        {
            messages.map(({id, from, message, createdAt}, index) => {
                const user = ""
                const isCurrentUser = user === from

                return <div key={id}>
                    <div className={`flex items-end' ${ isCurrentUser && 'justify-end'}`}>
                        <div className={`relative w-6 h-6' ${isCurrentUser && 'order-2'}`}>
                        </div>
                        <div className={`flex flex-col space-y-2 text-base max-w-xs mx-2' ${isCurrentUser ?
                            'order-1 items-end' : 
                            'order-2,items-start'}`}>
                            <span className={`px-4 py-2 rounded-lg inline-block break-words' ${ isCurrentUser ?
                                'bg-indigo-600 text-white' :
                                'bg-gray-200 text-gray-900'
                            }`}>
                                {message}{' '}
                                <span className='ml-2 text-xs text-gray-400'>{formatTimestamp(createdAt)}</span>
                            </span>
                        </div>
                    </div>
                </div>
            })}
    </div>
}

export default Messages