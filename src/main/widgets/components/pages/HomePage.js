import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

const HomePage = () => (
    <div className='homepage-background'>
        <div>
            <h1>LOAD.x</h1>
            <h2>You are just about to start</h2>
            <Link to='/dashboard'>
                <Button inverted color='blue'>Get to the Dashboard!</Button>
            </Link>
        </div>
    </div>
);

export default HomePage;