import React, { Component } from 'react'
import {Icon, Image, Menu, Segment} from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import Logo from '../../resources/logo.png';

export default class TopMenu extends Component {
    state = { activeItem : 'home' };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;

        return (
            <div>
                <Menu pointing >
                    <Menu.Item>
                        L
                        <img src={Logo}/>
                        AD.x
                    </Menu.Item>
                    <Menu.Item
                        name='home'
                        as={Link}
                        to='/'
                        active={activeItem === 'home'}
                        onClick={this.handleItemClick}/>
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