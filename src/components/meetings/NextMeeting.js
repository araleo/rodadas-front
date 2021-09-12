import { useEffect, useState } from "react";

import Meeting from "./Meeting";
import SectionCard from "../UI/SectionCard";

import useHttp from "../../hooks/use-http";
import { parseMeeting } from "../../utils/util";
import { API_NEXT_MEETING_URL } from "../../utils/constants";

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
  } else if (!isLoading && nextMeeting === null) {
    content = <h3>Nenhum encontro futuro agendado :(</h3>;
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
