import { useState } from "react";

import About from "./components/about/About";
import Header from "./components/Header";
import LastMeetings from "./components/meetings/LastMeetings";
import NextMeeting from "./components/meetings/NextMeeting";
import Content from "./components/UI/Content";
import MeetingModal from "./components/UI/MeetingModal";

const App = () => {

  const [detail, setDetail] = useState(false);
  const [meeting, setMeeting] = useState(null);

  const openDetailsHandler = () => {
    setDetail(true);
  };

  const closeDetailsHandler = () => {
    setDetail(false);
  };

  const loadModalDataHandler = (meetingObj) => {
    setMeeting(meetingObj);
  };

  return (
    <Content>
      {detail && <MeetingModal onConfirm={closeDetailsHandler} meeting={meeting} />}
      <Header />
      <NextMeeting onClickMeeting={openDetailsHandler} onLoadModal={loadModalDataHandler} />
      <LastMeetings onClickMeeting={openDetailsHandler} />
      <About />
    </Content>
  );
};

export default App;
