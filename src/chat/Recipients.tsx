import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { messages } from "@/State";
import { ActiveRecipientActions } from "@/store/RecipientSlice";
import { MessageActions } from "@/store/MessageSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
// Add avatar images later.
// import { AvatarImage } from "@/com ponents/ui/avatar";
export default ({ socket }) => {
  const { setActiveRecipient } = ActiveRecipientActions;
  const [rlfetch, setrlfetch] = useState(true);
  const { setMessages } = MessageActions;
  const loadedmessages = useSelector((state) => state.message.allMessages);
  console.log(loadedmessages);
  const active = useSelector((state) => state.active);
  const dispatch = useDispatch();
  let recipients = [];
  const clickHandler = (key: string) => {
    dispatch(setActiveRecipient(key));
  };

  useEffect(() => {
    if (rlfetch) {
      socket.emit("fetch_recipients");
    }
  }, []);

  useEffect(() => {
    socket.on("recieve_recipients", (rl) => {
      recipients = rl;
      setrlfetch(false);
    });
  }, []);

  useEffect(() => {
    if (active !== null) socket.emit("fetch_chats", active);
  }, [active]);

  useEffect(() => {
    socket.on("receive_chats", (messages) => {
      dispatch(setMessages(messages));
    });
    return () => {
      socket.off("recieve_chats");
    };
  }, []);

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
