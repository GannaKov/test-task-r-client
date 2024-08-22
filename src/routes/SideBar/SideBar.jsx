/* eslint-disable react/prop-types */
import SideBarChats from "../../components/SideBar/SideBarChats/SideBarChats";
import SideBarHeader from "../../components/SideBar/SideBarHeader/SideBarHeader";
import SideBarSearch from "../../components/SideBar/SideBarSearch/SideBarSearch";

const SideBar = ({ contacts }) => {
  return (
    <div className="section sidebar">
      <SideBarHeader />
      <SideBarSearch />
      <SideBarChats contacts={contacts} />
    </div>
  );
};

export default SideBar;
