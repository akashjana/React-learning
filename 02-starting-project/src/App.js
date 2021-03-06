import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserhandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { id: Math.random().toString(), name: uName, age: uAge },
      ];
    });
  };
  return (
    <React.Fragment>
      <AddUser onAddUser={addUserhandler}></AddUser>
      <UsersList users={usersList}></UsersList>
    </React.Fragment>
  );
}

export default App;
