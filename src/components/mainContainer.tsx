import * as React from 'react';
import LastMatchesTable from './lastMatches/table';
import PlayersTable from './playersTable/playersTable'
import FutureList from './future/future';
import Highchart from './charts/highchart'

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
              <Route path="/">
                <h1>Last Matches</h1>
                <LastMatchesTable />
                <h1>Players Table</h1>
                <PlayersTable />
              </Route>
            </Switch>
          </div>
        </Router>
      )
    }
  }
