/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getChatById, getMessageById } from "../../../services/requests";

const SideBarChatCard = ({ contact }) => {
  const [chatLastMessage, setChatLastMessage] = useState([]);

  useEffect(() => {
    const getChatMessages = async (chatId) => {
      const chat = await getChatById(chatId);

      if (chat.messages.length > 0) {
        const lastMessageId = chat.messages[chat.messages.length - 1];
        const lastMessage = await getMessageById(lastMessageId);
        setChatLastMessage(lastMessage);
      }
    };
    getChatMessages(contact.chatId);
  }, [contact.chatId, contact.lastMessage]); // Добавили зависимость от contact.lastMessage

  return (
    <div>
      <div>
        <span>{contact.firstName}</span>
        <span>{contact.lastName}</span>
      </div>
      {chatLastMessage && (
        <div>
          <p>{chatLastMessage.text}</p>
          <p>
            {new Date(chatLastMessage.createdAt).toLocaleDateString("de-De", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}{" "}
            {new Date(chatLastMessage.createdAt).toLocaleTimeString("de-De", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
      )}
    </div>
  );
};

export default SideBarChatCard;
