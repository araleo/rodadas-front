import { useEffect, useState } from "react";

import Button from "../UI/Button";
import MeetingsList from "./MeetingsList";
import SectionCard from "../UI/SectionCard";

import useHttp from "../../hooks/use-http";
import { API_LAST_MEETINGS_URL } from "../../utils/constants";
import { parseMeeting } from "../../utils/util";

import styles from "./LastMeetings.module.css";

const INITIAL_MEETINGS_NUM = 3;

const LastMeetings = (props) => {
  const [lastMeetings, setLastMeetings] = useState([]);
  const [meetingsNum, setMeetingsNum] = useState(INITIAL_MEETINGS_NUM);
  const [showLoadMoreButton, setShowLoadMoreButton] = useState(false);

  const { isLoading, error, sendRequest: fetchLastMeetings } = useHttp();

  useEffect(() => {
    const transformMeetingArray = (meetingArr) => {
      const meetings = [];
      meetingArr.forEach((meetingObj) => {
        meetings.push(parseMeeting(meetingObj));
      });
      if (meetings.length) {
        setShowLoadMoreButton(meetings.length >= meetingsNum);
        setLastMeetings(meetings.slice(0, meetingsNum));
      }
    };
    fetchLastMeetings({ url: API_LAST_MEETINGS_URL }, transformMeetingArray);
  }, [fetchLastMeetings, meetingsNum]);

  const loadMoreMeetingsHandler = () => {
    setMeetingsNum((prevState) => prevState + INITIAL_MEETINGS_NUM);
  };

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
      {showLoadMoreButton && (
        <div className={styles.btnDiv}>
          <Button onClick={loadMoreMeetingsHandler}>Carregar mais...</Button>
        </div>
      )}
    </SectionCard>
  );
};

export default LastMeetings;
