import React from "react"

export class Child extends React.Component {
  constructor() {
    super()
    console.log("Render")
    this.state = {
      age: 0,
      name: "",
    }
  }

  componentDidMount() {
    console.log("Component Did Mount")
  } 

componentDidUpdate(prevProps, prevState) {
  if (prevState.name !== this.state.name) {
    clearTimeout(this.timeout)
    this.timeout = setTimeout(() => {
      console.log(`My name is ${this.state.name}`)
    }, 1000)
  }
}

componentWillUnmount() {
  clearTimeout(this.timeout)   // cleanup so it doesn't fire after unmount
}

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={e => this.setState({ name: e.target.value })}
        />
        <br />
        <br />
        <button
          onClick={() =>
            this.setState(state => {
              return { age: state.age - 1 }
            })
          }
        >
          -
        </button>
        {this.state.age}
        <button
          onClick={() =>
            this.setState(state => {
              return { age: state.age + 1 }
            })
          }
        >
          +
        </button>
        <br />
        <br />
        My name is {this.state.name} and I am {this.state.age} years old.
      </div>
    )
  }
}
