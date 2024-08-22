import SideBarChats from "../../components/SideBar/SideBarChats/SideBarChats";
import SideBarHeader from "../../components/SideBar/SideBarHeader/SideBarHeader";
import SideBarSearch from "../../components/SideBar/SideBarSearch/SideBarSearch";

const SideBar = () => {
  return (
    <div className="section sidebar">
      <SideBarHeader />
      <SideBarSearch />
      <SideBarChats />
    </div>
  );
};

export default SideBar;
