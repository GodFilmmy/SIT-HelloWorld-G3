import { createContext, useContext, useEffect, useState } from "react";

const FormContext = createContext({
    name: "",
    status: "",
    date: "",
    startTime: "",
    endTime: "",
    details: "",
    floor: "",
    room: "",
})

export const useReversation = () => {
    return useContext(FormContext)
}

export const ReversationProvider = ({ children }) => {
    const [form, setForm] = useState({
        name: "",
        status: "",
        date: "",
        startTime: "",
        endTime: "",
        details: "",
        floor: "",
        room: "",
    })

    // useEffect(() => {
    //     console.log(form)
    // }, [form])

    return <FormContext.Provider value={{ form, setForm }} >{children}</FormContext.Provider>
}