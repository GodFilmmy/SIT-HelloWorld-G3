import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext({
    name: "",
    status: "",
    date: "",
    startTime: "",
    endTime: "",
    details: "",
    floor: "",
    room: "",
    endDate: ""
})

export const useReversation = () => {
    return useContext(Context)
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
        endDate: ""
    })
    const [value, setValue] = useState(1)

    // useEffect(() => {
    //     console.log(form)
    // }, [form])

    return <Context.Provider value={{ form, setForm, value, setValue }} >{children}</Context.Provider>
}