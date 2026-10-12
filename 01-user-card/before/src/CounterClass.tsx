import React from "react"

type CounterClassState = {
    counter: number
}

export class CounterClass extends React.Component<object, CounterClassState> {
    state: CounterClassState = {
        counter: 0
    }

    handleClick = () => {
        this.setState(currentState => ({
            counter: currentState.counter + 1
        }))
    }

    render() {
        return (
            <div onClick={this.handleClick}>{this.state.counter}</div>
        )
    }
}