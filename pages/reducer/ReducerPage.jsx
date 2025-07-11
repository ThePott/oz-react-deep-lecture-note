import { CountContextProvider } from './context'
import { useCountContext } from './reducerHooks'

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

const Display = () => {
  const { count } = useCountContext()
  return (
    <div>{count}</div>
  )
}

const ReducerPage = () => {
  return (
    <CountContextProvider>
      <Display />
      <UpButton />
      <DownButton />
      <SomeRandomBox />
    </CountContextProvider>
  )
}

export default ReducerPage