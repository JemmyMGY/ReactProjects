import { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [errorHappened, setErrorHappened] = useState(false);
  const [error, setError] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length < 1 || userAge.trim().length < 1) {
      if (userName.trim().length < 1)
        setError({
          title: "Invalid name",
          msg: "Enter a valid Name, non-empty name",
        });
      else if (userAge.trim().length < 1)
        setError({
          title: "Invalid age",
          msg: "Enter a valid age, non-empty age",
        });

      setErrorHappened(true);
      return;
    }
    if (+userAge < 16) {
      setError({
        title: "Invalid age",
        msg: "Enter a valid age, age must be greater than 16",
      });
      setErrorHappened(true);
      return;
    }
    const currDate = new Date();
    props.onAddUser(userName, userAge, currDate);

    console.log(userName, userAge, currDate);
    setUserName("");
    setUserAge("");
  };

  const userNameHandler = (e) => {
    setUserName(e.target.value);
  };

  const userAgeHandler = (e) => {
    setUserAge(e.target.value);
  };
  const cancelErrorHandler = () => {
    setErrorHappened(false);
  };
  return (
    <>
      {errorHappened && (
        <ErrorModal
          title={error.title}
          message={error.msg}
          onCancelError={cancelErrorHandler}
        />
      )}

      <Card cssClassName={styles.input}>
        <form onSubmit={addUserHandler}>
          <label>User Name: </label>
          <input
            id="userName"
            type={"text"}
            value={userName}
            onChange={userNameHandler}
          />

          <label>User Age: </label>
          <input
            id="userAge"
            type={"number"}
            value={userAge}
            min={16}
            max={80}
            onChange={userAgeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
