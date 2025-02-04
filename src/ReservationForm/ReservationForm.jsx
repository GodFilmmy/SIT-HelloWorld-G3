import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

const ReservationForm = () => {
    const [fromData, setFormData] = useState({
        name: "",
        status: "",
        date: "",

        startTime: "",
        endTime: "",
        details: "",
        floor: "",
        room: "",
        endDate: "",
    });

    useEffect(() => {
        console.log(fromData);
    }, [fromData]);

    const room = ["CB2301", "CB2304", "CB2305", "CB2306", "CB2308", "CB2312", "CB2313"];
    const floorLx = ["10th", "11th", "12th"];
    const floorSIT = ["1st", "3rd", "4th"]

    return (
        <div
            className="flex flex-col justify-center items-center bg-center bg-cover bg-no-repeat "
            style={{
                backgroundImage: `url("/background.jpg")`
            }}
        >
            <div className="max-w-[1200px] w-full h-full mx-auto rounded-lg bg-white px-16 py-15 bg-center">
                <div className="flex flex-col gap-2">
                    <h1 className='text-2xl font-blod mb-6 text-blue-600 dark:text-sky-400'>รายละเอียดการจอง</h1>
                    <div className="flex flex-row gap-2">
                        <div className='mb-4 flex-1'>
                            <label className='block text-gray-700'>ชื่อผู้จอง: </label>
                            <input
                                type="name"
                                className="w-full p-4 rounded-full border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                            />
                        </div>
                        <div className='mb-4 flex-1'>
                            <label className='block text-gray-700'>สถานะ: </label>
                            <select
                                onChange={(event) => setFormData({ ...fromData, status: event.target.value })}
                                name="status"
                                className="w-full p-4 rounded-full border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                            >
                                <option value="">--Choose your role--</option>
                                <option value="Students">Students</option>
                                <option value="Staff">Staff</option>
                                <option value="Lecturer">Lecturer</option>

                            </select>
                        </div>
                    </div>

                    <div className="flex flex-row gap-2">
                        <div className='mb-4 flex-1'>
                            <label className='block text-gray-700'>วันที่จอง: </label>
                            <input
                                type="date"
                                name="date"
                                className="w-full p-4 rounded-full border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                            />
                        </div>
                        <div className='mb-4 flex-1'>
                            <label className='block text-gray-700'>เวลา: </label>
                            <input
                                type="time"
                                name="startTime"
                                className="w-full p-4 rounded-full border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                            />
                        </div>
                        <div className="mb-4 flex-1">
                            <span className='mx-2'> ถึง </span>
                            <input
                                type="time"
                                name="endTime"
                                className="w-full p-4 rounded-full border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-2">
                    <div className="flex flex-col gap-4">
                        <img src="/background.jpg"
                            className='max-w-[250px] max-h-[200px] rounded-lg shadow-md border border-gray-300 relative z-10' />
                    </div>
                    <div>
                        {/* ฝั่งซ้าย */}
                    </div>
                </div>

                <div className=" flex flex-row gap-2">
                    <div className='mb-4 flex-1'>
                        <label className='block text-gray-700'>รายละเอียด:</label>
                        <textarea
                            name="details"
                            className="w-full p-2 border border-gray-300 rounded-lg shadow-md"
                        ></textarea>
                    </div>
                </div>

                <div className='flex flex-row gap-2'>
                    <div className="mb-4 flex-1">
                        <div className="inline-block relative w-64">
                            <label className='block text-gray-700'>ชั้น: </label>
                            <select
                                onChange={(event) => setFormData({ ...fromData, floor: event.target.value })}
                                name="floor"
                                className="w-full p-4 rounded-full border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                            >
                                <optgroup label="Lx Building">
                                    <option value="">--choose your floor--</option>
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
                    <div className='mb-4 flex-1'>
                        <label className='block text-gray-700'>ห้อง: </label>
                        <select
                            onChange={(event) => setFormData({ ...fromData, room: event.target.value })}
                            name="room"
                            className="w-full p-4 rounded-full border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                        >
                            <option value="">--choose your room--</option>
                            {room.map((value) => {
                                return (
                                    <option key={value} value={value}>{value}</option>
                                );
                            })}
                        </select>
                    </div>
                </div>

                {/* ปล่อยก่อน */}
                <div className='flex flex-row'>
                    <div className='mb-4'>
                        <label className='flex items-center space-x-2'></label>
                        <input type="checkbox"
                            name="recurring"
                            className="h-4 w-4"
                        />
                        <span className="text-gray-700 font-medium"> จองซ้ำ: </span>

                    </div>
                </div>

                <div className="flex flex-row-reverse gap-2">
                    <div className='mb-4 '>
                        <label className='block text-gray-700'>สิ้นสุดวันที่: </label>
                        <input type="date"
                            name="endDate"
                            className="w-full p-4 rounded-full border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                        />
                    </div>
                </div>

                <div className='flex flex-row-reverse md:justify-between mt-4 '>
                    <div className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"'>
                        <Button
                            type="summit"
                            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                        >
                            บันทึก
                        </Button>

                        <Button
                            type="reset"
                            onClick={() =>
                                setFormData({
                                    name: "",
                                    status: "",
                                    recurring: "",
                                    date: "",
                                    startTime: "",
                                    endTime: "",
                                    details: "",
                                    floor: "",
                                    room: "",
                                    endDate: "",
                                })
                            }
                        >
                            ยกเลิก
                        </Button>

                    </div>
                </div>

            </div>
        </div>
    )
}
export default ReservationForm;
