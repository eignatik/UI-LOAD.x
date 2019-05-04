import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default class TopMenu extends Component {
    state = { activeItem : 'home' };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;

        return (
            <div>
                <Menu pointing secondary>
                    <Menu.Item
                        name='home'
                        as={Link}
                        to='/'
                        active={activeItem === 'home'}
                        onClick={this.handleItemClick} />
                    <Menu.Item
                        name='dashboard'
                        as={Link}
                        to='/dashboard'
                        active={activeItem === 'dashboard'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='executions'
                        as={Link}
                        to='/executions'
                        active={activeItem === 'executions'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='about'
                        as={Link}
                        to='/about'
                        active={activeItem === 'about'}
                        onClick={this.handleItemClick}
                    />
                </Menu>
            </div>
        )
    }
}