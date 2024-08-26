import ChatPageMessageCard from "../ChatPageMessageCard/ChatPageMessageCard";
import styles from "./ChatPageChat.module.css";

/* eslint-disable react/prop-types */
const ChatPageChat = ({ messages, participant }) => {
  return (
    <div className={styles.chatSection}>
      {messages.length > 0 &&
        messages.map((messageId) => (
          <ChatPageMessageCard
            key={messageId}
            messageId={messageId}
            participant={participant}
          />
        ))}
    </div>
  );
};

export default ChatPageChat;
//className={`styles.owner`}
