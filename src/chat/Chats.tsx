import { useSelector } from "react-redux";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { recipientList } from "@/State";
export default (props) => {
  const messages = useSelector((state) => state.message.messages);
  const active = useSelector((state) => state.active);
  const initials = active !== null ? recipientList[active].initials : null;
  return (
    <>
      <div className="flex-grow overflow-y-auto">
        {active !== null &&
          messages.map((obj) => {
            return (
              <div className="flex items-center mb-2 gap-x-2 ">
                <Avatar>
                  <AvatarFallback>
                    {obj.sender === active ? <>{initials}</> : <p>You</p>}
                  </AvatarFallback>
                </Avatar>
                <div>{obj.content}</div>
              </div>
            );
          })}
      </div>
    </>
  );
};
