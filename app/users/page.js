"use client";

import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    const response = await fetch("/api/users");
    const data = await response.json();
    setUsers(data);
  }

  return (
    <>
      <div>
        <h1>List of Users</h1>
        <button
          style={{
            backgroundColor: "blue",
            color: "white",
            padding: "5px 10px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={getUsers}
        >
          Show list
        </button>
        {users.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
      </div>
    </>
  );
}
