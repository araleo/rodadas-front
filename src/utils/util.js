const parseMeeting = (meetingObj) => {

  const meetingDate = new Date(meetingObj["date"]);
  const options = { dateStyle:"medium", timeStyle: "short" }
  const meetingLocalDate = meetingDate.toLocaleString("pt-BR", options);

  return {
    id: meetingObj["id"],
    title: meetingObj["title"],
    date: meetingLocalDate,
    description: meetingObj["description"],
    drive: meetingObj["drive"],
    presentation: meetingObj["presentation"],
    recording: meetingObj["recording"],
  };
};

export { parseMeeting };
