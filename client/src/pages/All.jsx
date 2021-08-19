import React from 'react';
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./All.css";
import Filter from "./Filter";
import axios from "axios";
import ProductGrid from "./ProductGrid";
import Search from "./Search";

class All extends React.Component{
    constructor(props){
        super(props);
        this.state={
            page: this.props.match.params.page,
            product: [],
            loading:false,
            prevY:0,
            lastId: 0,
            query: '',
            searchParam:["productid", "productname", "gender", "description", "price"],
        };
    } 
    querySearchChange(queryValue){
        this.setState({
            query: queryValue,
        });
    }
    search(){
        var product =this.state.product;
        var searchParam=this.state.searchParam;
        return product.filter((item)=>{
            return searchParam.some((newItem)=>{
                return (
                    item[newItem]
                    .toString()
                    .toLowerCase()
                    .indexOf(this.state.query.toLowerCase())>-1
                );
            });
        });
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
        const product=this.search();
        return (
            <div>
                <Container id="AllMainContainer" fluid>
                    <Container id="AllMainBanner" fluid>
                        <Row id="MainBanner" fluid><Image src="/Banner222.jpg" id="Banner"/>
                            <h3 id="Slogan">Xứng đáng với số tiền bạn bỏ ra</h3>
                        </Row>  
                    </Container>
                    <br/>
                    <Row id="MainContainerProduct" fluid>
                        <Col id="FilterContainer">
                            <Filter filterQuery={this.props.location.search}/>
                            <br/>
                            <Search id="SearchBar" onChange={(e)=>this.querySearchChange(e.target.value)}/>
                        </Col>
                        <ProductGrid product={product}/>
                    </Row>
                    <div ref={loadingRef => (this.loadingRef = loadingRef)} style={loadingCSS}>
                        <span style={loadingTextCSS}>Đang tải...</span>
                    </div>
                </Container>
            </div>
        );
    }
}

export default All;