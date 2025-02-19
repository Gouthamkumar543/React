import React from "react";

class Count extends React.Component {
    constructor() {
        super()
        this.state = { 
            count: 0,
            number: 10
        }
        this.increase = this.high.bind(this)
        this.decrease = this.down.bind(this)
    }

    dec = () => {
        this.setState({ count: this.state.count-1 })
    }

    inc = () => {
        this.setState({ count: this.state.count+1 })
    }

    high(){
        this.setState({number:this.state.number+10})
    }

    down(){
        this.setState({number:this.state.number-1})
    }

    componentDidUpdate(){
        console.log("Count updated");
    }

    render() {
        return (
            <div>
                <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
                    <button onClick={() => { this.setState({ count: this.state.count - 2 }) }} disabled={this.state.count === 0}> - </button>
                    <button onClick={this.dec}> - </button>
                    {this.state.count}
                    <button onClick={this.inc}> + </button>
                    <button onClick={() => { this.setState({ count: this.state.count + 2 }) }}> + </button>
                </div>
                <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
                    <button onClick={this.down.bind(this)}> - </button>
                    <button onClick={this.decrease}> - </button>
                    {this.state.number}
                    <button onClick={this.increase}> + </button>
                    <button onClick={this.high.bind(this)}> + </button>
                </div>
            </div>
        )
    }
}

export { Count }