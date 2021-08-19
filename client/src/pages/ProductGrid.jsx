import React from "react";
import "./All.css";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import "./All.css";
import "./ProductGrid.css";

class ProductGrid extends React.Component{
    render(){
        const listItem=this.props.product.map((item)=>{
            return (
            <li key={item.productid} className="grid">
                <a className="LinkToProduct" href={`/Product/${item.productid}`}>
                    <Image className="ImageProduct" src={`/${item.productid}.jpg`}/>
                    <h4 className="ProductName">{item.productname}</h4>
                    <h4 className="Price">{item.price}</h4>
                </a>
            </li>
            )
        });
        return (
            <Col id="ProductContainer">
                <h3 className="NameList">Danh sách sản phẩm</h3>
                <div className="wrapper">
                    <ul className="GridContainer">
                        {listItem}
                    </ul>
                </div>
                
            </Col>
        )
    }
}

export default ProductGrid;