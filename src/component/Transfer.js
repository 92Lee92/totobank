import axios from "axios";
import { Component } from "react";
import {Form, Label, Input,Button,Col, FormGroup, Modal, ModalHeader,ModalBody,ModalFooter} from 'reactstrap';

class Transfer extends Component{
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
            
            modal:false,
            msg_header:'',
            msg_body:''
        }
    }
    change = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({acc:{...this.state.acc, [name]:value}});
    }
    changeSpecial = (e)=> {
        this.setState({special:e.target.checked});
        if (!e.target.checked){
            this.setState({acc:{...this.state.acc,grade:''}});
        }
    }
    toggle = (e) => {
        this.setState({modal:!this.state.modal});
    }

    submit = (e) => {
        console.log(JSON.stringify(this.state.acc));
        axios.post('http://localhost:8090/makeaccount',null,
            {params:{id:this.state.acc.id}})
            .then((response)=> {
                console.log({msg_header:'계좌개설', msg_body:'계좌가 개설되었습니다.'});
                this.toggle();
            }).catch((error)=> {
                this.setState({msg_header:'오류', msg_body:'계좌개설에 실패했습니다.'});
                this.toggle();
            })
            ;
    }
    render() {
        return(
            <div style={this.divStyle}>
                <Form>
                    <FormGroup row>
                        <Label for = 'sid' sm={4}>보 내 는 분&nbsp;&nbsp;&nbsp;&nbsp; 계 좌 번 호</Label>
                       <Col>
                            <Input type ='text' name='sid' id='sid' value = {this.state.acc.sid} onChange={this.change}/>
                        </Col>
                        
                    </FormGroup>
                
                    <FormGroup row>
                        <Label for = 'password' sm={4}>비 밀 &nbsp; 번 호</Label>
                        <Col sm={3}>
                            <Input type ='text' name='password' id='password' value = {this.state.acc.password} onChange={this.change}/>
                        </Col>
                        <Col>
                            <Button sm={2} color='primary' style={{width:'100%'}}>비밀번호 확인</Button>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for = 'rid' sm={4}>받 으 시 는 분&nbsp; 계 좌 번 호</Label>
                        <Col>
                            <Input type ='text' name='rid' id='rid' value = {this.state.acc.rid} onChange={this.change}/>
                        </Col>
                        
                    </FormGroup>
                    <FormGroup row>
                        <Label for = 'money' sm={4}>보 내 실&nbsp; 금 액</Label>
                        <Col>
                            <Input type ='integer' name='money' id='money' value = {this.state.acc.money} onChange={this.change}/>
                        </Col>
                    </FormGroup>
    
                </Form>
            </div>
        );
    }
}

export default Transfer;