import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class PostCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id:'',
            post:'',

        };
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handlePost = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/api/post/', {
            method: 'POST',
            body: JSON.stringify({post: this.state }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
    .then((res) => res.json())
    .then((postData) => {
        this.props.updatePostsArray();
        this.setState({
            id: "",
            post:'',
        })
    })    
}

    render() {
        return (
            <div id="share">
                <h3>Share with the team </h3>
                <hr />
                <Form onSubmit={this.handlePost} >
                    <FormGroup>
                        <Label for = "result">Post </Label>
                        <Input id="result" type="text" name="post" value=
                        {this.state.post} placeholders="enter result" onChange=
                        {this.handleChange} />
                    </FormGroup>
                <Button className="submit" type="submit"> Submit </Button>
                </Form>
            </div>
        )
    }
}

export default PostCreate;