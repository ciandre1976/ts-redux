import Child from "./Child";

const Parent = () => {
  return (
    <Child color="red" onClick={() => console.log("you kliked em")}>
      DECA
    </Child>
  );
};

export default Parent;
