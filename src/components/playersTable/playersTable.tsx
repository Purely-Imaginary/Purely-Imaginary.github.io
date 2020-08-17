import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BackendURL } from '../../constants'
import Table from 'react-bootstrap/Table';
import moment from 'moment';

interface Player {
    ID: number,
    Name: string,
    Wins: number,
    Losses: number,
    GoalsScored: number,
    GoalsLost: number,
    LastMatch: string,
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
        LastMatch: "",
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
    let maxRating = 0;
    let minRating = 2000;
    data.map(player => {
        maxRating = Math.max(maxRating, player.Rating);
        minRating = Math.min(minRating, player.Rating);
    })

    return (
        <Table striped hover className="playersTable">
            <thead>
                <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Wins</th>
                <th>Losses</th>
                <th>W/L Ratio</th>
                <th className="goalsColumn">Goals Scored</th>
                <th className="goalsColumn">Goals Lost</th>
                <th className="goalsColumn">Avg per game</th>
                <th>Rating</th>
                <th className="ratingPercent">Rating %</th>
                <th className="lastMatch">Last played</th>
                </tr>
            </thead>
            <tbody>
        
            {data.map(player => {

                let avgGoalsScoredPerGame = Math.round(player.GoalsScored / (player.Wins + player.Losses) * 10)/10
                let avgGoalsLostPerGame = Math.round(player.GoalsLost / (player.Wins + player.Losses) * 10)/10
                let avgGoalsPerGame = avgGoalsScoredPerGame + " : " + avgGoalsLostPerGame
                let playerRatingPercent = Math.round((1-((player.Rating - minRating) / (maxRating - minRating)))*100) + "%"

                let WLRatio = Math.round(player.Wins / (player.Wins + player.Losses) * 10000) /100 + "%"
                return (player.Wins + player.Losses > 10) && ++counter &&
                <tr className="playerRow" key={player.ID}>
                    <td>{counter}</td>
                    <td>{player.Name}</td>
                    <td>{player.Wins}</td>
                    <td>{player.Losses}</td>
                    <td>{WLRatio}</td>
                    <td className="goalsColumn">{player.GoalsScored}</td>
                    <td className="goalsColumn">{player.GoalsLost}</td>
                    <td className="goalsColumn">{avgGoalsPerGame}</td>
                    <td>{player.Rating}</td>
                    <td className="ratingPercent">{playerRatingPercent}</td>
            <td className="lastMatch">{moment(player.LastMatch).fromNow()}</td>
                </tr>
            })}
            </tbody>
        </Table>
    )
}

export default PlayersTable;
