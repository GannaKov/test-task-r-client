/* eslint-disable react/prop-types */
const ChatPageHeader = ({ participant }) => {
  console.log("participant in header", participant);
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
