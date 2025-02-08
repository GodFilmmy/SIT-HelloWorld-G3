import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";

const floorCB2 = ["3rd"]
const floorLx = ["10th", "11th", "12th"];
const floorSIT = ["1st", "3rd", "4th"];

const rooms = {
  room1: {
    building: "LX",
    floor: "(10th floor)",
    roomName: "Training room 10/1",
    roomPic: "Home-img/home-room-selectpic.png",
  },
  room2: {
    building: "LX",
    floor: "(10th floor)",
    roomName: "Training room 10/2",
    roomPic: "Home-img/home-room-selectpic.png",
  },
  room3: {
    building: "LX",
    floor: "(10th floor)",
    roomName: "Training room 10/3",
    roomPic: "Home-img/home-room-selectpic.png",
  },
  room4: {
    building: "LX",
    floor: "(10th floor)",
    roomName: "Training room 10/2",
    roomPic: "Home-img/home-room-selectpic.png",
  },
  room5: {
    building: "LX",
    floor: "(10th floor)",
    roomName: "Training room 10/2",
    roomPic: "Home-img/home-room-selectpic.png",
  },
};

function HomePage() {
  const homeNavigate = useNavigate();
  const handleRoomBoxSelected = () => {
    homeNavigate("/schdule");
    window.scrollTo({ top: 0 });
  };

  const [value, setValue] = useState(new Date());
  return (
    <>
      <div className="home-container flex flex-col lg:flex-row pt-[130px] p-10 justify-center gap-8 items-center">
        <div className="home-left">
          <div className="home-left-upcom "></div>
          <img
            className="relative left-[-60px] lg:left-[-150px]"
            src="Home-img/home-background.png"
          />
        </div>
        <div className="home-content flex flex-col gap-6">
          <div className="home-title">
            <div className="text-6xl font-bold">
              ระบบจองห้อง <br></br>คณะเทคโนโลยีสารสนเทศ
            </div>
          </div>
          <div className="home-room-dropdown ">
            <select
              name="floor"
              className="w-[50%] p-3 border border-[#6DA0FE] rounded-lg"
            >
              <option value="">--choose your floor--</option>
              <optgroup label="CB2 Building">
                {floorCB2.map((value)=>{
                  return <option key={value} value={value}>{value}</option>
                })}
              </optgroup>
              <optgroup label="LX Building">
              {floorLx.map((value)=>{
                  return <option key={value} value={value}>{value}</option>
                })}
              </optgroup>
              <optgroup label="SIT Building">
              {floorSIT.map((value)=>{
                  return <option key={value} value={value}>{value}</option>
                })}
              </optgroup>
            </select>
          </div>
          <div className="home-room-choosing-container h-100 overflow-hidden w-ful rounded-lg">
            <div className="home-room-choosing-body overflow-y-auto h-full">
              {Object.keys(rooms).map((roomKey) => (
                <div
                  onClick={handleRoomBoxSelected}
                  key={roomKey}
                  className="home-room-choosing-box flex gap-4 text-2xl p-8 mb-2 border border-gray-300 rounded-lg hover:border-2"
                >
                  <div className="hoom-room-choosing-box-left">
                    <div className="home-room-building">
                      <img src={rooms[roomKey].roomPic} />
                    </div>
                  </div>
                  <div className="hoom-room-choosing-box-right">
                    <div className="home-room-building font-bold">
                      {rooms[roomKey].building}
                    </div>
                    <div className="home-room-floor">
                      {rooms[roomKey].floor}
                    </div>
                    <div className="home-room-floor">
                      {rooms[roomKey].roomName}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="home-room-calen items-center flex justify-center mt-4">
            {/* <Calendar onChange={setValue} value={value}/>*/}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
