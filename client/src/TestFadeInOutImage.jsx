import React from "react";
import Image from "react-bootstrap/Image";
import "./TestFadeInOutImage.css";

class TestFadeInOutImage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            cur: 0,
            lop: 'shown',
        };
        this.fadeOut=this.fadeOut.bind(this);
    }
    componentDidMount(){
        this.intervalId=setInterval(this.fadeOut, 5000);
    }
    fadeOut(){
        this.setState({
            lop: 'hidden',
        });
    }
    fadeIn(){
        this.setState({
            lop: 'shown',
        });
    }
    changeImage(){
        this.setState({
            cur: (this.state.cur+1)%4,
        });
    }
    handleTransitionEnd(){
        console.log(this.state.lop);
        if(this.state.lop=='hidden'){
            this.changeImage();
            this.fadeIn();
        }
    }
    render(){
        return (
            <div>
                <Image className={this.state.lop} onTransitionEnd={()=>this.handleTransitionEnd()} src={`${this.state.cur+1}.jpg`}/>
            </div>
        )
    }
}

export default TestFadeInOutImage;