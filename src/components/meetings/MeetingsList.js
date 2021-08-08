import Meeting from "./Meeting";

const MeetingsList = (props) => {

  let content;
  if (props.meetings) {
    content = props.meetings.map((meeting) => (
      <li key={meeting.id}>
        <Meeting
          meeting={meeting}
          onClickMeeting={props.onClickMeeting}
          setMeeting={props.setMeeting}
        />
      </li>
    ));
  } else {
    content = <p>Carregando...</p>;
  }

  return <ul>{content}</ul>;
};

export default MeetingsList;
