import ChatWindowHeader from "./ChatWindowHeader";
import Chats from "./Chats";
import { Textarea } from "@/components/ui/textarea";
export default () => {
  return (
    <>
      <ChatWindowHeader name={"Dummy Name"} id={1} delfunc={() => {}} />
      <Chats />
      <Textarea placeholder="Type message." />
    </>
  );
};
