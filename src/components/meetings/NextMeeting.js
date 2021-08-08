import { useEffect, useState } from "react";

import useHttp from "../../hooks/use-http";
import Meeting from "./Meeting";

import { parseMeeting } from "../../utils/util";
import SectionCard from "../UI/SectionCard";

const API_NEXT_MEETING_URL =
  "http://rodadasapi.eba-xxnumxer.us-east-2.elasticbeanstalk.com/api/proxima/";

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
    content = <p>Carregando...</p>;
  } else if (!isLoading && nextMeeting !== null) {
    content = (
      <Meeting
        meeting={nextMeeting}
        onClickMeeting={props.onClickMeeting}
        setMeeting={props.setMeeting}
      />
    );
  } else if (error) {
    content = <p>Ocorreu um erro!</p>;
  }

  return (
    <SectionCard>
      <h2>Próximo encontro</h2>
      {content}
    </SectionCard>
  );
};

export default NextMeeting;
