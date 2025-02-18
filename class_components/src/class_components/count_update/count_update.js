import React from "react";

class Count extends React.Component{
    constructor(){
        super()
        this.state={count:0}
    }

    dec = ()=>{
        this.setState({count:this.state.count-1})
    }

    inc = ()=>{
        this.setState({count:this.state.count+1})
    }

    render(){
        return(
            <div style={{display:"flex", gap:"10px", justifyContent:"center"}}>
                <button onClick={()=>{this.setState({count:this.state.count-2})}} disabled={this.state.count === 0}> - </button>
                <button onClick={this.dec}> - </button>
                {this.state.count}
                <button onClick={this.inc}> + </button>
                <button onClick={()=>{this.setState({count:this.state.count+2})}}> + </button>
            </div>
        )
    }
}

export {Count}