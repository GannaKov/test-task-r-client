import { useLoaderData, Form, useOutletContext } from "react-router-dom";
import {
  createMessage,
  getChatById,
  getContactById,
} from "../../services/requests";
import ChatPageChat from "../../components/ChatPage/ChatPageChat/ChatPageChat";
import ChatPageHeader from "../../components/ChatPage/ChatPageHeader/ChatPageHeader";
import { useEffect, useState } from "react";
import useAuth from "../../context/useAuthHook";

export async function loader({ params }) {
  const chat = await getChatById(params.chatId);
  return { chat };
}

const ChatPage = () => {
  const { chat } = useLoaderData();
  const { ownerUser } = useAuth();
  const [messages, setMessages] = useState(chat.messages);
  const { onNewMessage } = useOutletContext();
  const [chatParticipant, setChatParticipant] = useState(null);

  useEffect(() => {
    const getParticipant = async () => {
      const participant = await getContactById(chat.participant);
      setChatParticipant(participant);
    };

    getParticipant();
    setMessages(chat.messages);
  }, [chat]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const message = {
      text: formData.get("text"),
      senderId: ownerUser._id,
    };

    const newMessage = await createMessage(chat._id, message);
    console.log("newMessage", newMessage.data._id);
    setMessages((prevMessages) => [...prevMessages, newMessage.data._id]);

    onNewMessage(chat._id, newMessage);

    e.target.reset();
    // const backMessage = getRandomQuotes();
    // console.log("backMessage", backMessage);
    setTimeout(async () => {
      try {
        const updatedChat = await getChatById(chat._id);
        console.log("updatedChat", updatedChat);
        const latestMessage =
          updatedChat.messages[updatedChat.messages.length - 1];
        if (latestMessage) {
          setMessages((prevMessages) => [...prevMessages, latestMessage]);
        }
        console.log("latestMessage", latestMessage);
      } catch (error) {
        console.log("Error fetching auto-response:", error);
      }
    }, 3000);
  };

  return (
    <>
      {chatParticipant && (
        <div className="section rightPart">
          <ChatPageHeader participant={chatParticipant} />
          <ChatPageChat messages={messages} participant={chatParticipant} />
          <Form method="post" onSubmit={handleSubmit}>
            <input type="text" name="text" />
            <button type="submit">New</button>
          </Form>
        </div>
      )}
    </>
  );
};

export default ChatPage;
