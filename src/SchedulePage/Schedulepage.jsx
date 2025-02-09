import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import ReservationBtn from "../Reservation-Btn";

const localizer = momentLocalizer(moment);

// Sample events to display on the calendar (this should be dynamically updated)
const events = [
  // { title: 'Room Booking', start: new Date(), end: new Date() },
];

function ScheduleResult() {
  const location = useLocation(); 
  const queryParams = new URLSearchParams(location.search); 
  const roomName = queryParams.get("room");
  const floor = queryParams.get("floor");

  const [roomDetails, setRoomDetails] = useState({
    roomName: roomName || "Default Room",
    floor: floor || "Default Floor",
  });

  useEffect(() => {
    console.log("Room Details:", roomDetails);
  }, [roomDetails]);

  return (
    <div className="schedule-Container flex flex-col p-3 gap-4 lg:flex-row mt-30 ">
      <div className="schedule-left flex-1 flex lg:flex-col ">
        <div className="schedule-left-location flex flex-col lg:p-8 mx-8 my-7">
          <h1 className="text-4xl font-bold">{roomDetails.floor}</h1>
          <h1 className="text-4xl">{roomDetails.roomName}</h1>
        </div>
        <div className="flex items-center p-5 lg:pl-15 lg:justify-start justify-center">
          <ReservationBtn roomName={roomDetails.roomName} floor={roomDetails.floor} />
        </div>
      </div>
      <div className="schedule-right flex-2 ">
        <Calendar
          localizer={localizer}
          startAccessor="start"
          endAccessor="end"
          style={{ height: "100vh" }}
          events={events}
        />
      </div>
    </div>
  );
}

export default ScheduleResult;
