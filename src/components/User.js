import { useState, useEffect } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2] = useState(1);
  const [userInfo, setUserInfo] = useState("");

  useEffect(() => {
    //API calls
    fetchUserInfo();
  }, []);

  const fetchUserInfo = async () => {
    const data = await fetch("https://api.github.com/users/Rucha-Dhok");
    const json = await data.json();
    setUserInfo(json);
  };

  return (
    <div className="user-card">
      <h1>Count : {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Me!!
      </button>
      <h1>Count2 : {count2}</h1>
      <h2>Name : {userInfo.login}</h2>
      <h3>Location : Bengaluru </h3>
      <h4>Contact : 8987022675</h4>
    </div>
  );
};

export default User;
