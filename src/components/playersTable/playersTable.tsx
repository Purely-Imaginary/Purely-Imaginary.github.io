import React, { useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { BackendURL } from '../../constants'
import Table from 'react-bootstrap/Table';
import moment from 'moment';
import loader from '../../assets/img/loader.gif';

interface Player {
    id: number,
    name: string,
    wins: number,
    losses: number,
    goalsShot: number,
    goalsScored: number,
    goalsLost: number,
    lastPlayed: number,
    rating: number,
}

export const PlayersTable = () => {
    const [data, setData] = useState<Player[]>();

    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            BackendURL + "/playersTable",
          );
          setData(result.data);
        };
     
        fetchData();
      }, []);

    let counter = 0;

    const history = useHistory();
    function handleClick(playerID: number) {
        history.push("/showPlayer/" + playerID);
    }

    return (
        <Table striped hover className="playersTable">
            {data === undefined && <img src={loader} />}
            {data !== undefined && 
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
                <th className="goalsColumn">Aggression %</th>
                <th>Rating</th>
                <th className="lastMatch">Last played</th>
                </tr>
            </thead>}
            <tbody>
            {data !== undefined && data.map(player => {
                let aggressionPercent = (Math.round((player.goalsShot / player.goalsScored) * 1000) / 10)  + "%"

                let WLRatio = Math.round(player.wins / (player.wins + player.losses) * 10000) /100 + "%"
                let timeSinceLastPlayed = Date.now() - (player.lastPlayed * 1000)
                return (player.wins + player.losses > 10) &&
                timeSinceLastPlayed < 2592000000 && // 30 days
                ++counter &&
                <tr className="playerRow" key={player.id} onClick={() => handleClick(player.id)}>
                    <td>{counter}</td>
                    <td>{player.name}</td>
                    <td>{player.wins}</td>
                    <td>{player.losses}</td>
                    <td>{WLRatio}</td>
                    <td className="goalsColumn">{player.goalsShot}</td>
                    <td className="goalsColumn">{player.goalsScored}</td>
                    <td className="goalsColumn">{player.goalsLost}</td>
                    <td className="goalsColumn">{aggressionPercent}</td>
                    <td>{Math.round(player.rating * 10)/10}</td>
                    {
                        <td className="lastMatch">{moment(player.lastPlayed * 1000).fromNow()}</td>
                    }
                </tr>
            })}
            </tbody>
        </Table>
    )
}

export default PlayersTable;
