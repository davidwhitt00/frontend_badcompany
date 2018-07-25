import React from 'react';
import { Table, Button } from 'reactstrap';

const GamesTable = (props) => {
    return (
        <div id="gamesplayed">
            <h3>Games Played</h3>
            <hr />
        <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Skill</th>
                        <th>Outcome</th>
                        <th>Opponent Skill</th>
                        <th>Notes</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {props.games.map((games, id) => {
                        return(
                            <tr key={id}>
                            <th scope="row">{games.id}</th>
                            <td>{games.skill}</td>
                            <td>{games.outcome}</td>
                            <td>{games.skillPlayed}</td>
                            <td>{games.notes}</td>
                            <td>
                                <Button className="gamesDB" id={games.id} onClick={props.delete}>Delete</Button>|
                                <Button className="gamesUB"id={games.id} onClick={e => props.update(e, games)} >Update</Button>
                            </td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default GamesTable;