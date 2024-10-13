import ChatWindowHeader from "./ChatWindowHeader";
import Chats from "./Chats";
export default (props) => {
  return (
    <>
      <ChatWindowHeader name={"Dummy Name"} id={1} delfunc={() => {}} />
      <Chats {...props}/>
    </>
  );
};
