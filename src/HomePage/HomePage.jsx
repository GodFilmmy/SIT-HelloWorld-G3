import { useNavigate } from "react-router-dom";

const rooms = {
  room1: {
    building: "LX",
    floor: "(10th floor)",
    roomName: "Training room 10/1",
  },
  room2: {
    building: "LX",
    floor: "(10th floor)",
    roomName: "Training room 10/2",
  },
  room3: {
    building: "LX",
    floor: "(10th floor)",
    roomName: "Training room 10/3",
  },
  room4: {
    building: "LX",
    floor: "(10th floor)",
    roomName: "Training room 10/2",
  },
  room5: {
    building: "LX",
    floor: "(10th floor)",
    roomName: "Training room 10/2",
  },
};

function HomePage() {
  const homeNavigate = useNavigate();
  const handleRoomBoxSelected = () => {
    homeNavigate("/form");
    window.scrollTo({top:0});
  };

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
              ระบบจองห้อง <br></br> คณะเทคโนโลยีสารสนเทศ
            </div>
          </div>
          <div className="home-room-dropdown ">
            <select
              name="floor"
              className="w-[50%] p-3 border border-[#6DA0FE] rounded-lg"
            >
              <option value="">--choose your floor--</option>
              <optgroup label="Lx Building">
                <option value="LxBuilding">10th</option>
                <option value="LxBuilding">11th</option>
                <option value="LxBuilding">12th</option>
              </optgroup>
              <optgroup label="SIT Building">
                <option value="SITBuilding">1st</option>
                <option value="SITBuilding">3rd</option>
                <option value="SITBuilding">4th</option>
              </optgroup>
            </select>
          </div>
          <div className="home-room-choosing-container h-100 overflow-hidden w-ful rounded-lg">
            <div className="home-room-choosing-body overflow-y-auto h-full">
              {Object.keys(rooms).map((roomKey) => (
                <div
                  onClick={handleRoomBoxSelected}
                  key={roomKey}
                  className="home-room-choosing-box p-4 mb-2 border border-gray-300 rounded-lg hover:border-2"
                >
                  <div className="home-room-building">
                    {rooms[roomKey].building}
                  </div>
                  <div className="home-room-floor">{rooms[roomKey].floor}</div>
                  <div className="home-room-floor">
                    {rooms[roomKey].roomName}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="home-room-calen h-[236px] bg-amber-400"></div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
