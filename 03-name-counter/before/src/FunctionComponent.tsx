
import { useState } from 'react'

export function FunctionComponent() {

    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
  return (
      <div>
          <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
          />

          <br />
          <button onClick={() => setAge(age + 1)}>+
          </button>

          <button onClick={() => setAge(age - 1)}>-</button>

          <br />
          My name is {name} and I am {age} years old.
      </div>
  )
}