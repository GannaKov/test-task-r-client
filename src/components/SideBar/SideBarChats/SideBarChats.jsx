import SideBarChatCard from "../SideBarChatCard/SideBarChatCard";

/* eslint-disable react/prop-types */
const SideBarChats = ({ contacts }) => {
  return (
    <div className="container">
      <h2>Chats</h2>
      {contacts.length > 0 ? (
        contacts.map((contact) => (
          <div key={contact._id}>
            <SideBarChatCard contact={contact} />
          </div>
        ))
      ) : (
        <p>No chats</p>
      )}
    </div>
  );
};

export default SideBarChats;
