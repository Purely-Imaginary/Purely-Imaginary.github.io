import React, { useState, useEffect } from 'react';
import { useParams} from "react-router";
import axios from 'axios';
import { BackendURL } from '../../constants'
import PlayerLabel from '../playerLabel/playerLabel';
import PlayerGoalsLabel from '../playerGoalsLabel/playerGoalsLabel';

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

interface Goal {
    IsRed: boolean,
    PlayerID: number,
    PlayerName: string,
    ShotTime: number,
    Time: number,
    TravelTime: number
}

interface Match {
    ID: number,
    Time: string,
    StartTime: number,
    EndTime: number,
    BlueTeam: Team,
    RedTeam: Team,
    Goals: Goal[]
}

function secondsToTime(seconds: number){
    seconds = Math.floor(seconds)
    let minutes = Math.floor(seconds / 60)
    let secString = (seconds - minutes * 60).toString()
    if (seconds - minutes * 60 < 10) {
        secString = "0" + secString
    }
    return minutes + ":" + secString
}

export const MatchPage = () => {
    let { matchID } = useParams();
    const [data, setData] = useState<Match>({
        ID: 0,
        Time: "2012-12-25 10:00",
        StartTime: 0,
        EndTime: 600,
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
        },
        Goals:
        [{
            IsRed: false,
            PlayerID: 0,
            PlayerName: "",
            ShotTime: 0,
            Time: 0,
            TravelTime: 0
        }]
    });

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                BackendURL + "/getMatchByID?id=" + matchID,
            );
            setData(result.data);
        };

        fetchData();
    }, []);

    let arrow = "==>"
    if (data.RedTeam.RatingChange > 0) {
        arrow = "<=="
    } 

    return (
        <div>
            <h2>MATCH DETAILS VIEW</h2>
            <div className="matchDetailsPanels">
                <div className="leftPanel">
                    <div className="scorePanel">
                        <div>
                            {data.RedTeam.Players.map(player => (
                                <div key={player.PlayerID} className='redTeam'>
                                    <PlayerLabel {...player}/>
                                </div>
                            ))}
                        </div>
                        <div className="scoreData">
                            <div className="scores">
                                <span className="redScore">{data.RedTeam.Score}</span>
                                {'\u00A0'}:{'\u00A0'}
                                <span className="blueScore">{data.BlueTeam.Score}</span>
                            </div>
                            <div className="arrow">
                                {arrow}
                            </div>
                            <div className="ratingChange">
                                {Math.abs(Math.round(data.RedTeam.RatingChange * 100) / 100)}
                            </div>
                        </div>
                        <div>
                        {data.BlueTeam.Players.map(player => (
                                <div key={player.PlayerID} className='blueTeam'>
                                    <PlayerLabel {...player}/>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="goalsChartTitle">GOALS CHART</div>
                    <div className="goalsChart">
                        <div className="goal matchStart">
                            <div className="redTeam"></div>
                            <div className="chart">
                                <div className="matchStartTime">{secondsToTime(data.StartTime)}</div>
                            </div>
                            <div className="blueTeam"></div>
                        </div>
                        <div className="goal matchStart">
                            <div className="redTeam"></div>
                            <div className="chart">
                                <div className="goalElement matchStart">ￜ</div>
                            </div>
                            <div className="blueTeam"></div>
                        </div>
                            {data.Goals.map(goal => (
                                <div className="goal">
                                    <div className="redTeam">
                                    {goal.IsRed && 
                                        <div>
                                             {goal.PlayerName} - {secondsToTime(goal.Time)}
                                        </div>
                                    }
                                    </div>
                                    <div className="chart">
                                    {goal.IsRed && 
                                        <div className="goalElement red">ￆ</div>
                                    }
                                    {!goal.IsRed && 
                                        <div className="goalElement blue">ￂ</div>
                                    }
                                    </div>

                                    <div className="blueTeam">
                                    {!goal.IsRed && 
                                        <div>
                                            {secondsToTime(goal.Time)} - {goal.PlayerName}
                                        </div>
                                    }
                                    </div>
                                </div>
                            ))}

                        <div className="goal">
                            <div className="redTeam"></div>
                            <div className="chart matchEnd">
                                <div className="goalElement matchEnd">ￜ</div>
                            </div>
                            <div className="blueTeam"></div>
                        </div>
                        <div className="goal">
                            <div className="redTeam"></div>
                            <div className="chart matchEnd">
                                <div className="matchEndTime">{secondsToTime(data.EndTime)}</div> 
                            </div>
                            <div className="blueTeam"></div>
                        </div>
                    </div>
                </div>
                <div className="rightPanel">
                    right
                </div>
            </div>
        </div>
    )
}

export default MatchPage;
