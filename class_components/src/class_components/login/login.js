import React from "react";

class Login extends React.Component{
    constructor(){
        super()
        this.state = {
            Login : false
        }
    }

    loginShow = ()=>{
        this.setState({Login:!this.state.Login})
    }


    render(){
        return(
            <div>
                <button style={{margin:"10px"}} onClick={()=>{this.setState({Login:!this.state.Login})}}>Login_inline</button>
                <button style={{margin:"10px"}} onClick={this.loginShow}>Login</button>
                {this.state.Login && <div>
                    <input type="text" placeholder="name here"/><br/>
                    <input type="email" placeholder="email here"/><br/>
                    <input type="password" placeholder="password here"/><br/>
                    <input type="password" placeholder="password here"/><br/>
                </div>}
            </div>
        )
    }
}


export {Login}