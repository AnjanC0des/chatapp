import ChatWindow from "./ChatWindow";
import Recipients from "./Recipients";
import io from "socket.io-client";

const socket = io("http://localhost:5137");
export default () => {
  const recipients = [
    { avatar: "SD", name: "Shubhanjan" },
    { avatar: "AM", name: "Adrian Morgan" },
  ];

  return (
    <>
      <div className="w-screen h-screen border-2 border-white grid grid-cols-4">
        <div className="col-span-1">
          <Recipients socket={socket}/>
        </div>
        <div className="flex flex-col col-span-3">
          <ChatWindow socket={socket}/>
        </div>
      </div>
    </>
  );
};
