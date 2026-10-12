import { Counter } from "./Counter"
import { CounterClass } from "./CounterClass"
import "./user.css"
import user from "./user.json"
import UserCard from "./UserCard"
import { UserCardClass } from "./UserCardClass"

function App() {
  return (
    <div>
      <UserCard
        name={user.name}
        age={user.age}
        phoneNumber={user.phoneNumber}
        address={user.address}
      />
      <br />
      <UserCardClass
        name={user.name}
        age={user.age}
        phoneNumber={user.phoneNumber}
        address={user.address}
      />
      <br/>
      <Counter />
       <br/>
      <CounterClass />
    </div>
    
  )
}

export default App
