import React from "react";
import Image from "react-bootstrap/Image";
import "./MainImage.css";

class MainImage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            pics:[],
            cur: 0, 
            class: 'shown',
        };
        this.changeImage=this.changeImage.bind(this);
    }
    componentDidMount(){
        for(let i=0;i<3;i++){
            this.state.pics.push(<Image className={`MainImage ${this.state.class}`} src={`${this.props.pics[i]}.jpg`}/>);
        }
        this.changeImage();
    }
    changeImage(){
        this.setState({cur: (this.state.cur+1)%3});
        setTimeout(this.changeImage, 5000);
    }
    render(){
        return (
            <div>{this.state.pics[this.state.cur]}</div>
        );
    }
}

export default MainImage;