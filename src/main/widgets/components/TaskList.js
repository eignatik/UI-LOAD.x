import React from 'react';
import {RestUtil} from "../../util/RestUtil";

export class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        RestUtil.health();
        console.log(RestUtil.getTaskList());
    }

    render() {
        return (
            <div>
                HELLO
            </div>
        );
    }
}