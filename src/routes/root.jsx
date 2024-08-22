import { useEffect, useState } from "react";

import { Outlet, useLoaderData } from "react-router-dom";
import SideBar from "./SideBar/SideBar";
import { getChatById, getContactsWithChat } from "../services/requests";
// import useAuth from "../context/useAuthHook";

export async function loader() {
  const contacts = await getContactsWithChat();
  return { contacts };
}
export default function Root() {
  const { contacts } = useLoaderData();

  return (
    <div className="appWrapper ">
      <SideBar contacts={contacts} />

      <Outlet />
    </div>
  );
}
