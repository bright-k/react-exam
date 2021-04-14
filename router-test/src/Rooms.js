import React from 'react';
import { Route, Link } from 'react-router-dom';

function Rooms({ match }) {
    return (
        <div>
            <h2>Rooms Page</h2>
            <Link to={`${match.url}/blueRoom`}>BlueRoom</Link>
            <br />
            <Link to={`${match.url}/greenRoom`}>GreenRoom</Link>
            <br />
            <Route path={`${match.url}/:roomId`} component={Room} />
            <Route exact path={match.url} render={() => <h3>Select Room</h3>} />
        </div>
    );
}
export default Rooms;

function Room({ match }) {
    return <h2>{`${match.params.roomId} selected room`}</h2>
}