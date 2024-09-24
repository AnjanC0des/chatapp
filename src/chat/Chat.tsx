import ChatWindow from "./ChatWindow";
import Recipients from "./Recipients";
export default () => {
  const recipients = [
    { avatar: "SD", name: "Shubhanjan" },
    { avatar: "AM", name: "Adrian Morgan" },
  ];
  return (
    <>
      <div className="w-screen h-screen border-2 border-white grid grid-cols-4">
        <div className="col-span-1">
          <Recipients recipients={recipients} />
        </div>
        <div className="col-span-2">
          <ChatWindow />
        </div>
      </div>
    </>
  );
};
