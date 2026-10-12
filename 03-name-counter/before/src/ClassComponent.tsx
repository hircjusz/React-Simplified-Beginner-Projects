import React from "react";

type State = {
    name: string;
    age: number;
};

export default class ClassComponent extends React.Component<Partial<State>, State> {

    constructor(props: Partial<State>) {
        super(props);
        this.state = {
            name: props.name ?? '',
            age: props.age ?? 0
        };
    }

  render() {
    return (
        <div>
          <input
              type="text"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
          />

          <br />
          <button onClick={() => this.setState({ age: this.state.age + 1 })}>+
          </button>

          <button onClick={() => this.setState({ age: this.state.age - 1 })}>-</button>

          <br />
          My name is {this.state.name} and I am {this.state.age} years old.
      </div>
    );
  }
}