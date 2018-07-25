import React from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody }
from 'reactstrap';


class GamesEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id:'',
            skill:'',
            skillPlayed:'',
            notes:'',
            outcome:'',
        };
    }

    componentWillMount() {
        this.setState({
            id: this.props.games.id,
            skill:this.props.games.skill,
            skillPlayed:this.props.games.skillPlayed,
            notes:this.props.games.notes,
            outcome:this.props.games.outcome,
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
            <div id="newgame">
                <Modal isOpen={true} >
                    <ModalHeader >Games Played</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.handleSubmit} >
                    <FormGroup>
                        <Label for = "outcome">Outcome of match </Label>
                        <Input id="outcome" type="select" name="outcome" value=
                        {this.state.outcome} placeholders="Enter Outcome" onChange=
                        {this.handleChange}>
                            <option></option>
                            <option value="Win">Win</option>
                            <option value="Loss">Loss</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for = "skill">Your Skill Level </Label>
                        <Input id="skill" type="select" name="skill" value=
                        {this.state.skill} placeholders="Your Skill" onChange=
                        {this.handleChange}>
                            <option></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                    <Label for = "skillPlayed">Opponents Skill Level </Label>
                         <Input id="skillPlayed" type="select" name="skillPlayed" value=
                        {this.state.skillPlayed} placeholders="Opponent Skill" onChange=
                        {this.handleChange}>
                            <option></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                    <Label for = "notes">Notes </Label>
                        <Input id="notes" type="text" name="notes" value=
                        {this.state.notes} placeholders="Enter Notes " onChange=
                        {this.handleChange}/>
                    </FormGroup>
                <Button type="submit" color="primary"> Submit </Button>
                </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }

}

export default GamesEdit;