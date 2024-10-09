import { useSelector, useDispatch } from "react-redux";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { recipientList } from "@/State";
import { DraftActions } from "@/store/DraftSlice";
import { MessageActions } from "@/store/MessageSlice";
export default (props) => {
  const { setDraft, clearDraft } = DraftActions;
  const { setMessages, addMessages, clearMessages } = MessageActions;
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.message.messages);
  const draft = useSelector((state) => state.draft);
  const active = useSelector((state) => state.active);
  let draftmessage =
    active == null || draft[active] == null ? "" : draft[active];
  const initials = active !== null ? recipientList[active].initials : null;

  const draftUpdate = (e) => {
    dispatch(setDraft({ [active]: e.target.value }));
  };
  const sendMessage = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (e.target.value.length > 0) {
        dispatch(
          addMessages({
            active: active,
            messageobj: { id: "105", sender: "0", content: e.target.value },
          })
        );
        dispatch(clearDraft(active));
      }
    }
  };
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
      {active !== null && (
        <Textarea
          value={draftmessage}
          onChange={draftUpdate}
          onKeyDown={sendMessage}
          placeholder="Type message."
        />
      )}
    </>
  );
};
