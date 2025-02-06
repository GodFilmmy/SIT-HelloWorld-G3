import React, { useEffect, useState } from 'react';
// import TextStatusInput from './TextStatusInput';
import { useReversation } from '../contexts/useReversation'
import ReservationDetails from './ReservationDetails';
import AdditionalDetails from './AdditionalDetails';
import SubmitButton from './Button/SubmitButton';
import ResetButton from './Button/ResetButton';
import RecurringBooking from './RecurringBooking';

const ReservationForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        status: "",
        date: "",
        startTime: "",
        endTime: "",
        details: "",
        floor: "",
        room: "",
        recurring: false,
        recurringType: "",
        endDate: ""
    });
    const { form, setForm } = useReversation()
    // const handleSummit = () => {
    //     event.preventDefault();
    //     setForm(formData)
    //     console.log("✅ Form Submitted:", formData);
    // }
    // useEffect(() => {
    //     console.log("📌 From Data Update: ", formData);
    // }, [fromData]);

    const onEndDateChangeHandler = (event) => {
        setForm((prev) => ({ ...prev, endDate: event.target.value }))
    }
    const onDetailsChangeHandler = (event) => {
        setForm((prev) => ({ ...prev, details: event.target.value }))
    }

    return (
        <>
            <div className="flex flex-col justify-center bg-[url(/background.jpg)] items-center bg-center bg-cover bg-no-repeat">
                <div className="max-w-[1200px] w-full h-full mx-auto rounded-lg bg-white px-16 py-15 bg-center ">
                    <div className="flex flex-col gap-2">
                        <h1 className='text-2xl font-blod mb-6 text-blue-600 dark:text-sky-400'>
                            รายละเอียดการจอง
                        </h1>
                        <ReservationDetails />
                    </div>


                    <div className=" flex flex-row-reverse gap-2">
                        <div className='mb-4 flex-1'>
                            <label htmlFor="details-input" className='block text-gray-700'>
                                รายละเอียด:
                            </label>
                            <textarea
                                name="details-input"
                                value={form.details}
                                onChange={onDetailsChangeHandler}
                                className="w-full p-2 border border-gray-300 rounded-lg shadow-md"
                            ></textarea>
                            < AdditionalDetails />
                        </div>
                    </div >

                    <div className="flex ">
                        <RecurringBooking />
                        <div div className="flex flex-row-reverse gap-2" >
                            <div className='mb-4 flex-1'>
                                <label className='block text-gray-700'>สิ้นสุดวันที่: </label>
                                <input
                                    type="date"
                                    name="endDate"
                                    value={form.endDate}
                                    onChange={onEndDateChangeHandler}
                                    className="w-full p-4 rounded-full border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                                />
                            </div>
                        </div >
                    </div>

                    <div className='flex flex-row-reverse gap-5 '>
                        <ResetButton />
                        <SubmitButton />
                    </div>
                </div>
            </div >
        </>

    )

}
export default ReservationForm
