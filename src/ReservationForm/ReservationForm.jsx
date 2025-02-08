import React, { useEffect, useState } from "react";
// import TextStatusInput from './TextStatusInput';
import { useReversation } from "../contexts/useReversation";
import ReservationDetails from "./ReservationDetails";
import AdditionalDetails from "./AdditionalDetails";
import SubmitButton from "./Button/SubmitButton";
import ResetButton from "./Button/ResetButton";
import CalendarFrom from "./CalendarForm";
import TextStatusInput from "./TextStatusInput";
import DateTimeInput from "./DateTImeInput";
// import RecurringBooking from './RecurringBooking';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    status: "",
    floor: "",
    room: "",
    date: "",
    startTime: "",
    endTime: "",
    details: "",
  });
  const { form, setForm } = useReversation();
  // const handleSummit = () => {
  //     event.preventDefault();
  //     setForm(formData)
  //     console.log("✅ Form Submitted:", formData);
  // }
  // useEffect(() => {
  //     console.log("📌 From Data Update: ", formData);
  // }, [fromData]);

  // const onEndDateChangeHandler = (event) => {
  //     setForm((prev) => ({ ...prev, endDate: event.target.value }))
  // }
  const onDetailsChangeHandler = (event) => {
    setForm((prev) => ({ ...prev, details: event.target.value }));
  };

  return (
    <>
      <div className="form-page-container flex flex-col pt-20 justify-center bg-[url(Form-img/form-background.png)] items-center bg-center bg-cover bg-no-repeat p-5">
        {/* <div className="max-w-[1200px] w-full h-full mx-auto rounded-lg bg-white px-16 py-15 bg-center "> */}
        {/* <div className='bg-white p-6 rounded-lg shadow-lg w-[1127px] max-w-4xl'> */}
        <div className="form-box-container bg-white bg-opacity-90 backdrop-blur-md p-6 rounded-lg shadow-lg w-full max-w-4xl mx-auto mt-10 ">
          <div className="flex flex-col gap-2">
            <h1 className="from-header text-2xl py-3 px-5 bg-[#2165BE] text-white text-center font-bold uppercase">
              Room Booking
            </h1>
          </div>
          <TextStatusInput />

          <AdditionalDetails />

          {/* <div className="z - 5 bg-black opacity-40 w-[200px] h-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white ${modal ? ' block' : ' hidden'}">
                    <div>
                        สำเร็จ!
                    </div>
                </div> */}

          {/* <div className='flex ml-auto gap-10 justify-between'> */}
          <div className="form-time-detail grid grid-cols-2 mt-4 items-center justify-center pb-1">
            <div className="flex items-center justify-center">
              <CalendarFrom />
            </div>
            <div className=" flex flex-row">
              <div className="mb-4 flex-1 ">
                <DateTimeInput />
                <label htmlFor="details-input" className="block text-gray-700">
                  Details:
                </label>
                <textarea
                  name="details-input"
                  value={form.details}
                  onChange={onDetailsChangeHandler}
                  className="w-full p-19 border border-gray-300 rounded-lg shadow-md text-[#6B7280]"
                ></textarea>
              </div>
            </div>
          </div>

          <div className="flex flex-row-reverse gap-6 ">
            <SubmitButton />
            <ResetButton />
          </div>
        </div>
      </div>
    </>
  );
};
export default ReservationForm;
