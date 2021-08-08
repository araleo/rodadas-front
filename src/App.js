import { useState } from "react";

import About from "./components/about/About";
import Header from "./components/header/Header";
import LastMeetings from "./components/meetings/LastMeetings";
import NextMeeting from "./components/meetings/NextMeeting";
import Content from "./components/UI/Content";
import MeetingModal from "./components/UI/MeetingModal";

const App = () => {

  const [isModalShown, setIsModalShown] = useState(false);
  const [meeting, setMeeting] = useState();

  const openModalHandler = () => {
    setIsModalShown(true);
  };

  const closeModalHandler = () => {
    setIsModalShown(false);
  };

  return (
    <Content>
      {isModalShown && <MeetingModal onConfirm={closeModalHandler} meeting={meeting} />}
      <Header />
      <NextMeeting onClickMeeting={openModalHandler} setMeeting={setMeeting} />
      <LastMeetings onClickMeeting={openModalHandler} setMeeting={setMeeting} />
      <About />
    </Content>
  );
};

export default App;
