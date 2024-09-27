import { useSelector } from "react-redux";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { recipientList } from "@/State";
export default (props) => {
  const messages = useSelector((state) => state.message.messages);
  const active = useSelector((state) => state.active);
  const initials = active !== null ? recipientList[active].initials : null;
  const avatar = (
    <Avatar>
      <AvatarFallback>{initials}</AvatarFallback>
    </Avatar>
  );
  return (
    <>
      <div className="flex-grow overflow-y-auto p-4">
        {active !== null &&
          messages.map((obj) => {
            return (
              <>
                {obj.sender === active ? avatar : <p>You</p>}
                {obj.content}
              </>
            );
          })}
      </div>
    </>
  );
};
