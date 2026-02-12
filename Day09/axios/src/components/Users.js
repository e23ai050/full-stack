import React, { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        console.log("API DATA:", response.data); // 👈 IMPORTANT
        setUsers(response.data);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div>
      <h2>User List</h2>
      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default Users;
