import ChatWindowHeader from "./ChatWindowHeader";
import Chats from "./Chats";

export default () => {
  return (
    <>
      <ChatWindowHeader name={"Dummy Name"} id={1} delfunc={() => {}} />
      <Chats />
    </>
  );
};
