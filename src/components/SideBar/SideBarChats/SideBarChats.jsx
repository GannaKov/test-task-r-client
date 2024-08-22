import SideBarChatCard from "../SideBarChatCard/SideBarChatCard";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SideBarChats = ({ contacts }) => {
  return (
    <div className="container">
      <h2>Chats</h2>
      {contacts.length > 0 ? (
        contacts.map((contact) => (
          <Link to={contact.chatId} key={contact._id}>
            <SideBarChatCard contact={contact} />
          </Link>
        ))
      ) : (
        <p>No chats</p>
      )}
    </div>
  );
};

export default SideBarChats;
