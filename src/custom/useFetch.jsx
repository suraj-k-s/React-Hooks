import React, { useEffect, useState } from "react";

const useFecth = (url) => {
  const [state, setState] = useState();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setState(data));
  }, [url]);
  return [state];
};

export default useFecth;
