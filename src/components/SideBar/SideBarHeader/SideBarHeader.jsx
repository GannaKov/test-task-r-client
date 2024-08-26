import useAuth from "../../../context/useAuthHook";

const SideBarHeader = () => {
  const { ownerUser } = useAuth();

  return (
    <div className="container">
      {ownerUser && (
        <>
          <span>{ownerUser.firstName}</span>
          <span>{ownerUser.lastName}</span>
        </>
      )}
    </div>
  );
};

export default SideBarHeader;
