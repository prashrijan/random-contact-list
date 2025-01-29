import React, { useEffect, useState } from "react";
import { capitalizeFirstLetter } from "../../Others/capitalize";

const Dashboard = ({ getUserName }) => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const name = await getUserName();
        setUserName(name);
      } catch (error) {
        console.error("Error fetching username:", error);
        setUserName("");
      }
    };

    fetchUserName();
  }, [getUserName]);
  return (
    <div className="   text-white">Hello {capitalizeFirstLetter(userName)}</div>
  );
};

export default Dashboard;
