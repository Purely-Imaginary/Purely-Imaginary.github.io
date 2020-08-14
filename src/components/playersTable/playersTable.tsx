import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BackendURL } from '../../constants'
import Table from 'react-bootstrap/Table';

interface Player {
    ID: number,
    Name: string,
    Wins: number,
    Losses: number,
    GoalsScored: number,
    GoalsLost: number,
    Rating: number,
}

export const PlayersTable = () => {
    const [data, setData] = useState<Player[]>([{
        ID: 0,
        Name: "",
        Wins: 0,
        Losses: 0,
        GoalsScored: 0,
        GoalsLost: 0,
        Rating: 0
    }]);

    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            BackendURL + "/getPlayersTable",
          );
            console.log(result.data);
          setData(result.data);
        };
     
        fetchData();
      }, []);
      let counter = 0;
    return (
        <Table striped hover className="playersTable">
            <thead>
                <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Wins</th>
                <th>Losses</th>
                <th>Goals Scored</th>
                <th>Goals Lost</th>
                <th>Rating</th>
                </tr>
            </thead>
            <tbody>
        
            {data.map(player => {
                return (player.Wins + player.Losses > 10) && ++counter &&
                <tr className="playerRow" key={player.ID}>
                    <td>{counter}</td>
                    <td>{player.Name}</td>
                    <td>{player.Wins}</td>
                    <td>{player.Losses}</td>
                    <td>{player.GoalsScored}</td>
                    <td>{player.GoalsLost}</td>
                    <td>{player.Rating}</td>
                </tr>
            })}
            </tbody>
        </Table>
    )
}

export default PlayersTable;
