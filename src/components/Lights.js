import React from 'react';


class Lights extends React.Component{
constructor(props){
    super(props);
    this.state={
        color:'black'
    }
    this.toggleLight=this.toggleLight.bind(this);
}

toggleLight(){
    if (this.state.color=='black'){
        this.setState({
            color:'red'
        });
    }
    else{
        this.setState({
            color:'black'
        });
    }
    
}

componentDidMount() {
    console.log("light component mounted...")
    this.interval = setInterval(
      () => this.toggleLight(),
      3000
    );
  }
  componentWillUnmount(){
      clearInterval(this.interval)
  }


render(){
    const redLightStyle={
        color: this.state.color
    }

    return(
        <div>
            <p style={redLightStyle}>RED LIGHT</p>
            <p>YELLOW LIGHT</p>
            <p>GREEN LIGHT</p>
        </div>
    )
}
}

export default Lights;