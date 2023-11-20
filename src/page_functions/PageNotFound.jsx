import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  const [secondsLeft, setSeconds] = useState(5);

  const countdown = () => {
    setSeconds(secondsLeft - 1);
  };

  useEffect(() => {
    let timer = setInterval(countdown, 1000);
    return () => {
      clearTimeout(timer);
    };
  });

  useEffect(() => {
    let timer2 = setTimeout(() => {
      navigate("/");
    }, 5500);

    return () => {
      clearTimeout(timer2);
    };
  }, []);

  return (
    <>
      <div className="mainroute">
        404 - Page Not Found -
        <br />
        Thus Sending You HOME in {secondsLeft}
      </div>
    </>
  );
};

export default PageNotFound;
