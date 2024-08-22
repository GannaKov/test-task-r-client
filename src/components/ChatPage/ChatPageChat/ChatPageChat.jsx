import ChatPageMessageCard from "../ChatPageMessageCard/ChatPageMessageCard";

/* eslint-disable react/prop-types */
const ChatPageChat = ({ messages }) => {
  return (
    <div>
      {messages.length > 0 &&
        messages.map((messageId) => (
          <div key={messageId}>
            <ChatPageMessageCard messageId={messageId} />
          </div>
        ))}
    </div>
  );
};

export default ChatPageChat;
