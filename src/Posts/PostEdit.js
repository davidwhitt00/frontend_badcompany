import React from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody }
from 'reactstrap';

class PostEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            post: '',
        };
    }

    componentWillMount() {
        this.setState({
            id: this.props.post.id,
            post: this.props.post.post
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.update(event, this.state)
    }

    render() {
        return (
            <div id="edit">
                <Modal isOpen={true} >
                    <ModalHeader >Anoucement to the team</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit} >
                            <FormGroup>
                                <Label for="post">Anoucement</Label>
                                <Input id="post" type="text" name="post" value=
                                {this.state.post} placeholder="enter result"
                                onChange={this.handleChange} />
                            </FormGroup>
                            <Button type="submit" color="primary"> Submit </Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }

}

export default PostEdit;