import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (userName, userAge, submitDate) => {
      setUsersList((prevList) => [
        ...prevList,
        { name: userName, age: userAge, key: submitDate.toString() },
      ]);
      console.log(usersList);
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList usersList={usersList} />
    </div>
  );
}

export default App;
