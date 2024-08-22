import { useEffect, useState } from "react";
import { getMessageById } from "../../../services/requests";

const ChatPageMessageCard = ({ messageId }) => {
  const [messageData, setMessageData] = useState();

  useEffect(() => {
    const getMessageData = async () => {
      const message = await getMessageById(messageId);
      setMessageData(message);
    };
    getMessageData();
  }, [messageId]);
  return (
    <div>
      <div>
        {/* <span>{contact.firstName}</span>
        <span>{contact.lastName}</span> */}
      </div>
      {messageData && (
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
      )}
    </div>
  );
};

export default ChatPageMessageCard;
