import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import { useContext, useEffect, useState } from "react";
import "react-calendar/dist/Calendar.css";
import { useReversation } from "../contexts/useReversation";
import { FormContext } from "antd/es/form/context";


function groupRoomsByFloor(data) {
  return data.reduce((acc, item) => {
      if (!acc[item.name_floor]) {
          acc[item.name_floor] = [];
      }
      acc[item.name_floor].push(item.room);
      return acc;
  }, {});
}

const fetchBuildingData = async () => {
  const res = await fetch('http://helloworld03.sit.kmutt.ac.th:3000/api/buildings/getDetails')
  const data = await res.json()
  const formattedData = groupRoomsByFloor(data)
  console.log(formattedData)
  return formattedData
}

function HomePage() {
  const homeNavigate = useNavigate();
  const {form, setForm} = useReversation()
  const [selectedFloor, setSelectedFloor] = useState(null)
  const [buildingData, setBuildingData] = useState({})
  
  const handleRoomBoxSelected = (roomName) => {
    setForm({...form, room: roomName, floor: selectedFloor})
    homeNavigate(`/schedule?room=${roomName}&floor=${selectedFloor}`);
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    
    // Set new data after selected building had changed
    fetchBuildingData().then(data => setBuildingData(data))
  }, [selectedFloor])

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
              {/* SIT ROOM<br></br>BOOKING */}
            </div>
          </div>
          <div className="home-room-dropdown ">
            <select
              onChange={(e) => {
                setSelectedFloor(e.target.value)
              }}
              name="floor"
              className="w-[50%] p-3 border border-[#6DA0FE] rounded-lg"
            >
              <option value="">--choose your floor--</option>
              {
                Object.keys(buildingData).map((data, index) => {
                  return <option key={index} value={data}>{data}</option>
                })
              }
            </select>
          </div>
          <div className="home-room-choosing-container h-100 overflow-hidden w-ful rounded-lg">
            <div className="home-room-choosing-body overflow-y-auto h-full">
              {buildingData[selectedFloor]?.map((data) => {
                console.log(data)
                return (
                  <div
                  onClick={() => handleRoomBoxSelected(data)}
                  key={data}
                  className="home-room-choosing-box flex gap-4 text-2xl p-8 mb-2 border border-gray-300 rounded-lg hover:border-2"
                >
                  <div className="hoom-room-choosing-box-left">
                    <div className="home-room-building">
                      <img src={'/Home-img/home-room-selectpic.png'} />
                    </div>
                  </div>
                  <div className="hoom-room-choosing-box-right">
                    <div className="home-room-building font-bold">
                      {data}
                    </div>
                  </div>
                </div>
                )
              })
              }
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
