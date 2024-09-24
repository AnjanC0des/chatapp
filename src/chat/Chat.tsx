import ChatWindow from "./ChatWindow";
import Recipients from "./Recipients";
export default () => {
  const recipients = [
    { avatar: "SD", name: "Shubhanjan" },
    { avatar: "AM", name: "Adrian Morgan" },
  ];
  return (
    <>
      <div className="border-2 border-white grid grid-cols-3">
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
