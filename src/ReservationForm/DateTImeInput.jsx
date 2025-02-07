import { useEffect, useState } from "react"
import { useReversation } from "../contexts/useReversation"

const DateTimeInput = ({ onChange }) => {
    const [] = useState({date: "", startTime: "", endTime: "" })
    const { setForm, form } = useReversation()

    const onStartTimeChangeHander = (event) => {
        setForm((prev) => ({ ...prev, startTime: event.target.value }))
    }

    const onEndTimeChangeHander = (event) => {
        setForm((prev) => ({...prev, endTime: event.target.value }))
    }

    // useEffect(() => {
    //     onChange({ formData })
    // }, [fromData])

    return (
        <div className="flex flex-row gap-2 items-center">
            <div className="mb-4 flex-1">
                <label htmlFor="input-start-time" className="block text-gray-700">
                    Start Time:
                </label>
                <input 
                type="time"
                name="input-start-time"
                value={form.startTime}
                onChange={onStartTimeChangeHander}
                className="w-full p-4 rounded-md border border-gray-300 focus:shadow-md outline-none focus:ring-2 focus:ring-gray-300 font-medium text-base"
                 />
            </div>
            <div className="mb-4 flex-1">
                <span htmlFor="input-end-time" className="block text-gray-700">
                    End Time:
                </span>
                <input 
                type="time"
                name="input-end-time" 
                value={form.endTime}
                onChange={onEndTimeChangeHander}
                className="w-full p-4 rounded-md border border-gray-300 focus:shadow-md outline-none focus:ring-2 focus:ring-gray-300 font-medium text-base"
                />
            </div>
        </div>
    )
}
export default DateTimeInput