import React from 'react';
import { Route } from 'react-router-dom'
import HomePage from '../components/pages/HomePage'
import Dashboard from '../components/pages/Dashboard'
import Executions from '../components/pages/Executions'
import About from "../components/pages/About";
import './style/App.css';
import TopMenu from "../components/TopMenu";

const App = () => (
    <div className='ui container'>
        <TopMenu/>
        <Route path='/' exact component={HomePage}/>
        <Route path='/dashboard' exact component={Dashboard}/>
        <Route path='/executions' exact component={Executions}/>
        <Route path='/about' exact component={About}/>
    </div>
);

export default App;
