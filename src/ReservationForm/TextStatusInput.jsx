import { useEffect, useState } from "react"
import { useReversation } from "../contexts/useReversation"

const TextStatusInput = ({ }) => {
    const [] = useState({ name: "", status: "" })
    const { setForm, form } = useReversation()
    const onNameChangeHandler = (event) => {
        setForm((prev) => ({ ...prev, name: event.target.value }))
    }
    const onStatusChangeHandler = (event) => {
        setForm((prev) => ({ ...prev, status: event.target.value }))
    }

    // useEffect(() => {
    //     onChange({ formData })
    // }, [formData])

    return (
        
        <div className="flex flex-row gap-2 pt-3">
            <div className="mb-4 flex-1">
                <label htmlFor="name-input" className='block text-gray-700 '>
                    Name:
                </label>
                <input
                    type="text"
                    name='name-input'
                    value={form.name}
                    onChange={onNameChangeHandler}
                    placeholder="Enter your name"
                    className="w-full p-4 rounded-md border border-gray-300 focus:shadow-md outline-none focus:ring-2 focus:ring-gray-300 font-medium text-base text-[#6B7280]"
                />
            </div>

            <div className="mb-4 flex-1">
                <label htmlFor='input-status' className="block text-gray-700">
                    Status:
                </label>
                <select
                    name="status"
                    value={form.status}
                    onChange={onStatusChangeHandler}
                    className="w-full p-4 rounded-md border border-gray-300 focus:shadow-md outline-none focus:ring-2 focus:ring-gray-300 font-medium text-base text-[#6B7280]"
                >
                    <option value="" className="font-semiblod text-gray-500">Please Select</option>
                    <option value="Student">Students</option>
                    <option value="Staff">Staff</option>
                    <option value="Lecturer">Lecturer</option>
                </select>

            </div>
        </div>
    );
};

export default TextStatusInput;