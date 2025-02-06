import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const events = [
  {
    title: "Example1",
    start: new Date(2025, 1, 6, 10, 0),
    end: new Date(2025, 1, 6, 12, 0),
  },
  {
    title: "Example2",
    start: new Date(2025, 1, 9, 14, 0),
    end: new Date(2025, 1, 9, 16, 0),
  },
];

function ScheduleResult() {
  return (
    <>
      <div className="schedule-Container flex flex-col p-3 gap-4 lg:flex-row mt-30 ">
        <div className="schedule-left flex-1">
          <div className="schedule-left-location  flex flex-col   p-8 mx-8 my-7">
            <h1 className="text-5xl font-bold">LX Building</h1>
            <h1 className="text-4xl">(10th floor)</h1>
            <h1 className="text-4xl">Training Room 10/1</h1>
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
    </>
  );
}
export default ScheduleResult;
