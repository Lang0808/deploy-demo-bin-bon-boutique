import React from "react";
import "./Filter.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

class Filter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isOpen: true,
            gender: '',
            Age: '',
            new: false,
            discounting: false
        };
        this.toggle=this.toggle.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }
    componentDidMount(){
        console.log(this.props.filterQuery);
        const temp=this.props.filterQuery.slice(1);
        console.log(temp);
        const B=temp.split("&");
        console.log(B);
        var gender='';
        var Age='';
        var newClothes=false;
        var discounting=false;
        for(let i=0;i<B.length;i++){
            const A=B[i].split("=");
            if(A[0]==='gender'){
                gender=A[1];
            }
            else if(A[0]==='age'){
                Age=A[1];
            }
            else if(A[0]==='newClothes'){
                newClothes=true;
            }
            else if(A[0]==='discounting'){
                discounting=true;
            }
        }
        this.setState({
            gender: gender,
            Age: Age,
            newClothes: newClothes,
            discounting: discounting,
        });
    }
    toggle(){
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }
    handleChange(event){
        var Regex=/\d-\d/;
        var tmp;
        if(event.target.value=="male"){
            this.setState({
                gender: this.state.gender==='male'?'':'male',
                Age: '',
            });
        }
        else if(event.target.value=="female"){
            this.setState({
                gender: this.state.gender==='female'?'':'female',
                Age:'',
            })
        }
        else if(event.target.name=="newClothes"){
            this.setState({
                new: !this.state.new,
            })
        }
        else if(event.target.name=="discounting"){
            this.setState({
                discounting: !this.state.discounting,
            })
        }
        else if((tmp=Regex.exec(event.target.value))){
            this.setState({
                Age: tmp.input,
            })
        }
    }
    render(){
        return (
            <div id="Filter">
            <Button onClick={this.toggle}>Loc</Button>
            {this.state.isOpen && <Container  id="Filter">
                            <h2>Bo loc: </h2>
                            <form onSubmit={this.handleSubmit} id="FilterForm">
                                <div>
                                    <input type="checkbox" id="Male" name="gender"value="male" onChange={this.handleChange} checked={this.state.gender==='male'}/>
                                    <label for="Male" className="Choice">Nam</label>
                                
                                    <div className="CheckBoxAge">
                                        <div className="AgeContainer">
                                            <div>
                                                <input type="checkbox" id="Male03" name="age" value="0-3" onChange={this.handleChange} checked={this.state.Age==='0-3'} />
                                                <label for="Male03">0 - 3</label>
                                    
                                            </div>
                                        <div>
                                            <input type="checkbox" id="Male03"  name="age" value="3-6" onChange={this.handleChange} checked={this.state.Age==='3-6'}/>
                                            <label for="Male03">3 - 6</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" id="Male03" name="age" value="6-9" onChange={this.handleChange} checked={this.state.Age==='6-9'}/>
                                            <label for="Male03">6 - 9</label>
                                        </div>
                                    </div>
                                </div>
                                
                                <div>
                                    <input type="checkbox" id="Female" name="gender" value="female" onChange={this.handleChange} checked={this.state.gender==='female'}/>
                                    <label for="Female" className="Choice">Nu</label>
                                 
                                    <div className="CheckBoxAge">
                                        <div className="AgeContainer">
                                            <div>
                                                <input type="checkbox" id="Female03" name="age" value="0-3" onChange={this.handleChange} checked={this.state.Age==='0-3'}/>
                                                <label for="Female03">0 - 3</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="Female03" name="age" value="3-6" onChange={this.handleChange} checked={this.state.Age==='3-6'}/>
                                                <label for="Female03">3 - 6</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="Female03" name="age" value="6-9" onChange={this.handleChange} checked={this.state.Age==='6-9'}/>
                                                <label for="Female03">6 - 9</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                    <input type="checkbox" id="NewFilter" name="newClothes" value="true" onChange={this.handleChange} checked={this.state.new}/>
                                    <label for="NewFilter">Hang moi nhap ve</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="DiscountingFilter" name="discounting" value="true" onChange={this.handleChange} checked={this.state.discounting}/>
                                    <label for="DiscountingFilter">Hang dang khuyen mai</label>
                                </div>
                                <div>
                                    <input type="submit" value="Loc" className="btn btn-primary"/>
                                </div>
                                
                            </form>
                        </Container>}
                        </div>
        );
    }
}

export default Filter;