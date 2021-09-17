import * as React from 'react';
import LastMatchesTable from './lastMatches/table';
import PlayersTable from './playersTable/playersTable'
import FutureList from './future/future';
import Highchart from './charts/highchart';
import PlayerPage from './playerPage/playerPage';
import MatchPage from './matchPage/matchPage';
import PastData from './pastData/pastData';
import PastData2nd from './pastData2nd/pastData2nd';

import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";


export default class Menu extends React.Component {
    state = {
      count: 0
    };
  
    increment = () => {
      this.setState({
        count: (this.state.count + 1)
      });
    };
  
    decrement = () => {
      this.setState({
        count: (this.state.count - 1)
      });
    };
  
    render () {
      return (
        <Router>
          <div className="mainContainer">
            <Switch>
              <Route path="/future">
                <FutureList />
              </Route>
              <Route path="/charts">
                <Highchart />
              </Route>
              <Route path="/matches">
                <h1>Last Matches</h1>
                <LastMatchesTable />
              </Route>
              <Route path="/showPlayer/:playerID">
                <PlayerPage />
              </Route>
              <Route path="/showMatch/:matchID">
                <MatchPage />
              </Route>
              <Route path="/players">
                <h1>Players Table</h1>
                <PlayersTable />
              </Route>
              <Route path="/old">
                <h1>Season 1</h1>
                <PastData />
              </Route>
              <Route path="/old2">
                <h1>Season 2</h1>
                <PastData2nd />
              </Route>
              <Route path="/">
                <h1>Last Matches</h1>
                <LastMatchesTable />
              </Route>
            </Switch>
          </div>
        </Router>
      )
    }
  }
