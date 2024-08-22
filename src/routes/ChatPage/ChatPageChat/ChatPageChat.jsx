import ChatPageMessageCard from "../../../components/ChatPage/ChatPageMessageCard/ChatPageMessageCard";

/* eslint-disable react/prop-types */
const ChatPageChat = ({ chat }) => {
  return (
    <div>
      {chat.messages.length > 0 &&
        chat.messages.map((message) => (
          <div key={message}>
            <ChatPageMessageCard messageId={message} />
          </div>
        ))}
    </div>
  );
};

export default ChatPageChat;
