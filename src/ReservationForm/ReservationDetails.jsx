import { useState } from "react";
import { useReversation } from '../contexts/useReversation'
import TextStatusInput from "./TextStatusInput";
import DateTimeInput from "./DateTImeInput";

const ReservationDetails = () => {
    const { form, setForm } = useReversation()
    const onTextStatusChange = (data) => {
        console.log(data)
    }
    const onDateTimeChange = (data) => {
        console.log(data)
    }
    return (
        <div>
            <TextStatusInput onChange={onTextStatusChange}/>
            <DateTimeInput onChange={onDateTimeChange}/>
        </div>
    )
}

export default ReservationDetails