import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  return <div>Welcome {user}</div>;
};

export default Profile;
