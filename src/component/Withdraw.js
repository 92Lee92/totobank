import axios from "axios";
import { Component } from "react";
import {Form, Label, Input,Button,Col, FormGroup,} from 'reactstrap';

class Withdraw extends Component{
    constructor(props) {
        super(props);
        this.divStyle = {
            width:'480px', height: '330px', textAlign:'left',
            margin:'100px auto', border:'2px solid gray',
            padding:'30px', borderRadius:'20px'
        };
        this.state = {
            acc:{
                id:'',
                name:'',
                password:'',
                grade:''
            },
            special:false,
            
           
        }
    }
    render(){
        return(
           <Form>
            <FormGroup row>
                        <Label for ='name' sm={4}>이 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;름</Label>
                        <Col sm={8}>
                            <Input type='text' name='name' id='name'  value = {this.state.acc.name} onChange={this.change}/>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for ='password' sm={4}>계 좌 &nbsp; 번 호</Label>
                        <Col sm={8}>
                            <Input type='password' name='password' id='password' value={this.state.acc.password} onChange={this.change} />
                        </Col>
                    </FormGroup>
           </Form>
        )
    }
}

export default Withdraw;