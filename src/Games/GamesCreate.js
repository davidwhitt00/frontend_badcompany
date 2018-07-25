import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class GamesCreate extends Component {
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
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/api/games/', {
            method: 'POST',
            body: JSON.stringify({games: this.state }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
    .then((res) => res.json())
    .then((gamesData) => {
        this.props.updateGamesArray();
        this.setState({
            id: "",
            skill:'',
            skillPlayed:'',
            notes:'',
            outcome:'',
        })
    })    
}

    render() {
        return (
            <div id="newgame">
                <h3>Add New Game</h3>
                <hr />
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
                <Button className= "submit "type="submit"> Submit </Button>
                </Form>
            </div>
        )
    }
}

export default GamesCreate;