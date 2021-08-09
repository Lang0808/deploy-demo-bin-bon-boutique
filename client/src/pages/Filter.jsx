import React from "react";
import "./Filter.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

class Filter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isOpen: true,
            male: false,
            AgeMale: '',
            female: false,
            AgeFemale: '',
            new: false,
            discounting: false
        };
        this.toggle=this.toggle.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    componentDidMount(){
        const male=localStorage.getItem("male", this.state.male);
        const female=localStorage.getItem("female", this.state.female);
        const AgeMale=localStorage.getItem("AgeMale", this.state.AgeMale);
        const AgeFemale=localStorage.getItem("AgeFemale", this.state.AgeFemale);
        const newClothes=localStorage.getItem("new", this.state.new);
        const discounting=localStorage.getItem("discounting", this.state.discounting);
        this.setState({
            male:male==='true',
            female: female==='true',
            AgeMale: AgeMale,
            AgeFemale: AgeFemale,
            new: newClothes==='true',
            discounting: discounting==='true'
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
                male: !this.state.male,
                female: false,
                AgeFemale:'',
            });
            console.log(this.state.male);
            if(this.state.male){
                this.setState({AgeMale: ''});
            }
        }
        else if(event.target.value=="female"){
            this.setState({
                female: !this.state.female,
                male: false,
                AgeMale: '',
            });
            if(this.state.female){
                this.setState({AgeFemale: ''});
            }
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
            if(this.state.male){
                if(tmp[0]===this.state.AgeMale) this.setState({AgeMale: ''});
                else this.setState({AgeMale: tmp[0]});
            }
            else if(this.state.female){
                if(tmp[0]===this.state.AgeFemale) this.setState({AgeFemale: ''});
                else this.setState({AgeFemale: tmp[0]});
            }
        }
    }
    handleSubmit(){
        const a=`${(this.state.male ? ('male '+this.state.AgeMale): (this.state.female ? ('female '+this.state.AgeFemale) : 'both'))} ${this.state.new ? 'New' : 'No'} ${this.state.discounting ? 'Discount': 'No'}`;
        localStorage.setItem("male", this.state.male);
        localStorage.setItem("female", this.state.female);
        localStorage.setItem("AgeMale", this.state.AgeMale);
        localStorage.setItem("AgeFemale", this.state.AgeFemale);
        localStorage.setItem("new", this.state.new);
        localStorage.setItem("discounting", this.state.discounting);
        this.props.onSubmit(a);
    }
    render(){
        return (
            <div id="Filter">
            <Button onClick={this.toggle}>Loc</Button>
            {this.state.isOpen && <Container  id="Filter">
                            <h2>Bo loc: </h2>
                            <form onSubmit={this.handleSubmit} id="FilterForm">
                                <div>
                                    <input type="checkbox" id="Male" name="gender"value="male" onChange={this.handleChange} checked={this.state.male}/>
                                    <label for="Male" className="Choice">Nam</label>
                                
                                    <div className="CheckBoxAge">
                                        <div className="AgeContainer">
                                            <div>
                                                <input type="checkbox" id="Male03" name="age" value="0-3" onChange={this.handleChange} checked={this.state.AgeMale==='0-3'} />
                                                <label for="Male03">0 - 3</label>
                                    
                                            </div>
                                        <div>
                                            <input type="checkbox" id="Male03"  name="age" value="3-6" onChange={this.handleChange} checked={this.state.AgeMale==='3-6'}/>
                                            <label for="Male03">3 - 6</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" id="Male03" name="age" value="6-9" onChange={this.handleChange} checked={this.state.AgeMale==='6-9'}/>
                                            <label for="Male03">6 - 9</label>
                                        </div>
                                    </div>
                                </div>
                                
                                <div>
                                    <input type="checkbox" id="Female" name="gender" value="female" onChange={this.handleChange} checked={this.state.female}/>
                                    <label for="Female" className="Choice">Nu</label>
                                 
                                    <div className="CheckBoxAge">
                                        <div className="AgeContainer">
                                            <div>
                                                <input type="checkbox" id="Female03" name="age" value="0-3" onChange={this.handleChange} checked={this.state.AgeFemale==='0-3'}/>
                                                <label for="Female03">0 - 3</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="Female03" name="age" value="3-6" onChange={this.handleChange} checked={this.state.AgeFemale==='3-6'}/>
                                                <label for="Female03">3 - 6</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="Female03" name="age" value="6-9" onChange={this.handleChange} checked={this.state.AgeFemale==='6-9'}/>
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