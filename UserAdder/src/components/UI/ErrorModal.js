import styles from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";

const ErrorModal = (props) => {
  const errorBoxHandler = (e) => {
    props.onCancelError(false);
  };
  return (
    <div>
      <div className={styles.backdrop} onClick={errorBoxHandler} />
      <Card cssClassName={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClickHandler={errorBoxHandler}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
