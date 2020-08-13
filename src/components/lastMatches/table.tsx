import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BackendURL } from '../../constants'
import Table from 'react-bootstrap/Table';

interface PlayerSnapshot {
    PlayerID: number,
    PlayerName: string,
    Rating: number
}

interface Team {
    AvgTeamRating: number,
    RatingChange: number,
    Score: number,
    Players: PlayerSnapshot[]
}

interface Match {
    ID: number,
    Time: string,
    BlueTeam: Team,
    RedTeam: Team
}

export const LastMatchesTable = () => {
    const [data, setData] = useState<Match[]>([{
        ID: 0,
        Time: "",
        BlueTeam: {
            AvgTeamRating: 0,
            RatingChange: 0,
            Score: 0,
            Players: [{
                PlayerID: 0,
                PlayerName: "",
                Rating: 0
            }]
        },
        RedTeam: {
            AvgTeamRating: 0,
            RatingChange: 0,
            Score: 0,
            Players: [{
                PlayerID: 0,
                PlayerName: "",
                Rating: 0
            }]
        }
    }]);

    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            BackendURL + "/getLastMatches",
          );
            console.log(result.data);
          setData(result.data);
        };
     
        fetchData();
      }, []);
    return (
        <Table striped hover className="lastMatchTable">
            <thead>
                <tr>
                <th>ID</th>
                <th>Time</th>
                <th>PlayersRed</th>
                <th>AvgRed</th>
                <th>ScoreRed</th>
                <th>ScoreBlue</th>
                <th>AvgBlue</th>
                <th>PlayersBlue</th>
                <th>RedRatingChange</th>
                </tr>
            </thead>
            <tbody>
            {data.map(match => 
                <tr>
                    <td>{match.ID}</td>
                    <td>{match.Time}</td>
                    <td>
                        {match.RedTeam.Players.map(player => 
                        <div>
                        {player.PlayerName} - {player.Rating}
                        </div>
                            )}
                    </td>
                    <td>{match.RedTeam.AvgTeamRating}</td>
                    <td>{match.RedTeam.Score}</td>
                    <td>{match.BlueTeam.Score}</td>
                    <td>{match.BlueTeam.AvgTeamRating}</td>
                    <td>
                        {match.BlueTeam.Players.map(player => 
                        <div>
                        {player.PlayerName} - {player.Rating}
                        </div>
                            )}
                    </td>
                    <td>{match.RedTeam.RatingChange}</td>
                </tr>
            )}
            </tbody>
        </Table>
    )
}

export default LastMatchesTable;
