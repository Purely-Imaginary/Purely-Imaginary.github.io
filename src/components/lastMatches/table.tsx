import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BackendURL } from '../../constants'
import Table from 'react-bootstrap/Table';
import moment from 'moment';
import PlayerLabel from '../playerLabel/playerLabel';

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
        Time: "2012-12-25 10:00",
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
            setData(result.data);
        };

        fetchData();
    }, []);
    return (
        <Table striped hover className="lastMatchTable">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Red Team Players</th>
                    <th className="avgRedRating">Avg Red Rating</th>
                    <th className="scoreColumn" colSpan={3}>Score</th>
                    <th className="avgBlueRating">Avg Blue Rating</th>
                    <th>Blue Team Players</th>
                    <th>Red Team Rating Change</th>
                </tr>
            </thead>
            <tbody>
                {data.map(match =>
                    <tr key={match.ID}>
                        <td>{moment(match.Time).subtract(2, 'hours').format('DD-MM-YYYY HH:mm')}</td>
                        <td className="redTeamMatches">
                            {match.RedTeam.Players.map(player =>
                                <div key={player.PlayerID} className='redTeam'>
                                    <PlayerLabel {...player}/>
                                </div>
                            )}
                        </td>
                        <td className="redTeamMatches avgRedRating">{Math.round(match.RedTeam.AvgTeamRating * 10) / 10}</td>
                        <td className="redTeamMatches scoreColumn">{match.RedTeam.Score}</td>
                        <td className="scoreColumn"> : </td>
                        <td className="blueTeamMatches scoreColumn">{match.BlueTeam.Score}</td>
                        <td className="blueTeamMatches avgBlueRating">{Math.round(match.BlueTeam.AvgTeamRating * 10) / 10}</td>
                        <td className="blueTeamMatches">
                            {match.BlueTeam.Players.map(player =>
                                <div key={player.PlayerID} className='blueTeam'>
                                    <PlayerLabel {...player}/>
                                </div>
                            )}
                        </td>
                        <td>{Math.round(match.RedTeam.RatingChange * 10) / 10}</td>
                    </tr>
                )}
            </tbody>
        </Table>
    )
}

export default LastMatchesTable;
