import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Edit extends Component{

    constructor(props) {
        super(props);
        this.state = {
            contact: {}
        };
    }

    componentDidMount() {
        axios.get('/contacts/'+this.props.match.params.id)
        .then(res=>{
            this.setState({contact:res.data});
            console.log(this.state.contact);
        });
    }

    //will continue

}