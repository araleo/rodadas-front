import { useEffect, useState } from "react";
import MeetingsList from "./MeetingsList";

import useHttp from "../../hooks/use-http";

import { parseMeeting } from "../../utils/util";
import SectionCard from "../UI/SectionCard";

const API_LAST_MEETINGS_URL =
  "http://rodadasapi.eba-xxnumxer.us-east-2.elasticbeanstalk.com/api/ultimas/";

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
    content = <p>Carregando...</p>;
  } else if (!isLoading && lastMeetings) {
    content = (
      <MeetingsList
        meetings={lastMeetings}
        onClickMeeting={props.onClickMeeting}
        setMeeting={props.setMeeting}
      />
    );
  } else if (error) {
    content = <p>Ocorreu um erro!</p>;
  }

  return (
    <SectionCard colorBackground="true">
      <h2>Últimos encontros</h2>
      {content}
    </SectionCard>
  );
};

export default LastMeetings;
