import React, { useState } from 'react';
import { Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

function Form() {
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
}
const ReservationForm = () => {
    return(
        <>
            <div className='w-full p-4 rounded-full border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300'>
                <h1 className='text-2xl font-blod mb-6'>รายละเอียดการจอง</h1>

                        <div className='mb-4'>
                            <label className='block text-gray-700'>สถานะ: </label>
                            <select 
                            name="status"
                            boxName="w-full p-4 rounded-full border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                            >
                                <option value="">--Choose your role--</option>
                                <option value="Students">Students</option>
                                <option value="Staff">Staff</option>
                                <option value="Lecturer">Lecturer</option>
                                
                            </select>
                        </div>
                        <div className='mb-4'>
                            <label className='block text-gray-700'>วันที่จอง: </label>
                            <input 
                            type="date" 
                            name="date"
                            boxName="w-full p-4 rounded-full border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                            />
                        </div>
                        <div className='mb-4'>
                            <label className='block text-gray-700'>เวลา: </label>
                            <input 
                            type="time"
                            name="startTime"
                            boxName="w-full p-4 rounded-full border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                            />
                            <span className='mx-2'> ถึง </span>
                            <input 
                            type="time"
                            name="endTime"
                            boxName="w-full p-4 rounded-full border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                            />
                            </div>
                            </div>

                        <div className='mb-4'>
                            <label className='block text-gray-700'>รายละเอียด:</label>
                            <textarea name="details" 
                            id="" 
                            cols="30" 
                            rows="10"
                            ></textarea>
                        </div>
                        <div className="inline-block relative w-64">
                            <label className='block text-gray-700'>ชั้น: </label>
                            <select name="floor"
                            boxName="w-full p-4 rounded-full border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300" 
                            >
                                <optgroup label="Lx Building">
                                    <option value="">--choose your floor--</option>
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
                        <div className='mb-4'>
                            <label className='block text-gray-700'>ห้อง: </label>
                            <select name="room"
                            boxName="w-full p-4 rounded-full border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300" 
                            >
                                <option value="">--choose your room--</option>
                                <option value="CB2301"></option>
                                <option value="CB2304"></option>
                                <option value="CB2305"></option>
                                <option value="CB2306"></option>
                                <option value="CB2308"></option>
                                <option value="CB2312"></option>
                                <option value="CB2313"></option>
                            </select>
                        </div>
                        <div className='mb-4'>
                            <label className='block text-gray-700'>สิ้นสุดวันที่: </label>
                            <input type="date"
                            name="endDate"
                            boxName="w-full p-4 rounded-full border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300" 
                             />
                        </div>
                        <div className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"'>
                            <Button 
                            type="summit"
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            >
                                บันทึก
                            </Button>
                            <Button
                            type="reset"
                            onClick={() =>
                                setFormData({
                                    name:"",
                                    status: "",
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
        </>
    )
}
export default ReservationForm;