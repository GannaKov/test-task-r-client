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

export async function loader({ params }) {
  const chat = await getChatById(params.chatId);
  return { chat };
}
export async function action({ request, params }) {
  const formData = await request.formData();

  const updates = Object.fromEntries(formData);
  console.log("updates ", updates, "params ", params);
  //!!! from back
  // const newMessage = new Message({
  //   senderId,
  //   text,
  //   chatId,
  // });
  ////////////////////
  //const contact = await createMessage(params.contactId, updates);
  return { contact };
}

const ChatPage = () => {
  const { chat } = useLoaderData();
  const [chatParticipant, setChatParticipant] = useState();
  const [newMessages, setNewMessages] = useState();

  useEffect(() => {
    const getParticipant = async (participantId) => {
      const participant = await getContactById(participantId);
      setChatParticipant(participant);
    };
    getParticipant(chat.participant);
  }, [chat]);

  return (
    <div className="section rightPart">
      <ChatPageHeader participant={chatParticipant} />
      <ChatPageChat chat={chat} />
      <ChatPageInput />
      <Form method="post">
        <input type="text" name="text" />
        <button type="submit">New</button>
      </Form>
    </div>
  );
};

export default ChatPage;
