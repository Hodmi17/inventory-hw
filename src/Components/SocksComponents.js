import React, {Component} from 'react';
class SocksComponents extends Component{
    constructor(props){
        super(props);
        this.state = {
            count:30
        }
        this.addSomething = this.addSomething.bind(this);
        this.subSomething = this.subSomething.bind(this);
        this.Reset=this.Reset.bind(this);
        
    }
    addSomething(){
        console.log("plus", this.state.count);
        this.setState({
            count: this.state.count + 1 

        })
    }

    increment(){
            this.setState({ counts : this.state.count + 1});
    }
    subSomething(){
        this.setState({
            count: this.state.count - 1 
           
        
        })
        console.log("This.state;", this.state.count);
    }

    Reset(){
        this.setState({
            count: 0
        }
        )}
        
        componentDidMount(){
            console.log("components mount",this.addSomething,this.subSomething);
        }
        componentDidUpdate(){
            console.log("components update",this.addSomething,this.subSomething);
        }
render() {
    console.log("Rendiring:",this)
 
    return(
        <div>
            <p>ITEM NAME: {this.props.item}</p>
            <p>COUNT: {this.state.count}</p>
            <button onClick={this.addSomething}>+</button>
            <button onClick={this.subSomething}>-</button>
            <button onClick={this.Reset}>Reset</button>
        </div>
    )
}
}   




export default SocksComponents;