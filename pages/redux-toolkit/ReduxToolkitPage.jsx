import { Provider, useDispatch, useSelector } from "react-redux"

import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name: "count", // 얘는 역할이 뭐냐 // namespace prefix
    initialState: 0,
    // 얘네들은 caseReducers 라는 것들에 들어감
    reducers: {
        increament(state, _action) { return state + 1 },
        decreament(state, _action) { return state - 1 }

    }
})

const couterBigSlice = createSlice({
    name: "countBig",
    initialState: 100,
    reducers: {
        increament(state, _action) { return state + 10 },
        decreament(state, _action) { return state - 10 },
    }
})

const slowIncreamentThunk = createAsyncThunk(
    // id를 직접 부여
    "count/slowIncreament",

    (value, { dispatch }) => {
        console.log("---- slow clicked")
        setTimeout(
            () => {dispatch(counterSlice.actions.increament())},
            1000
        )
    }
)


const store = configureStore({
    reducer: {
        counterState: counterSlice.reducer,
        counterBigState: couterBigSlice.reducer
    }
})

const InsideContent = () => {
    const count = useSelector(state => state.counterState)
    const countBig = useSelector(state => state.counterBigState)

    const dispatch = useDispatch()
    return (
        <div>
            아무거나 야야야
            <div>count: {count}</div>
            <button onClick={() => dispatch(counterSlice.actions.increament())}>plus</button>
            <button onClick={() => dispatch(counterSlice.actions.decreament())}>minus</button>
            <button onClick={() => dispatch(slowIncreamentThunk())}>slow</button>
            <div>BIG COUNT: {countBig}</div>
            <button onClick={() => dispatch(couterBigSlice.actions.increament())}>plus</button>
            <button onClick={() => dispatch(couterBigSlice.actions.decreament())}>minus</button>
        </div>
    )
}

const ReduxToolkitPage = () => {
    return (
        <Provider store={store}>
            <InsideContent />
        </Provider>
    )
}

export default ReduxToolkitPage
