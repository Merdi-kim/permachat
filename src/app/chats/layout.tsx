import SideBarChatList from "@/components/SideChatsList";

export default function ChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    return (
        <div className="h-[100vh] w-full flex">
          <div className="w-[25%] px-2 border-r-2 border-r-gray-100">
            <div className="py-4">
              <h2 className="font-bold text-3xl">Messages</h2>
            </div>
            <SideBarChatList chats={[{address:"hk", profile:"v", messagesCount:5}, {address:"vj", profile:"jhv", messagesCount:5}]}/>
          </div>
          <div className="w-[75%]">{children}</div>
        </div>
    );
}
