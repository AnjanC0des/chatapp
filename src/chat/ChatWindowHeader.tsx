// import Del from "../assets/delicon.svg";
export default ({ name, delfunc, id }) => {
  return (
    <div className="flex justify-between">
      <div className="font-mono text-xl font-medium text-left text-black ">
        {name}
      </div>
      <div className="text-black" onClick={() => delfunc(id)}>
        <img src="src/assets/delicon.svg" width="20" height="20" />
      </div>
    </div>
  );
};
