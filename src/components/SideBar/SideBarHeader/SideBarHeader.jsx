import useAuth from "../../../context/useAuthHook";

const SideBarHeader = () => {
  const { user } = useAuth();

  return (
    <div className="container">
      {user && (
        <>
          <span>{user.firstName}</span>
          <span>{user.lastName}</span>
        </>
      )}
    </div>
  );
};

export default SideBarHeader;
