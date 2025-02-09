import React, { useEffect, useState } from "react";
// import TextStatusInput from './TextStatusInput';
import { useReversation } from "../contexts/useReversation";
import ReservationDetails from "../ReservationForm/ReservationDetails";
import AdditionalDetails from "../ReservationForm/AdditionalDetails";
import SubmitButton from "../ReservationForm/Button/SubmitButton";
import ResetButton from "../ReservationForm/Button/ResetButton";
import CalendarFrom from "../ReservationForm/CalendarForm";
import TextStatusInput from "../ReservationForm/TextStatusInput";
import DateTimeInput from "../ReservationForm/DateTImeInput";
import BookingSuccess from "../ReservationForm/BookingSucces";
import BookingFail from "../ReservationForm/BookingFail";
import { useLocation } from "react-router-dom";
// import RecurringBooking from './RecurringBooking';

const ReservationForm = () => {
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError]= useState(null);
  const { form, setForm } = useReversation();

  useEffect(() => {
    const fetchReservation = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://helloworld03.sit.kmutt.ac.th:3000/api/buildings/getFloor");
        if(!response.ok) {
          throw new Error("Failed to fetch reservations");
        }
        const data = await response.json();
        setForm(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReservation();
  }, [setForm]);


  const [formData, setFormData] = useState({
    name: "",
    status: "",
    floor: form.floor,
    room: form.room,
    date: "",
    startTime: "",
    endTime: "",
    details: "",
  });

  const onDetailsChangeHandler = (event) => {
    setForm((prev) => ({ ...prev, details: event.target.value }));
  };

  return (
    <>
      <div className="form-page-container flex flex-col pt-20 justify-center bg-[url(Form-img/form-background.png)] items-center bg-center bg-cover bg-no-repeat p-5">
        <div className="form-box-container bg-white bg-opacity-90 backdrop-blur-md p-6 rounded-lg shadow-lg w-full max-w-4xl mx-auto mt-10 ">
          <div className="flex flex-col gap-2">
            <h1 className="from-header text-2xl py-3 px-5 bg-[#2165BE] text-white text-center font-bold uppercase">
              Room Booking
            </h1>
          </div>
          <TextStatusInput />

          <AdditionalDetails room={roomParam}/>


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
            <SubmitButton setModal={setModal} />
            <ResetButton />
          </div>
        </div>
      </div>
      <BookingSuccess modal={modal} setModal={setModal} />
      <BookingFail modal={modal} setModal={setModal} />
    </>
  );
};
export default ReservationForm;