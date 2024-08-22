import { useLoaderData } from "react-router-dom";

import { getChatById } from "../../services/requests";
import ChatPageChat from "./ChatPageChat/ChatPageChat";
import ChatPageHeader from "./ChatPageHeader/ChatPageHeader";

export async function loader({ params }) {
  const chat = await getChatById(params.chatId);
  return { chat };
}

const ChatPage = () => {
  const { chat } = useLoaderData();
  console.log("chat in ChatPage", chat);
  return (
    <div className="section rightPart">
      <ChatPageHeader />
      <ChatPageChat chat={chat} />
    </div>
  );
};

export default ChatPage;
