import { useEffect, useState } from "react";
import MeetingsList from "./MeetingsList";

import useHttp from "../../hooks/use-http";

import { parseMeeting } from "../../utils/util";

const API_LAST_MEETINGS_URL = "http://127.0.0.1:8000/api/ultimas/";

const LastMeetings = (props) => {
  const [lastMeetings, setLastMeetings] = useState(null);

  const { isLoading, error, sendRequest: fetchLastMeetings } = useHttp();

  useEffect(() => {
    const transformMeetingArray = (meetingArr) => {
      const meetings = [];
      meetingArr.forEach((meetingObj) => {
        meetings.push(parseMeeting(meetingObj));
      });
      setLastMeetings(meetings);
    };
    fetchLastMeetings({ url: API_LAST_MEETINGS_URL }, transformMeetingArray);
  }, [fetchLastMeetings]);

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (!isLoading && lastMeetings) {
    content = (
      <MeetingsList
        title="Últimos encontros"
        meetings={lastMeetings}
        onClickMeeting={props.onClickMeeting}
        colorBackground="true"
      />
    );
  } else if (error) {
    content = <p>Ocorreu um erro!</p>;
  }

  return <div>{content}</div>;
};

export default LastMeetings;
