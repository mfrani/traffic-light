import React from 'react';


class Lights extends React.Component{
constructor(props){
    super(props);
    this.state={
        color: {
            red: {color:'red'},
            yellow: {color: 'black'},
            green: {color: 'black'},
            next: "yellow"
        }
    }

    this.switchLight=this.switchLight.bind(this);
}
componentDidMount() {
    console.log("light component mounted...")
    this.interval = setInterval(
      () => this.switchLight(),
      3000
    );
  }
  componentWillUnmount(){
      clearInterval(this.interval)
  }



switchLight(){

switch(this.state.next){
    case('red'):
     this.setState({
        color: {
            red: {color:'red'},
            yellow: {color: 'black'},
            green: {color: 'black'},
            next: "yellow"
        }
     });
     break;
     case('yellow'):
     this.setState({
        color: {
            red: {color:'black'},
            yellow: {color: 'yellow'},
            green: {color: 'black'},
            next: "green"
        }
    });
    break;
    case('green'):
    this.setState({
        color: {
            red: {color:'black'},
            yellow: {color: 'black'},
            green: {color: 'green'},
            next: "red"
        }
    });
    break;
    default:
    setTimeout(()=>{
        this.switchLight();
    },3000);

}
    
}




render(){
    

    return(
        <div>
            <p style={this.state.color.red}>RED LIGHT</p>
            <p p style={this.state.color.yellow}>YELLOW LIGHT</p>
            <p p style={this.state.color.green}>GREEN LIGHT</p>
        </div>
    )
}
}

export default Lights;