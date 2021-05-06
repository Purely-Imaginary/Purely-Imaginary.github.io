import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BackendURL } from '../../constants'
import Table from 'react-bootstrap/Table';
import moment from 'moment';
import PlayerLabel from '../playerLabel/playerLabel';
import { useHistory } from 'react-router-dom';

interface Player {
    id: number,
    name: string
}

interface PlayerSnapshot {
    isRed: number,
    rating: number,
    player: Player
}

interface Team {
    avgTeamRating: number,
    isRed: number,
    ratingChange: number,
    score: number,
    playerSnapshots: PlayerSnapshot[]
}

interface Match {
    id: number,
    time: string,    
    teamSnapshots: Team[]
}

export const LastMatchesTable = () => {
    const [data, setData] = useState<Match[]>([{
        id: 0,
        time: "2012-12-25 10:00",
        teamSnapshots: [{
            avgTeamRating: 0,
            isRed: 0,
            ratingChange: 0,
            score: 0,
            playerSnapshots: [{
                isRed: 0,
                rating: 0,
                player: {
                    id: 0,
                    name: ""
                }
            }]
        },{
            avgTeamRating: 0,
            isRed: 0,
            ratingChange: 0,
            score: 0,
            playerSnapshots: [{
                isRed: 0,
                rating: 0,
                player: {
                    id: 0,
                    name: ""
                }
            }]
            
        }]
    }]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                BackendURL + "/calculatedMatch/getLastMatches",
            );
            setData(result.data);
        };

        fetchData();


        setData(data);
    }, []);

    console.log(data)

    const history = useHistory();
    function handleClick(playerID: number) {
        history.push("/showMatch/" + playerID);
    }

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
                    <tr key={match.id} onClick={() => handleClick(match.id)}>
                        <td>{moment(match.time).format('DD-MM-YYYY HH:mm')}</td>
                        <td className="redTeamMatches">
                            {match.teamSnapshots[0].playerSnapshots.map(playerSnapshot =>
                                <div key={playerSnapshot.player.id} className='redTeam'>
                                    <PlayerLabel {...playerSnapshot}/>
                                </div>
                            )}
                        </td>
                        <td className="redTeamMatches avgRedRating">{Math.round(match.teamSnapshots[0].avgTeamRating * 10) / 10}</td>
                        <td className="redTeamMatches scoreColumn">{match.teamSnapshots[0].score}</td>
                        <td className="scoreColumn"> : </td>
                        <td className="blueTeamMatches scoreColumn">{match.teamSnapshots[1].score}</td>
                        <td className="blueTeamMatches avgBlueRating">{Math.round(match.teamSnapshots[1].avgTeamRating * 10) / 10}</td>
                        <td className="blueTeamMatches">
                            {match.teamSnapshots[1].playerSnapshots.map(playerSnapshot =>
                                <div key={playerSnapshot.player.id} className='blueTeam'>
                                    <PlayerLabel {...playerSnapshot}/>
                                </div>
                            )}
                        </td>
                        <td>{Math.round(match.teamSnapshots[0].ratingChange * 10) / 10}</td>
                    </tr>
                )}
            </tbody>
        </Table>
    )
}

export default LastMatchesTable;
