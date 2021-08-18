import React from "react";
import axios from "axios";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Products.css";

class Products extends React.Component{
    constructor(props){
        super(props);
        this.state={
            productId: this.props.match.params.productId,
            products:[],
            ready: false,
            images: [],
            curImg: 0,
        }
        this.handleChooseImage=this.handleChooseImage.bind(this);
    }
    async componentDidMount(){
        const product=await axios.get(`/api/products/${this.state.productId}`);
        const imageUrl=await axios.get(`/api/url/${this.state.productId}`);
        this.setState({
            products: product.data.map((item)=>{return item;}),
            ready: true,
            images: imageUrl.data.map((item)=>{
                return <Image src={`${item.url}`}  className="ImageSmall" fluid/>
            }),
            ready: true,
        });
    }
    handleChooseImage(i){
        this.setState({
            curImg: i
        });
    }
    render(){
    
        const obj=[];
        let i=0;
        while(i<this.state.images.length){
            let tempObj=[];
            for(let j=i;j<i+5;j++){
                if(j<this.state.images.length){
                    tempObj.push(<Col className="ProductSmallCol"><button className="ButtonImage" onClick={()=>this.handleChooseImage(j)}>{this.state.images[j]}</button></Col>);
                }
                else{
                    tempObj.push(<Col className="ProductSmallCol"></Col>);
                }
            }
            obj.push(<Row className="ProductSmall">{tempObj}</Row>);
            i+=5;
        }
        return (
            
            <div>
               {this.state.ready && 
               <div>
                <br/>
                <Row>
                    <Col lg={5}>{this.state.images[this.state.curImg]}</Col>
                    <Col lg={1}>{obj}</Col>
                    <Col lg={4} id="InfoProduct">
                        <h2 id="TitleProduct">{this.state.products[0].productname}</h2>
                        <br/>
                        <p>Số lượng còn lại: {this.state.products[0].quantity}</p>
                        <p>Giá tiền: {this.state.products[0].price}</p>
                        <p>Miêu tả: {this.state.products[0].description}</p>
                        <p>Độ tuổi: {this.state.products[0].agestart}-{this.state.products[0].ageend}</p>
                        <p>Khuyến mãi: {this.state.products[0].discount}</p>
                        <p>Giới tính: {this.state.products[0].gender}</p>
                        <br/>
                        <br/>
                    </Col>
                </Row>
                </div>
                }
            </div>
            
            
        );
    }
}

export default Products;