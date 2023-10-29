import React from "react";
import useFecth from "./useFetch";

const CustomParent = () => {
  const [data] = useFecth("https://jsonplaceholder.typicode.com/todos");
  return (
    <div>
      {data?.map((obj, key) => {
        return <p key={key}>{obj?.title}</p>;
      })}
    </div>
  );
};

export default CustomParent;
