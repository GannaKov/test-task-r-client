import { Outlet, useLoaderData } from "react-router-dom";
import SideBar from "./SideBar/SideBar";
import { useState, useEffect } from "react";
import { getContactsWithChat } from "../services/requests";

export async function loader() {
  const contacts = await getContactsWithChat();
  return { contacts };
}

export default function Root() {
  const { contacts } = useLoaderData();
  const [updatedContacts, setUpdatedContacts] = useState(contacts);

  // This function will be called when a new message is sent
  const handleNewMessage = (chatId, lastMessage) => {
    setUpdatedContacts((prevContacts) =>
      prevContacts.map((contact) =>
        contact.chatId === chatId
          ? { ...contact, lastMessage: lastMessage }
          : contact
      )
    );
  };

  return (
    <div className="appWrapper">
      <SideBar contacts={updatedContacts} />
      {/* onNewMessage={handleNewMessage} */}
      <Outlet context={{ onNewMessage: handleNewMessage }} />
    </div>
  );
}
