import { createContext } from "react"
import { useCountReducer } from "./reducerHooks"

const CountContext = createContext()

const CountContextProvider = ({ children }) => {
    const { count, countDispatch } = useCountReducer()

    return (
        <CountContext.Provider value={{ count, countDispatch }}>
            {children}
        </CountContext.Provider>
    )
}

export { CountContextProvider, CountContext }
