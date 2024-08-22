/* eslint-disable react/prop-types */
const ChatPageHeader = ({ participant }) => {
  return (
    <>
      {participant && (
        <div>
          <span>{participant.firstName}</span>
          <span>{participant.lastName}</span>
        </div>
      )}
    </>
  );
};

export default ChatPageHeader;
