import React, { useEffect, useState } from "react";
import axios from "axios";
import UsersCard from "../userCard/UserCard.js";

const UserList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setData(response.data))
      .catch((function(error) {
        console.error(error);
      }));   
    
    }, []);

  return (
    <div style={{display:"flex",flexWrap:"wrap"}}>
      {data.map((user) => (
        <UsersCard user={user} 
        key={user.id} />
      ))}
    </div>
  );
};

export default UserList;
