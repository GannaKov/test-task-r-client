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
  const { user } = useAuth();
  const [messages, setMessages] = useState(chat.messages);
  const { onNewMessage } = useOutletContext();
  const [chatParticipant, setChatParticipant] = useState(null);

  useEffect(() => {
    const getParticipant = async () => {
      const participant = await getContactById(chat.participant);
      setChatParticipant(participant);
    };

    getParticipant(); // Загружаем данные участника
    setMessages(chat.messages); // Устанавливаем сообщения чата
  }, [chat]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const message = {
      text: formData.get("text"),
      senderId: user._id,
    };

    const newMessage = await createMessage(chat._id, message);

    setMessages((prevMessages) => [...prevMessages, newMessage._id]);

    // Вызовем onNewMessage из Root для обновления Sidebar
    onNewMessage(chat._id, newMessage);

    e.target.reset();
  };

  return (
    <div className="section rightPart">
      <ChatPageHeader participant={chatParticipant} />
      <ChatPageChat messages={messages} />
      <Form method="post" onSubmit={handleSubmit}>
        <input type="text" name="text" />
        <button type="submit">New</button>
      </Form>
    </div>
  );
};

export default ChatPage;
