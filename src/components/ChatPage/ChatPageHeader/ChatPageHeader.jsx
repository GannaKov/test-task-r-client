/* eslint-disable react/prop-types */
import styles from "./ChatPageHeader.module.css";
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
