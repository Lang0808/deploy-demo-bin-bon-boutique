import React from 'react';
import "./Home.css";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import MainImage from "./MainImage";
import axios from 'axios';


export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Banner:[],
            BannerReady: false,
            NewClothesDemo: [],
        }
    }
    async componentDidMount(){
        const Banner=await axios.get('/api/banner');
        this.setState({Banner: Banner.data.map((item)=>{return item.productid}), BannerReady: true});
    }
    render(){
        return (
           <Container id="HomeMainContainer" fluid>
            {this.state.BannerReady && <Row id="HomeMainTitleContainer" className="d-flex justify-content-center align-items-center">
                   <Col className="HomeMainImageContainer">
                       <MainImage pics={[this.state.Banner[0], this.state.Banner[1], this.state.Banner[2]]}/>
                   </Col>
                   <Col className="HomeMainImageContainer">
                       <MainImage pics={[this.state.Banner[3], this.state.Banner[4], this.state.Banner[5]]} />
                   </Col>
                   <Button href="/All/1" className="btn btn-danger" id="HomeButton">SHOPPING NOW !!!</Button>
               </Row>
               }
            <Row className="HomeHeadliner">
                <h2>Mua sắm theo danh mục</h2>
            </Row>
        

            <Row className="HomeBannerContainer">
                <Col className="HomeColBanner">
                <a href="/All/1" className="d-flex LinkBanner">
                <Image src="All.jpg" className="HomeBanner"/>
                <h3 className="HomeTextOnBanner"><span>Tất cả</span></h3>
                </a>
                
                </Col>
                <Col className="HomeColBanner">
                <a href="/All/1?discounting=true" className="d-flex LinkBanner">
                <Image src="Discounting.jpg" className="HomeBanner "/>
                <h3 className="HomeTextOnBanner"><span>Đang khuyến mãi</span></h3>
                </a>
                </Col>
            </Row>
            <Row className="HomeBannerContainer">
            <Col className="HomeColBanner">
                <a href="/All/1?gender=female" className="d-flex LinkBanner">
                <Image src="Female.jpg" className="HomeBanner"/>
                <h3 className="HomeTextOnBanner"><span>Đồ nữ</span></h3>
                </a>
                </Col>
                <Col className="HomeColBanner">
                <a href="/All/1?gender=male" className="d-flex LinkBanner">
                <Image src="Male.jpg" className="HomeBanner"/>
                <h3 className="HomeTextOnBanner"><span>Đồ nam</span></h3>
                </a>
                </Col>
            </Row>
            <Row className="HomeHeadliner">
                <h2>Thông tin liên lạc</h2>
                <p><span className="strongText">SDT: </span>Số điện thoại</p>
                <p><span className="strongText">Tên: </span>Tên</p>
                <p><span className="strongText">Lazada: </span>Lazada</p>
                <p><span className="strongText">Shoppee: </span>Shoppee</p>
            </Row>
           </Container>
           
        );
    }
}