import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import TextStatusInput from "../ReservationForm/TextStatusInput";
import DateTimeInput from "../ReservationForm/DateTImeInput";
import SubmitButton from "../ReservationForm/Button/SubmitButton";
import ResetButton from "../ReservationForm/Button/ResetButton";
import CalendarFrom from "../ReservationForm/CalendarForm";
import BookingFail from "../ReservationForm/BookingFail";
import BookingSuccess from "../ReservationForm/BookingSucces";

const ReservationForm = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const roomName = queryParams.get("room");
  const floor = queryParams.get("floor");

  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    status: "",
    floor: floor || "",
    room: roomName || "",
    date: "",
    startTime: "",
    endTime: "",
    details: "",
  });

  const onDetailsChangeHandler = (event) => {
    setFormData((prev) => ({ ...prev, details: event.target.value }));
  };

  return (
    <div className="form-page-container flex flex-col pt-20 justify-center bg-[url(Form-img/form-background.png)] items-center bg-center bg-cover bg-no-repeat p-5">
      <div className="form-box-container bg-white bg-opacity-90 backdrop-blur-md p-6 rounded-lg shadow-lg w-full max-w-4xl mx-auto mt-10 ">
        <h1 className="text-2xl py-3 px-5 bg-[#2165BE] text-white text-center font-bold uppercase">
          Room Booking
        </h1>

        <TextStatusInput />

        <div className="form-time-detail grid grid-cols-2 mt-4 items-center justify-center pb-1">
          <div className="flex items-center justify-center">
            <CalendarFrom />
          </div>
          <div className="flex flex-row">
            <div className="mb-4 flex-1">
              <DateTimeInput />
              <label htmlFor="details-input" className="block text-gray-700">
                Details:
              </label>
              <textarea
                name="details-input"
                value={formData.details}
                onChange={onDetailsChangeHandler}
                className="w-full p-19 border border-gray-300 rounded-lg shadow-md text-[#6B7280]"
              ></textarea>
            </div>
          </div>
        </div>

        <div className="flex flex-row-reverse gap-6">
          <SubmitButton setModal={setModal} />
          <ResetButton />
        </div>
      </div>
      
      <BookingSuccess modal={modal} setModal={setModal} />
      <BookingFail modal={modal} setModal={setModal} />
    </div>
  );
};

export default ReservationForm;
