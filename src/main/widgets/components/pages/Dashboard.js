import React from 'react';
import {Message, Segment} from "semantic-ui-react";

const Dashboard = () => (
    <Segment>
        <h1>Your dashboard</h1>
        <Message
            icon='inbox'
            header='Load tests configurations'
            content='Using dashboard you can configure your tasks for loading and save it for future executions.'
        />
    </Segment>
);

export default Dashboard;