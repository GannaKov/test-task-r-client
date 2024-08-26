/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getMessageById } from "../../../services/requests";
import styles from "./ChatPageMessageCard.module.css";
import useAuth from "../../../context/useAuthHook";

const ChatPageMessageCard = ({ messageId, participant }) => {
  const [messageData, setMessageData] = useState();
  const { user } = useAuth();
  console.log("participant", participant);
  useEffect(() => {
    const getMessageData = async () => {
      const message = await getMessageById(messageId);
      setMessageData(message);
      // console.log("messages in chat", message);
    };
    getMessageData();
  }, [messageId]);

  return (
    <>
      {messageData && (
        <div
          className={`${messageData.senderId === user._id ? styles.owner : ""}`}
        >
          {messageData.senderId === user._id ? (
            <div>
              <span>{user.firstName}</span>
              <span>{user.lastName}</span>
            </div>
          ) : (
            <div>
              <span>{participant.firstName}</span>
              <span>{participant.lastName}</span>
            </div>
          )}

          <div>
            <p>{messageData.text}</p>
            <p>
              {new Date(messageData.createdAt).toLocaleDateString("de-De", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
              {new Date(messageData.createdAt).toLocaleTimeString("de-De", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatPageMessageCard;
