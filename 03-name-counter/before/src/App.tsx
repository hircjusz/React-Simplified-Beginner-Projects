import { FunctionComponent } from "./FunctionComponent"
import ClassComponent from "./ClassComponent"


function App() {

  return (
    <>
    <FunctionComponent/>
    <ClassComponent name="John" age={30}/>
    </>
  )
}

export default App
