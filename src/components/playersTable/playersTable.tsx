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
    return (
        <Table striped hover className="playersTable">
            <thead>
                <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Wins</th>
                <th>Losses</th>
                <th>GoalsScored</th>
                <th>GoalsLost</th>
                <th>Rating</th>
                </tr>
            </thead>
            <tbody>
            {data.map(match => {
                return (match.Wins + match.Losses > 10) && 
                <tr className="lastMatch">
                    <td>{match.ID}</td>
                    <td>{match.Name}</td>
                    <td>{match.Wins}</td>
                    <td>{match.Losses}</td>
                    <td>{match.GoalsScored}</td>
                    <td>{match.GoalsLost}</td>
                    <td>{match.Rating}</td>
                </tr>
            })}
            </tbody>
        </Table>
    )
}

export default PlayersTable;
