import { useState } from "react"
import { useReversation } from "../contexts/useReversation"

const RecurringBooking = () => {
    const [] = useState({ recurring: "", recurringType: "" })
    const { setForm, form } = useReversation()
    
    const onRecurringChangeHandler = (event) => {
        setForm((prev) => ({...prev, recurring: event.target.value}))
    }
    const onRecurringTypeChangeHandler = (event) => {
        setForm((prev) => ({ ...prev, recurringType: event.target.value}))
    }

    return (
        <div className="mb-4 flex-1">
            <label htmlFor="recurring-input" className="block text-gray-700 ">
                จองซ้ำ:
            </label>
            <div className="flex flex-col gap-2 ">
                <input 
                type="radio"
                name="recurringType"
                value="daily"
                
                 />

                 <input 
                type="radio"
                name="recurringType"
                value="weekly"
                 />
                
                  <input 
                type="radio"
                name="recurringType"
                value="monthly"
                 />
            </div>

        </div>
    )
}
export default RecurringBooking