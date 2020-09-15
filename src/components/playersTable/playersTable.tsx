import React, { useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { BackendURL } from '../../constants'
import Table from 'react-bootstrap/Table';
import moment from 'moment';

interface Player {
    ID: number,
    Name: string,
    Wins: number,
    Losses: number,
    GoalsShot: number,
    GoalsScored: number,
    GoalsLost: number,
    Matches: any[],
    Rating: number,
}

export const PlayersTable = () => {
    const [data, setData] = useState<Player[]>([{
        ID: 0,
        Name: "",
        Wins: 0,
        Losses: 0,
        GoalsShot: 0,
        GoalsScored: 0,
        GoalsLost: 0,
        Matches: [],
        Rating: 0
    }]);

    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            BackendURL + "/getPlayersTable",
          );
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
        return null
    })

    const history = useHistory();
    function handleClick(playerID: number) {
        history.push("/showPlayer/" + playerID);
    }

    return (
        <Table striped hover className="playersTable">
            <thead>
                <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Wins</th>
                <th>Losses</th>
                <th>W/L Ratio</th>
                <th className="goalsColumn">Goals Shot</th>
                <th className="goalsColumn">Goals Won</th>
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
                <tr className="playerRow" key={player.ID} onClick={() => handleClick(player.ID)}>
                    <td>{counter}</td>
                    <td>{player.Name}</td>
                    <td>{player.Wins}</td>
                    <td>{player.Losses}</td>
                    <td>{WLRatio}</td>
                    <td className="goalsColumn">{player.GoalsShot}</td>
                    <td className="goalsColumn">{player.GoalsScored}</td>
                    <td className="goalsColumn">{player.GoalsLost}</td>
                    <td className="goalsColumn">{avgGoalsPerGame}</td>
                    <td>{player.Rating}</td>
                    <td className="ratingPercent">{playerRatingPercent}</td>
                    {
                        player.Matches[0] !== undefined && 
                        <td className="lastMatch">{moment(player.Matches[player.Matches.length-1].Time).fromNow()}</td>
                    }
                </tr>
            })}
            </tbody>
        </Table>
    )
}

export default PlayersTable;
