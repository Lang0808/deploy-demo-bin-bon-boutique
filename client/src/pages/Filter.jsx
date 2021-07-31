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
            male_0_3: false,
            male_3_6: false,
            male_6_9: false,
            female: false,
            female_0_3: false,
            female_3_6: false,
            female_6_9: false,
            new: false,
            discounting: false
        };
        this.toggle=this.toggle.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    toggle(){
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }
    handleChange(event){
        if(event.target.value=="male"){
            this.setState({
                male: !this.state.male,
                female: false,
                female_0_3: false,
                female_3_6: false,
                female_6_9: false,
            });
        }
        else if(event.target.value=="female"){
            this.setState({
                female: !this.state.female,
                male: false,
                male_0_3: false,
                male_3_6: false,
                male_6_9: false,
            });
        }
        else if(event.target.value=="male 0-3"){
            this.setState({
                male_0_3: !this.state.male_0_3,
                male_3_6: false,
                male_6_9: false,
            })
        }
        else if(event.target.value=="male 3-6"){
            this.setState({
                male_3_6: !this.state.male_3_6,
                male_0_3: false,
                male_6_9: false,
            })
        }
        else if(event.target.value=="male 6-9"){
            this.setState({
                male_6_9: !this.state.male_6_9,
                male_3_6: false,
                male_0_3: false,
            })
        }
        else if(event.target.value=="female 0-3"){
            this.setState({
                female_0_3: !this.state.female_0_3,
                female_3_6: false,
                female_6_9: false,
            })
        }
        else if(event.target.value=="female 3-6"){
            this.setState({
                female_3_6: !this.state.female_3_6,
                female_0_3: false,
                female_6_9: false,
            })
        }
        else if(event.target.value=="female 6-9"){
            this.setState({
                female_6_9: !this.state.female_6_9,
                female_3_6: false,
                female_0_3: false,
            })
        }
        else if(event.target.value=="new"){
            this.setState({
                new: !this.state.new,
            })
        }
        else if(event.target.value=="discounting"){
            this.setState({
                discounting: !this.state.discounting,
            })
        }
    }
    handleSubmit(){
        const a=[];
        if(this.state.male){
            a.push("male");
            if(this.state.male_0_3){
                a.push("male-0-3");
            }
            else if(this.state.male_3_6){
                a.push("male-3-6");
            }
            else if(this.state.male_6_9){
                a.push("male-6-9");
            }
        }
        else if(this.state.female){
            a.push("female");
            if(this.state.female_0_3){
                a.push("female-0-3");
            }
            else if(this.state.female_3_6){
                a.push("female-3-6");
            }
            else if(this.state.female_6_9){
                a.push("female-6-9");
            }
        }
        if(this.state.new==true){
            a.push("new");
        }
        if(this.state.discounting==true){
            a.push("discounting");
        }
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
                                    <input type="checkbox" id="Male" name="gender" value="male" onChange={this.handleChange} checked={this.state.male}/>
                                    <label for="Male" className="Choice">Nam</label>
                                
                                    <div className="CheckBoxAge">
                                        <div className="AgeContainer">
                                            <div>
                                                <input type="checkbox" id="Male03" name="Age-male" value="male 0-3" onChange={this.handleChange} checked={this.state.male_0_3}/>
                                                <label for="Male03">0 - 3</label>
                                    
                                            </div>
                                        <div>
                                            <input type="checkbox" id="Male03" name="Age-male" value="male 3-6" onChange={this.handleChange} checked={this.state.male_3_6}/>
                                            <label for="Male03">3 - 6</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" id="Male03" name="Age-male" value="male 6-9" onChange={this.handleChange} checked={this.state.male_6_9}/>
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
                                                <input type="checkbox" id="Female03" name="Age-female" value="female 0-3" onChange={this.handleChange} checked={this.state.female_0_3}/>
                                                <label for="Female03">0 - 3</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="Female03" name="Age-female" value="female 3-6" onChange={this.handleChange} checked={this.state.female_3_6}/>
                                                <label for="Female03">3 - 6</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="Female03" name="Age-female" value="female 6-9" onChange={this.handleChange} checked={this.state.female_6_9}/>
                                                <label for="Female03">6 - 9</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                    <input type="checkbox" id="NewFilter" name="new" value="new" onChange={this.handleChange} checked={this.state.new}/>
                                    <label for="NewFilter">Hang moi nhap ve</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="DiscountingFilter" name="discounting" value="discounting" onChange={this.handleChange} checked={this.state.discounting}/>
                                    <label for="DiscountingFilter">Hang dang khuyen mai</label>
                                </div>
                                <div>
                                    <Button onClick={()=>this.handleSubmit()}>Loc</Button>
                                </div>
                            </form>
                        </Container>}
                        </div>
        );
    }
}

export default Filter;