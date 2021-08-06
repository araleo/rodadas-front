import style from "./Meeting.module.css";

const Meeting = (props) => {
  return (
    <div className={style.meeting} onClick={props.onClickMeeting}>
      <h3 className={style["meeting-title"]}>{props.title}</h3>
      <p className={style["meeting-date"]}>{props.date}</p>
    </div>
  );
};

export default Meeting;
