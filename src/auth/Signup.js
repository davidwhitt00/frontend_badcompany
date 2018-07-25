import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            err: "",
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit = (event) => {
        if (this.state.username === "") {
            this.setState({ err: "Please enter Username" })
        } else {
            fetch("http://localhost:3000/api/user", {
                method: 'POST',
                body: JSON.stringify({ user: this.state }),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            })
                .then(
                    (response) => {
                        if (response.ok) {
                            return response.json();
                        } else {
                            throw new Error('Username Error');
                        }
                    })
                .then((data) => {
                    this.props.setToken(data.sessionToken, data.user.id)
                })
                .catch(err=>this.setState({ err: "Username already in use" }))
                
        }
        event.preventDefault()
    }

    render() {
        return (
            <div id="signup">
                <h1>Sign Up</h1>
                <h6>New Member Sign up</h6>
                <Form onSubmit={this.handleSubmit} >
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input id="username" type="text" name="username" placeholder="enter username" onChange={this.handleChange} />
                        <p> {this.state.err}</p>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input id="su_password" type="password" name="password" placeholder="enter password" onChange={this.handleChange} />
                    </FormGroup>
                    <Button className="signSB" type="submit"> Submit </Button>
                </Form>
            </div>

        )
    }
}

export default Signup;