import react from "react";

class Child extends react.Component{
    render(){
        // console.log(this.props);
        // console.log(react);
        
        return(
            <div style={{textAlign:"center"}}>
                <h2 style={{backgroundColor:"aqua"}}>{this.props.n}</h2>
                <h3 style={{backgroundColor:"orange"}}>{this.props.a} , {this.props.g}</h3>
            </div>
        )
    }
}

export {Child}