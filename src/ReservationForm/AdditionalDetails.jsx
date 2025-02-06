import { useState } from "react"
import { useReversation } from "../contexts/useReversation"

const AdditionalDetails = ({ onChange }) => {
    const [fromData, setFormData] = useState({ details: "", floor: "", room: "" })
    const { setForm, form } = useReversation()
    // const onDetailsChangeHandler = (event) => {
    //     setForm((prev) => ({ ...prev, details: event.target.value, }))
    // }
    const onFloorChangeHandler = (event) => {
        setForm((prev) => ({ ...prev, floor: event.target.value, }))
    }
    const onRoomChangeHandler = (event) => {
        setForm((prev) => ({ ...prev, room: event.target.value }))
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
    const floorSIT = ["1st", "3rd", "4th"]

    return (
        <>
            <div className="flex w-full">
                {/* <div className="grid grid-cols-2 "> */}
                <div className='flex ml-auto mr-0 gap-2'>
                    <div className="mb-4 flex-1 w-64">
                        <div className="inline-block relative w-64">
                            <label htmlFor="input-floor" className='block text-gray-700'>
                                ชั้น:
                            </label>
                            <select
                                name="floor"
                                value={form.floor}
                                onChange={onFloorChangeHandler}
                                // onChange={onFloorChangeHandler}
                                className="w-full p-4 rounded-full border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                            >
                                <optgroup label="CB2 Building">
                                    <option value="">--choose your floor--</option>
                                    {floorCB2.map((value) => {
                                        return (
                                            <option key={value} value={value}>{value}</option>
                                        );
                                    })}
                                </optgroup>
                                <optgroup label="Lx Building">
                                    {floorLx.map((value) => {
                                        return (
                                            <option key={value} value={value}>{value}</option>
                                        );
                                    })}
                                </optgroup>
                                <optgroup label="SIT Building">
                                    {floorSIT.map((value) => {
                                        return (
                                            <option key={value} value={value}>{value}</option>
                                        );
                                    })}
                                </optgroup>
                            </select>
                        </div>
                    </div>

                    <div className='mb-4 flex-1 w-64'>
                        <label htmlFor="input-room" className='block text-gray-700'>
                            ห้อง:
                        </label>
                        <select
                            onChange={onRoomChangeHandler}
                            name="room"
                            value={form.room}
                            className="w-full p-4 rounded-full border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                        >
                            <optgroup label="CB2 Building">
                                <option value="">--choose your floor--</option>
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
                </div>
                {/* </div> */}
            </div >
        </>
    )
}
export default AdditionalDetails