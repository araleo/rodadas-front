import SectionCard from "../UI/SectionCard";
import Meeting from "./Meeting";

const MeetingsList = (props) => {
  let content;
  if (props.meetings) {
    content = props.meetings.map((meeting) => (
      <li key={meeting.id}>
        <Meeting
          title={meeting.title}
          date={meeting.date}
          onClickMeeting={props.onClickMeeting}
        />
      </li>
    ));
  } else {
    content = <p>Loading...</p>
  }
  
  return (
    <SectionCard colorBackground={props.colorBackground}>
      <h2>{props.title}</h2>
      <ul>{content}</ul>
    </SectionCard>
  );
};

export default MeetingsList;
