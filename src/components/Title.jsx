import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
function Title() {
  useEffect(() => {
    let time = setInterval(() => {
      console.log("mounding.........");
    }, 1000);
    return () => {
      clearInterval(time);
    };
  }, []);
  return <h1>Welcome.......</h1>;
}

export default Title;
