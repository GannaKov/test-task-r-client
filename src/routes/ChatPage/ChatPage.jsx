import { useLoaderData, Form } from "react-router-dom";

import {
  createMessage,
  getChatById,
  getContactById,
} from "../../services/requests";
import ChatPageChat from "../../components/ChatPage/ChatPageChat/ChatPageChat";
import ChatPageHeader from "../../components/ChatPage/ChatPageHeader/ChatPageHeader";
import { useEffect, useState } from "react";
import ChatPageInput from "../../components/ChatPage/ChatPageInput/ChatPageInput";
import useAuth from "../../context/useAuthHook";

export async function loader({ params }) {
  const chat = await getChatById(params.chatId);
  return { chat };
}

// export async function action({ params, request }) {
//   const formData = await request.formData();
//   const message = {
//     text: formData.get("text"),
//     // chatId: chat._id,
//     senderId: user._id,
//   };
//   console.log("message", message);
//   const newMessage = await createMessage(chat._id, message);
// }

const ChatPage = () => {
  const { chat } = useLoaderData();
  const { user } = useAuth();
  const [chatParticipant, setChatParticipant] = useState();
  const [messages, setMessages] = useState(chat.messages);

  useEffect(() => {
    const getParticipant = async (participantId) => {
      const participant = await getContactById(participantId);
      setChatParticipant(participant);
    };
    getParticipant(chat.participant);
  }, [chat]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const message = {
      text: formData.get("text"),
      // chatId: chat._id,
      senderId: user._id,
    };
    console.log("message", message);
    const newMessage = await createMessage(chat._id, message);
    setMessages((prevMessages) => [...prevMessages, newMessage._id]);
    e.target.reset();
  };

  return (
    <div className="section rightPart">
      <ChatPageHeader participant={chatParticipant} />
      <ChatPageChat messages={messages} />
      <ChatPageInput />
      <Form method="post" onSubmit={handleSubmit}>
        <input type="text" name="text" />
        <button type="submit">New</button>
      </Form>
    </div>
  );
};

export default ChatPage;
