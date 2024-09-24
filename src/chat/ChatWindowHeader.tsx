// import Del from "../assets/delicon.svg";
export default ({ name, delfunc, id }) => {
  return (
    <>
      <div className="font-mono text-xl font-medium text-left text-white justify-self-start">
        {name}
      </div>
      <div className="justify-self-end text-white" onClick={() => delfunc(id)}>
        <img src="src/assets/delicon.svg" width="25" height="25" />
        Delete
      </div>
    </>
  );
};
