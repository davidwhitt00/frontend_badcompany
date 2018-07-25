import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class Members extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            err:"",
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit = (event) => {
        fetch("http://localhost:3000/api/members", {
            method: 'POST',
            body: JSON.stringify({user:this.state}),
            headers: new Headers({
                'Content-Type': "application/json"
            })
        }).then(
            (response) =>{
                if (response.ok) {
                    return response.json();
                } else{
                    throw new Error("Username or Password is incorrect")
                }
            }) 
    .then((data) => {
        this.props.setToken(data.sessionToken, data.user.id)
    })
    .catch(err=>this.setState({ err: "Username or Password is incorrect"}))

    event.preventDefault()
    }

    render() {
        return (
            <div id="members">
                <h1>Login</h1>
                <h6>Member Signin</h6>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for ="username">Username</Label>
                        <Input id="li_username" type="text" name="username" placeholder="enter username" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input id="li_password" type="password" name="password" placeholder="enter password" onChange={this.handleChange} />
                        <p>{this.state.err}</p>
                    </FormGroup>
                    <Button className="memberSB" type="submit">Submit </Button>
                </Form>
            </div>
        )
    }
}
export default Members;