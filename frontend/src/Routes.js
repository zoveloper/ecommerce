import React from 'react'
import {Switch, Route} from 'react-router-dom'

//Components
import Work from './components/MainView/Work/Work'
import Shop from './components/MainView/Shop/Shop'
import About from './components/MainView/About/About'

const Routes = () =>{
    return(
        <Switch>
            <Route exact path='/' component={Work}/>
            <Route  path='/Shop' component={Shop}/>
            <Route  path='/About' component={About}/>
        </Switch>



)}


export default Routes