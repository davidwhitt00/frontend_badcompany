import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import GamesCreate from './GamesCreate';
import GamesEdit from './GamesEdit';
import GamesTable from './GamesTable';

class GamesIndex extends Component {

    constructor(props) {
        super(props)
        this.state= {
            games:[],
            updatePressed: false,
            gamesToupdate: {}
        }
    }

    componentDidMount() {
        this.fetchGames()
    }

    fetchGames = () => {
        fetch("http://localhost:3000/api/games", {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
        .then((res) => res.json())
        .then((gamesData) => {
            return this.setState({ games: gamesData })
        })
    }

    gamesDelete = (event) => {
        fetch(`http://localhost:3000/api/games/${event.target.id}`, {
            method: 'DELETE',
            body: JSON.stringify({ games: { id: event.target.id }}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => this.fetchGames())
    }

    gamesUpdate = (event, games) => {
        fetch(`http://localhost:3000/api/games/${games.id}`, {
            method: 'PUT',
            body: JSON.stringify({ games: games }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => {
                this.setState({ updatePressed: false })
                this.fetchGames();
            })
    }
    
    setUpdatedGames = (event, games) => {
        this.setState({
            gamesToupdate: games,
            updatePressed: true
        })
    }

    render() {
        const games = this.state.games.length >= 1 ?
            <GamesTable games={this.state.games}
                delete={this.gamesDelete} update={this.setUpdatedGames} /> : <h3>Games Played</h3>
        return (
            <Container>
                <Row>
                    <Col md="3">
                        <GamesCreate token={this.props.token} updateGamesArray={this.fetchGames} />
                    </Col>
                    <Col md="9">
                        {games}
                    </Col>
                </Row>
                {}
                <Col md="12">
                    {
                        this.state.updatePressed ? <GamesEdit t={this.state.updatePressed} update={this.gamesUpdate} games={this.state.gamesToupdate} />
                            : <div></div>
                    }
                </Col>
            </Container>
        )
    }

}

export default GamesIndex;