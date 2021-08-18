import React from "react";
import "./All.css";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./All.css";
import axios from "axios";

class ProductGrid extends React.Component{
    render(){
        const obj=[];
        for(let i=0;i<this.props.product.length;i+=2){
            if(i+1<this.props.product.length){
                obj.push(<Row className="RowProduct">
                <Col className="ColProduct">
                    <a className="LinkToProduct" href={`/Product/${this.props.product[i].productid}`}>
                        <Image className="ImageProduct" src={`/${this.props.product[i].productid}.jpg`}/>
                        <h4 className="ProductName">{this.props.product[i].productname}</h4>
                        <h4 className="Price">{this.props.product[i].price}</h4>
                        </a>
                        </Col>
                       <Col className="ColProduct">
                    <a className="LinkToProduct" href={`/Product/${this.props.product[i+1].productid}`}>
                        <Image className="ImageProduct" src={`/${this.props.product[i+1].productid}.jpg`}/>
                        <h4 className="ProductName">{this.props.product[i+1].productname}</h4>
                        <h4 className="Price">{this.props.product[i+1].price}</h4>
                        </a>
                        </Col>
                        </Row>);
            }
            else{
                obj.push(<Row className="RowProduct">
                <Col className="ColProduct">
                    <a className="LinkToProduct" href={`/Product/${this.props.product[i].productid}`}>
                        <Image className="ImageProduct" src={`/${this.props.product[i].productid}.jpg`}/>
                        <h4 className="ProductName">{this.props.product[i].productname}</h4>
                        <h4 className="Price">{this.props.product[i].price}</h4>
                        </a>
                        </Col>
                        <Col className="ColProduct"></Col>
                        </Row>
                );
            }
        }
        return (
            <Col id="ProductContainer">
                <h3 className="NameList">Danh sách sản phẩm</h3>
                {obj}
            </Col>
        )
    }
}

export default ProductGrid;