// import Del from "../assets/delicon.svg";
import { useSelector } from "react-redux";
export default ({ name, delfunc, id }) => {
  const active = useSelector((state) => state.active);
  const recipientList = useSelector((state) => state.recipients);
  return (
    <div className="flex justify-between">
      <div className="font-mono text-xl font-medium text-left text-black ">
        {active !== null ? recipientList[active].name : "Dummy name"}
      </div>
      <div className="text-black" onClick={() => delfunc(id)}>
        <img src="src/assets/delicon.svg" width="20" height="20" />
      </div>
    </div>
  );
};
