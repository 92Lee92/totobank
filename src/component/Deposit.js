import axios from "axios";
import { Component } from "react";
import {Form, Label, Input,Button,Col, FormGroup,} from 'reactstrap';

class Deposit extends Component{
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
}

export default Deposit;