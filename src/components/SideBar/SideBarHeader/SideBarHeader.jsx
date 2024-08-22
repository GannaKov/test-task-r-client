import useAuth from "../../../context/useAuthHook";

const SideBarHeader = () => {
  const { user } = useAuth();
  console.log("user in AuthProvider", user);
  return (
    <div className="container">
      <span>{user.firstName}</span>
      <span>{user.lastName}</span>
    </div>
  );
};

export default SideBarHeader;
