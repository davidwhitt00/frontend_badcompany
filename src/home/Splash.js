import React, { Component } from 'react';
import Postindex from '../Posts/Postindex';
import Gameindex from '../Games/GamesIndex';

const Splash = (props) => {
    return (
        <div>
            <Postindex token={props.sessionToken} sessionUser={props.sessionUser}/>
            <Gameindex token={props.sessionToken} />
        </div>
    )
}

export default Splash;