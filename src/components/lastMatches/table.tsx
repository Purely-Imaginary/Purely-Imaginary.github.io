import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BackendURL } from '../../constants'
import Table from 'react-bootstrap/Table';
import moment from 'moment';

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
                <th>Date</th>
                <th>Red Team Players</th>
                <th>Avg Red Rating</th>
                <th>Red Team Score</th>
                <th>Blue Team Score</th>
                <th>Avg Blue Rating</th>
                <th>Blue Team Players</th>
                <th>Red Team Rating Change</th>
                </tr>
            </thead>
            <tbody>
            {data.map(match => 
                <tr>
                    <td>{match.ID}</td>
                    <td>{moment(match.Time).format('DD-MM-YYYY')}</td>
                    <td className="redTeamMatches">
                        {match.RedTeam.Players.map(player => 
                        <div>
                        {player.PlayerName} - {player.Rating}
                        </div>
                            )}
                    </td>
                    <td className="redTeamMatches">{match.RedTeam.AvgTeamRating}</td>
                    <td className="redTeamMatches">{match.RedTeam.Score}</td>
                    <td className="blueTeamMatches">{match.BlueTeam.Score}</td>
                    <td className="blueTeamMatches">{match.BlueTeam.AvgTeamRating}</td>
                    <td className="blueTeamMatches">
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
