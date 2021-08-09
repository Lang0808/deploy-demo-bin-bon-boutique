import React from 'react';
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./All.css";
import Filter from "./Filter";
import axios from "axios";
import ProductGrid from "./ProductGrid";

class All extends React.Component{
    constructor(props){
        super(props);
        this.state={
            page: this.props.match.params.page,
            product: [],
            loading:false,
            prevY:0,
            lastId: 0,
        };
    } 


    async componentDidMount(){
        this.handleLocationSearch();
        var options={
            root: null,
            rootMargin: "0px",
            threshold: 1.0,
        };
        this.observer=new IntersectionObserver(
            this.handleObserver.bind(this),
            options
        );
        this.observer.observe(this.loadingRef);
    }

    handleObserver(entities, observer){
        const y = entities[0].boundingClientRect.y;
        if (this.state.prevY > y) {
            this.handleLocationSearch();
        }
        this.setState({ prevY: y });
    }

    async handleLocationSearch(){
        const A=this.props.location.search.slice(1);
        const B=A.split('&');
        this.setState({loading: true});
        axios.post(`/api/filter/HandleLocationSearch/${this.state.lastId}`, {B}).then(res=>{
            var maxId=this.state.lastId;
            for(let i=0;i<res.data.length;i++){
                if(maxId<res.data[i].productid){
                    maxId=res.data[i].productid;
                }
            }
            this.setState({
                product:[...this.state.product, ...res.data],
                lastId: maxId
            });
            this.setState({loading: false});
        });
    }
    render(){
        const loadingCSS = {
            height: "100px",
            margin: "30px",
            color: "red",
            fontWeight: "bold",
            textAlign: "center"
        };
        const loadingTextCSS = { display: this.state.loading ? "block" : "none" };
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
                    <div ref={loadingRef => (this.loadingRef = loadingRef)} style={loadingCSS}>
                        <span style={loadingTextCSS}>Loading...</span>
                    </div>
                </Container>
            </div>
        );
    }
}

export default All;