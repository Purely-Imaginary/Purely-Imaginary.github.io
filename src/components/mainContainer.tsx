import * as React from 'react';
import LastMatchesTable from './lastMatches/table';
import PlayersTable from './playersTable/playersTable'


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
        <div className="mainContainer">
          <h1>Last Matches</h1>
          <LastMatchesTable />
          <h1>Players Table</h1>
          <PlayersTable />
        </div>
      )
    }
  }
