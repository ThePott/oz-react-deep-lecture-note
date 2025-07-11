import { CountContext, useCountContext, useCountReducer } from './hooks'

const UpButton = () => {
  const { countDispatch } = useCountContext()

  const handleUp = () => {
    countDispatch({ type: "UP", delta: 1 })
  }
  console.log("---- up re-rendered")
  return (
    <button onClick={handleUp}>UP</button>
  )
}

const DownButton = () => {
  const { countDispatch } = useCountContext()

  console.log("---- down re-rendered")
  return (
    <button onClick={() => { countDispatch({ type: "DOWN", delta: 1 }) }}>DOWN</button>
  )
}

const SomeRandomBox = () => {
  console.log("---- some random box re-rendered")
  return (
    <div>This is isolated box</div>
  )
}

const ReducerPage = () => {
  const { count, countDispatch } = useCountReducer()
  console.log("----- page re-rendered")
  return (
    <CountContext.Provider value={{ countDispatch }}>
      <div>this is count: {count}</div>
      <UpButton />
      <DownButton />
      <SomeRandomBox />
    </CountContext.Provider>
  )
}

export default ReducerPage