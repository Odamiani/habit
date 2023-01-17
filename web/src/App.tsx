import { Habit } from "./component/Habit"

import "./styles/global.css"

function App() {
  return (
    <div>
      <Habit completed={3} />
      <Habit completed={6}/>
      <Habit completed={9}/>
      <Habit completed={12}/>
      <Habit completed={15}/>
    </div>
  )
}

export default App
