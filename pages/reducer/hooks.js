import { createContext, useContext, useReducer } from "react"

const CountContext = createContext()
const useCountContext = () => {
    const context = useContext(CountContext)
    if (!context) { throw new Error("---- Missing context")}   
    return context
}

const countReducer = (state, action) => {
    switch (action.type) {
        case "UP":
            return state + action.delta
        case "DOWN":
            return state - action.delta
        default:
            return state
    }
}

const useCountReducer = () => {
    const [count, countDispatch] = useReducer(countReducer, 0)

    return { count, countDispatch}
}

export {useCountReducer, CountContext, useCountContext}