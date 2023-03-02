import styles from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onCancelError} />;
};
const ModalOverlay = (props) => {
  return (
    <Card cssClassName={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClickHandler={props.onCancelError}>Okay</Button>
      </footer>
    </Card>
  );
};
const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onCancelError={props.onCancelError} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          onCancelError={props.onCancelError}
          title={props.title}
          message={props.message}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ErrorModal;
