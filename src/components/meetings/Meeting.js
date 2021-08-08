import style from "./Meeting.module.css";

const Meeting = (props) => {

  const handleClick = () => {
    props.setMeeting(props.meeting);
    props.onClickMeeting();
  };

  return (
    <div className={style.meeting} onClick={handleClick}>
      <h3 className={style["meeting-title"]}>{props.meeting.title}</h3>
      <p className={style["meeting-date"]}>{props.meeting.date}</p>
    </div>
  );
};

export default Meeting;
