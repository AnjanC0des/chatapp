import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { messages } from "@/State";
import { ActiveRecipientActions } from "@/store/RecipientSlice";
import { MessageActions } from "@/store/MessageSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// Add avatar images later.
// import { AvatarImage } from "@/com ponents/ui/avatar";
export default () => {
  const { setActiveRecipient } = ActiveRecipientActions;
  const { setMessages } = MessageActions;
  const messageState = useSelector((state) => state.message);
  const loadedmessages = useSelector((state) => state.message.allMessages);
  console.log(loadedmessages);
  const active = useSelector((state) => state.active);
  const dispatch = useDispatch();
  const recipients = useSelector((state: any) => state.recipients);
  const clickHandler = (key: string) => {
    dispatch(setActiveRecipient(key));
    dispatch(setMessages(messageState.allMessages[key]));
  };
  useEffect(() => {
    if (active !== null)
      dispatch(setMessages(messageState.allMessages[active]));
  }, [messageState.allMessages[active], active]);
  return (
    <>
      {Object.keys(recipients).map((key: string) => {
        return (
          <>
            <div className="flex p-2 gap-1" onClick={() => clickHandler(key)}>
              <Avatar>
                <AvatarFallback>{recipients[key].initials}</AvatarFallback>
              </Avatar>
              <Card className="w-fit">{recipients[key].name}</Card>
            </div>
          </>
        );
      })}
    </>
  );
};
