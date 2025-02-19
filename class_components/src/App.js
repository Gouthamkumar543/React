import react from "react"
import { Child } from "./class_components/child/child"
import { Count } from "./class_components/count_update/count_update"
import { Login } from "./class_components/login/login"

class App extends react.Component{
  constructor(){
    super()
    this.state={
      color : "green"
    }
  }

  componentDidMount(){
    console.log("mount");
    alert("Welcome")
  }


  componentDidUpdate(){
    console.log("updated");
  }

  render(){
    const Name = "goutham"
    const number = 21

    const details = {
      Name : "gouthamkumar",
      Age : 22,
      Gender : "male"
    }

    const data = [{
      Name : "yathish",
      Age : 21,
      Gender : "male"
    },{
      Name : "Naveen",
      Age : 24,
      Gender : "male"
    },{
      Name : "Subhan",
      Age : 25,
      Gender : "male"
    },{
      Name : "Surya",
      Age : 29,
      Gender : "male"
    }]

    return(
      <div style={{backgroundColor:this.state.color}}>
        <h1>Welcome to React</h1>
        <button style={{margin:"10px"}} onClick={()=>{this.setState({color:this.state.color="red"})}}>red</button>
        <button style={{margin:"10px"}} onClick={()=>{this.setState({color:this.state.color="violet"})}}>violet</button>
        <button style={{margin:"10px"}} onClick={()=>{this.setState({color:this.state.color="lightblue"})}}>lightblue</button>
        <button style={{margin:"10px"}} onClick={()=>{this.setState({color:this.state.color="yellow"})}}>yellow</button>

        <Login />
        <Count />
        {Name}
        {number}
        <h2>{details.Name}</h2>
        <p>{details.Age}{details.Gender}</p>
        {
          data.map(x=>{
            return (
              <Child n={x.Name} a={x.Age} g={x.Gender} />
            )
          })
        }
      </div>
    )
  }
}

export default App