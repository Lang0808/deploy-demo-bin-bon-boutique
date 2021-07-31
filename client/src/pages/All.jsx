import React from 'react';
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./All.css";
import Filter from "./Filter";
import axios from "axios";
import ProductGrid from "./ProductGrid";
import Pagination from './Pagination';


class All extends React.Component{
    constructor(props){
        super(props);
        this.state={
            page: this.props.match.params.page,
            product: [],
            filterState:{}
        };
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    async componentDidMount(){
        const products=await axios.get(`/api/All/${this.state.page}`);
        this.setState({
            product: products.data
        });
    }
    async handleNewPage(page){
        this.setState({
            page: page
        })
        const products=await axios.get(`/api/All/${page}`);
        this.setState({
            product: products.data
        });
    }
    async handleSubmit(a){
        if(a.length==0) return;
        var agestart=0;
        var ageend=15;
        var discounting=false;
        var newClothes=false;
        var gender="";
        if(a[0]==="male"){
            gender="male";
            if(a.length>1){
                if(a[1]==="male-0-3"){
                    agestart=0;
                    ageend=3;
                }
                else if(a[1]==="male-3-6"){
                    agestart=3;
                    ageend=6;
                }
                else if(a[1]==="male-6-9"){
                    agestart=6;
                    ageend=9;
                }
                else if(a[1]==="new"){
                    newClothes=true;
                }
                else if(a[1]==="discounting"){
                    discounting=true;
                }
                if(a.length>2){
                    if(a[2]==="new"){
                        newClothes=true;
                    }
                    else if(a[2]==="discounting"){
                        discounting=true;
                    }
                }
                if(a.length>3){
                    if(a[3]==="discounting") discounting=true;
                }
            }
            
        }
        else if(a[0]=="female"){
            gender="female";
            if(a.length>1){
                if(a[1]==="female-0-3"){
                    agestart=0;
                    ageend=3;
                }
                else if(a[1]==="female-3-6"){
                    agestart=3;
                    ageend=6;
                }
                else if(a[1]==="female-6-9"){
                    agestart=6;
                    ageend=9;
                }
                else if(a[1]==="new"){
                    newClothes=true;
                }
                else if(a[1]==="discounting"){
                    discounting=true;
                }
                if(a.length>2){
                    if(a[2]==="new"){
                        newClothes=true;
                    }
                    else if(a[2]==="discounting"){
                        discounting=true;
                    }
                }
                if(a.length>3){
                    if(a[3]==="discounting") discounting=true;
                }
            }

        }
        else if(a[0]=="new"){
            gender="both";
            newClothes=true;
            if(a.length>1){
                if(a[1]==="discounting"){
                    discounting=true;
                }
            }
        }
        else if(a[0]==="discounting"){
            discounting=true;
        }
        const products=await axios.get(`/api/filter/${gender}/${agestart}/${ageend}/${newClothes}/${discounting}`);
        await this.setState({
            product: products.data
        });
    }
    render(){
        return (
            <div>
                <Container id="AllMainContainer" fluid>
                    <Container id="AllMainBanner" fluid>
                        <Row id="MainBanner" fluid><Image src="/Banner222.jpg" id="Banner"/>
                            <h3 id="Slogan">Xung dang voi so tien cua ban</h3>
                        </Row>  
                        <iframe id="Video" fluid src="https://www.youtube.com/embed/TJwzp9QHRZw" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allow="fullscreen;"></iframe>
                    </Container>
                    
                    <Container></Container>
                    <Row id="MainContainerProduct" fluid>
                        <Col id="FilterContainer"><Filter onSubmit={(a)=>this.handleSubmit(a)}/></Col>
                        <ProductGrid product={this.state.product}/>
                    </Row>
                    <Pagination page={this.state.page} />
                </Container>
            </div>
        );
    }
}

export default All;