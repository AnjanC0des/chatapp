import Trash from "../assets/trash.svg";
export default ({ name, delfunc, id }) => {
  return (
    <>
      <div className="font-mono text-xl font-medium text-left justify-self-start">
        {name}
      </div>
      <div className="justify-self-end" onClick={() => delfunc(id)}>
        <Trash />
      </div>
    </>
  );
};
