import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  HashRouter
} from "react-router-dom";

import {observable} from 'mobx'
import personData from './stores/user-store'

import { Stage1 } from './pages/Stage-1';
import { Stage2 } from './pages/Stage-2';
import { HomePage } from './pages/HomePage';
import { Profile } from './pages/Profile';
import { Biorhythm } from './pages/Biorhythm';
import { Horoscope } from './pages/Horoscope';
import { PalmReading } from './pages/PalmReading';
import { Compatibility } from './pages/Compatibility';
import { CompatibilitySelect } from './pages/CompatibilitySelect';
import { PalmReadingLeftHand } from './pages/PalmReadingLeftHand';
import { LeftHandPhoto } from './pages/LeftHandPhoto';
import { PalmReadingRightHand } from './pages/PalmReadingRightHand';
import { RightHandPhoto } from './pages/RightHandPhoto';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.person = observable(personData)
  }

  render() {
    return (
      <HashRouter>
        <div>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/stage-1">
              <Stage1 />
            </Route>
            <Route path="/stage-2">
              <Stage2 />
            </Route>
            <Route path="/profile">
              <Profile person={this.person}/>
            </Route>
            <Route path="/biorhythm" >
              <Biorhythm person={this.person}/>
            </Route>
            <Route path="/horoscope">
              <Horoscope person={this.person}/>
            </Route>
            <Route path="/palm-reading" component={PalmReading}>
            </Route>
            <Route path="/compatibility" component={Compatibility}>
            </Route>
            <Route path="/compatibility-select" >
              <CompatibilitySelect person={this.person}/>
            </Route>
            <Route path="/left-hand" >
              <PalmReadingLeftHand />
            </Route>
            <Route path="/left-hand-photo" component={LeftHandPhoto}>
            </Route>
            <Route path="/right-hand" >
              <PalmReadingRightHand />
            </Route>
            <Route path="/right-hand-photo" component={RightHandPhoto}>
            </Route>
          </Switch>
        </div>
      </HashRouter>
    )
  }
}