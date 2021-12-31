import React, { Component } from 'react'
import '../States.css'
export default class StatesinClassComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"chekri",
             count:0
        }
    }
    
    render() {
        setTimeout(()=>{
            this.setState({
                name:"chekri s"
                
            })

        },2000)
        return (
            <div className="demo">
                <h1>Welcome{this.state.name}</h1>
                <h1>Count:{this.state.count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1
                    })
                }}>Increment Count</button>

<br/>
<button onClick={()=>{
                    this.setState({
                        count:this.state.count-1
                    })
                }}>decrement Count</button>
                <br/>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count=0
                    })
                }}>reset</button>

            </div>


        )
    }
}
