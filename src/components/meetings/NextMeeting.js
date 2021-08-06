import { useEffect, useState } from "react";

import useHttp from "../../hooks/use-http";
import Meeting from "./Meeting";

import { parseMeeting } from "../../utils/util";
import SectionCard from "../UI/SectionCard";

const API_NEXT_MEETING_URL = "http://127.0.0.1:8000/api/proxima/";

const NextMeeting = (props) => {
  
  const [nextMeeting, setNextMeeting] = useState(null);

  const { isLoading, error, sendRequest: fetchNextMeeting } = useHttp();

  useEffect(() => {
    const transformMeeting = (meetingObj) => {
      setNextMeeting(parseMeeting(meetingObj));
    };
    fetchNextMeeting({ url: API_NEXT_MEETING_URL }, transformMeeting);
  }, [fetchNextMeeting]);

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (!isLoading && nextMeeting !== null) {
    content = (
      <Meeting
        title={nextMeeting.title}
        date={nextMeeting.date}
        onClickMeeting={props.onClickMeeting}
      />
    );
  } else if (error) {
    content = <p>Ocorreu um erro!</p>;
  }

  return <SectionCard>
    <h2>Próximo encontro</h2>
    {content}
  </SectionCard>
};

export default NextMeeting;
