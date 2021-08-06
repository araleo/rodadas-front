import { Fragment } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

import styles from "./MeetingModal.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirm}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal} >
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div>
        <p className={styles.date}>{props.date}</p>
        <p className={styles.description}>{props.description}</p>
      </div>
      <div className={styles.links}>
        <a href={props.drive} rel="noreferrer" target="_blank">Material de Estudos</a>
        <a href={props.slides} rel="noreferrer" target="_blank">Apresentação PPT</a>
        <a href={props.room} rel="noreferrer" target="_blank">Reunião ou Gravação</a>
      </div>
      <footer className={styles.footer}>
        <Button onClick={props.onConfirm}>Fechar</Button>
      </footer>
    </div>
  );
};

const MeetingModal = (props) => {
  return (
    <Fragment>
      {createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}

      {createPortal(
        <ModalOverlay
          title={props.meeting["title"]}
          description={props.meeting["description"]}
          date={props.meeting["date"]}
          drive={props.meeting["drive"]}
          slides={props.meeting["slides"]}
          room={props.meeting["room"]}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default MeetingModal;
