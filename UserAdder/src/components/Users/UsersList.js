import Card from "../UI/Card";
import styles from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card cssClassName={styles.users}>
      {props.usersList.length > 0 ? (
        <ul>
          {props.usersList.map((user) => (
            <li key={user.key}>
              {user.name} is ({user.age} years old)
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.no_data}>No data to show!</div>
      )}
    </Card>
  );
};

export default UsersList;
