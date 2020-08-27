import React, { useState, useEffect } from 'react';
import { useParams} from "react-router";
import axios from 'axios';
import { BackendURL } from '../../constants'

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

export const PlayerPage = () => {
    let { playerID } = useParams();
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
        <h1>TEST FOR PLAYER ID {playerID}</h1>
    )
}

export default PlayerPage;
