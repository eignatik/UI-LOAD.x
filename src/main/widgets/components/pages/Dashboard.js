import React from 'react';
import {Button, Divider, Form, Grid, Icon, List, Message, Popup, Segment} from "semantic-ui-react";
import {TaskList} from "../TaskList";

const textAreaStyle = {
    resize: 'none'
};

const Dashboard = () => (
    <Segment>
        <h1>Your dashboard</h1>
        <Message
            icon='inbox'
            header='Load tests configurations'
            content='Using dashboard you can configure your tasks for loading and save it for future executions.'
        />

        <Segment>
            <Grid columns={2} relaxed={'very'}>
                <Grid.Column width={6}>
                    <div>
                        <Grid columns={2}>
                            <Grid.Column>
                                <h2>Tasks</h2>
                            </Grid.Column>
                            <Grid.Column textAlign={'right'}>
                                <Button animated='vertical'>
                                    <Button.Content hidden>New</Button.Content>
                                    <Button.Content visible>
                                        <Icon name='add'/>
                                    </Button.Content>
                                </Button>
                                <Button color='green' animated='vertical'>
                                    <Button.Content hidden>Launch</Button.Content>
                                    <Button.Content visible>
                                        <Icon name='play'/>
                                    </Button.Content>
                                </Button>
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
                                    <List.Header as='a'>Loading of the shop module</List.Header>
                                    <List.Description as='a'>May, 05 16:35 | 10 requests</List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name='sticky note outline' size='large' verticalAlign='middle'/>
                                <List.Content>
                                    <List.Header as='a'>Performance of the main page</List.Header>
                                    <List.Description as='a'>May, 04 12:35 | 8 requests</List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name='sticky note outline' size='large' verticalAlign='middle'/>
                                <List.Content>
                                    <List.Header as='a'>Loading details pages (about etc)</List.Header>
                                    <List.Description as='a'>May, 04 12:18 | 6 requests</List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name='sticky note outline' size='large' verticalAlign='middle'/>
                                <List.Content>
                                    <List.Header as='a'>Get delivery information</List.Header>
                                    <List.Description as='a'>May, 03 10:55 | 3 requests</List.Description>
                                </List.Content>
                            </List.Item>
                        </List>
                    </div>
                </Grid.Column>
                <Grid.Column width={10}>
                    <Segment stacked>
                        <div>
                            <Grid columns={2}>
                                <Grid.Column>
                                    <h4>Task viewer</h4>
                                </Grid.Column>
                                <Grid.Column textAlign={'right'}>
                                    <Button color={'teal'} icon={'edit'} content={'Edit'} labelPosition={'right'}/>
                                    <Button color={'red'} icon={'trash'} content={'Delete'} labelPosition={'right'}/>
                                </Grid.Column>
                            </Grid>

                            <br/>
                            {/* TEMP BR ^*/}

                            <div>
                                <Form>
                                    <Form.Group>
                                        <Form.Field readOnly width={16}>
                                            <Popup
                                                trigger={<textarea placeholder='Enter task name' rows={2}
                                                                   style={textAreaStyle}
                                                                   value={'Loading of the shop module'}/>}
                                                content='The task name that will help you to distinguish it between lots of other tasks.'
                                                position='bottom right'/>
                                        </Form.Field>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Field readOnly width={6}>
                                            <label>Base url</label>
                                            <Popup
                                                trigger={<input placeholder='http://example.com'
                                                                value={'https://test.com/'}/>}
                                                content='Define base url of your application. It will be used for constructing absolute paths from relative endpoints in requests.'
                                                position='bottom right'/>
                                        </Form.Field>
                                        <Form.Field readOnly width={2}>
                                            <label>Port</label>
                                            <Popup
                                                trigger={<input placeholder='E.g. 8080' value={'8080'}/>}
                                                content='Define the default port of your application'
                                                position='bottom right'/>
                                        </Form.Field>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Field readOnly width={6}>
                                            <label>Validation url</label>
                                            <Popup
                                                trigger={<input placeholder='E.g /loadxValidate'
                                                                value='/loadx/validate'/>}
                                                content='Please, specify the url to be used as validation url to check your ownership for the web server that will be tested. We don`t want you to perform DdOS attacks.'
                                                position='bottom right'/>
                                        </Form.Field>
                                        <Form.Field readOnly width={6}>
                                            <label>Loading time</label>
                                            <Popup
                                                trigger={<input placeholder='E.g 2h 42m' value='2h'/>}
                                                content='Please, enter loading time in format hh mm. E.g. 2h 15m, 30m, 1h etc'
                                                position='bottom right'/>
                                        </Form.Field>
                                        <Form.Field readOnly width={3}>
                                            <label>Parallel threshold</label>
                                            <Popup
                                                trigger={<input placeholder='E.g. 5' value='5'/>}
                                                content='Please, enter the number of requests to be performed in parallel.'
                                                position='bottom right'/>
                                        </Form.Field>
                                    </Form.Group>

                                    <div>
                                        <h3>Requests</h3>

                                        <List divided relaxed>
                                            <List.Item>
                                                <List.Icon name='sticky note outline' size='large'
                                                           verticalAlign='middle'/>
                                                <List.Content>
                                                    <List.Header as='a'>Get the particular product</List.Header>
                                                    <List.Description as='a'>GET | /getProduct?id=164 | timeout=15000
                                                        ms</List.Description>
                                                </List.Content>
                                            </List.Item>
                                            <List.Item>
                                                <List.Icon name='sticky note outline' size='large'
                                                           verticalAlign='middle'/>
                                                <List.Content>
                                                    <List.Header as='a'>Get list of products on the page</List.Header>
                                                    <List.Description as='a'>GET | /getProducts?pagination=true&page=1 |
                                                        timeout=150000 ms</List.Description>
                                                </List.Content>
                                            </List.Item>
                                        </List>
                                    </div>

                                </Form>
                            </div>

                            <br/>
                            {/* TEMP BR ^*/}

                            <div>
                                <Button primary icon={'save'} content={'Save'} labelPosition={'right'}/>
                            </div>
                        </div>
                    </Segment>
                </Grid.Column>
            </Grid>

        </Segment>
    </Segment>
);

export default Dashboard;