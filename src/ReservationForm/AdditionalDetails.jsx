import { useEffect, useState } from "react"
import { useReversation } from "../contexts/useReversation"

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

const AdditionalDetails = ({ onChange, room }) => {
    const { form, setForm } = useReversation()
    const [buildingData, setBuildingData] = useState({})
    const [selectedFloor, setSelectedFloor] = useState(null)

    useEffect(() => {
        // Set new data after selected building had changed
        fetchBuildingData().then(data => setBuildingData(data))
    }, [])
    // const onDetailsChangeHandler = (event) => {
    //     setForm((prev) => ({ ...prev, details: event.target.value, }))
    // }
    const onDateChangeHandler = (event) => {
        setForm((prev) => ({ ...prev, date: event.target.value }))
    }
    const roomCB2 = ["CB2301", "CB2304", "CB2305", "CB2306", "CB2308", "CB2312", "CB2313"];
    const roomLX = ["Training Room 10/1", "Training Room 10/2", "Training Room 10/3", "Training Room 10/4", "Training Room 10/5",
        "Training Room 11/1", "Training Room 11/2", "Training Room 11/3", "Training Room 11/4", "Training Room 11/5",
        "Training Room 12/1", "Training Room 12/2"]
    const roomSIT = ["Training 1/3(Train 3)", "Training 1/5(Train 5)",
        "Meeting 3/1(Meeting 1)", "Meeting 3/2(Meeting 2)", "Meeting 3/3(Meeting 3)",
        "Meeting 3/4(3rd Floor)", "Meeting 4/2(Classroom)", "Meeting 4/3(4th Floor)"]
    const floorCB2 = ["3rd"]
    const floorLx = ["10th", "11th", "12th"];
    const floorSIT = ["1st", "3rd", "4th"];

    useEffect(() => {
        setSelectedFloor(form.floor)
    }, [])
    return (
        <>
            <div className="grid-col gap-4">
                {/* <div className="grid grid-cols-2 "> */}
                <div className='flex ml-auto gap-2'> {/* บรรทัดเดียวกัน */}

                    <div className="mb-4 flex-1">
                        {/* <div className="inline-block relative w-64"> */}
                        <label htmlFor="input-floor" className='block text-gray-700'>
                            Floor:
                        </label>
                        <select
                            name="floor"
                            className="w-full p-4 rounded-md border border-gray-300 focus:shadow-md outline-none focus:ring-2 focus:ring-gray-200 font-medium text-base text-[#6B7280]"
                        >
                            <option selected value={selectedFloor}>{selectedFloor}</option>
                        </select>
                        {/* </div> */}
                    </div>

                    <div className='mb-4 flex-1 '>
                        <label htmlFor="input-room" className='block text-gray-700'>
                            Room:
                        </label>
                        <select

                            name="room"
                            value={form.room}
                            className="w-full p-4 rounded-md border border-gray-300 focus:shadow-md outline-none focus:ring-2 focus:ring-gray-300 font-medium text-base text-[#6B7280]"
                        >
                            <optgroup label="CB2 Building">
                                <option value="" className="font-semibold text-slate-200">Please Select</option>
                                {roomCB2.map((value) => {
                                    return (
                                        <option key={value} value={value}>{value}</option>
                                    );
                                })}
                            </optgroup>
                            <optgroup label="LX Building">
                                {roomLX.map((value) => {
                                    return (
                                        <option key={value} value={value}>{value}</option>
                                    );
                                })}
                            </optgroup>
                            <optgroup label="SIT Building">
                                {roomSIT.map((value) => {
                                    return (
                                        <option key={value} value={value}>{value}</option>
                                    );
                                })}
                            </optgroup>
                        </select>
                    </div>

                    <div className="mb-4 flex-1">
                        <label htmlFor="input-date" className="block text-gray-700">
                            Date:
                        </label>
                        <input
                            type="date"
                            name="input-date"
                            value={form.date}
                            onChange={onDateChangeHandler}
                            className="w-full p-4 rounded-md border border-gray-300 focus:shadow-md outline-none focus:ring-2 focus:ring-gray-300 font-medium text-base text-[#6B7280]"
                        />
                    </div>

                </div>
            </div >
        </>
    )
}
export default AdditionalDetails