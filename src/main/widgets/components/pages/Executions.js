import React from 'react';
import {Segment, List, Grid, Button, Popup} from "semantic-ui-react";
import {Form} from "semantic-ui-react/dist/commonjs/collections/Form/Form";

const Executions = () => (
    <Segment>
        <h1>History of executions</h1>


        <Segment>
            <Grid columns={2} relaxed={'very'}>
                <Grid.Column width={6}>
                    <div>
                        <Grid columns={2}>
                            <Grid.Column>
                                <h2>Executions</h2>
                            </Grid.Column>
                            <Grid.Column textAlign={'right'}>
                                <Button color={'green'} icon={'play'} content={'Relaunch'} labelPosition={'right'}/>
                            </Grid.Column>
                        </Grid>
                    </div>
                    <br/>
                    {/* TEMP BR ^*/}
                    <div>
                        <List divided relaxed>
                            <List.Item>
                                <List.Icon name='sticky note outline' size='large' verticalAlign='middle'/>
                                <List.Content>
                                    <List.Header as='a'>Execution 3</List.Header>
                                    <List.Description as='a'>May, 10 | 16:45:52 - 15:00:53</List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name='sticky note outline' size='large' verticalAlign='middle'/>
                                <List.Content>
                                    <List.Header as='a'>Execution 3</List.Header>
                                    <List.Description as='a'>May, 10 | 16:45:52 - 15:00:53</List.Description>
                                </List.Content>
                            </List.Item>
                        </List>
                    </div>
                </Grid.Column>
                <Grid.Column width={10}>
                    <Segment stacked>

                    </Segment>
                </Grid.Column>
            </Grid>

        </Segment>

    </Segment>
);

export default Executions;