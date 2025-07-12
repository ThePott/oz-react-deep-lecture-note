import { Provider, useDispatch, useSelector } from "react-redux"
import { combineReducers, legacy_createStore } from "redux"

const countReducer = (state = 0, action) => {
  switch (action.type) {
    case "increment":
      return state + 1
    case "decrement":
      return state - 1
    default:
      return state
  }
}
const bigCountReducer = (state = 100, action) => {
  switch (action.type) {
    case "bigIncrement":
      return state + 10
    case "bigDecrement":
      return state - 10
    default:
      return state
  }
}

const rootReducer = combineReducers({countReducer, bigCountReducer})

const store = legacy_createStore(rootReducer)

const InsideContent = () => {
  const count = useSelector(state => state.countReducer) // 아마 zustand의 useFruitStore((state) => state.increase) 이런 거 같기는 한데....
  const bigCount = useSelector(state => state.bigCountReducer) 
  const dispatch = useDispatch()

  return (
    <div>
      <div>count: {count}</div>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <div>big count: {bigCount}</div>
      <button onClick={() => dispatch({ type: "bigIncrement" })}>+</button>
      <button onClick={() => dispatch({ type: "bigDecrement" })}>-</button>
    </div>
  )
}

const ReduxLegacyPage = () => {
  return (
    <Provider store={store}>
      <InsideContent />
    </Provider>
  )
}

export default ReduxLegacyPage