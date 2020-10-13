import React, { useState, useEffect } from 'react';
import { useParams} from "react-router";
import axios from 'axios';
import { BackendURL } from '../../constants'
import PlayerLabel from '../playerLabel/playerLabel';
import PlayerGoalsLabel from '../playerGoalsLabel/playerGoalsLabel';

interface PlayerSnapshot {
    PlayerID: number,
    PlayerName: string,
    GoalsNumber: number,
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
    Speed: number,
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
                Rating: 0,
                GoalsNumber: 0
            }]
        },
        RedTeam: {
            AvgTeamRating: 0,
            RatingChange: 0,
            Score: 0,
            Players: [{
                PlayerID: 0,
                PlayerName: "",
                Rating: 0,
                GoalsNumber: 0
            }]
        },
        Goals:
        [{
            IsRed: false,
            PlayerID: 0,
            PlayerName: "",
            ShotTime: 0,
            Speed: 0,
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
            
    data.RedTeam.Players.map (player => {
            player.GoalsNumber = 0
            data.Goals.map(goal => {
                if (player.PlayerID === goal.PlayerID){
                    player.GoalsNumber++
                } 
                return goal;
            })
            return player
        })
        data.BlueTeam.Players.map (player => {
            player.GoalsNumber = 0
            data.Goals.map(goal => {
                if (player.PlayerID === goal.PlayerID){
                    player.GoalsNumber++
                } 
                return goal;
            })
            return player
        })

        /**
         * kCoefficient := float32(250)

	ratingDifference := red - blue
	powerPiece := math.Pow(10, float64(ratingDifference/400))
	winChance := float32(1 / (1 + powerPiece))

	redPoints := (((float32(1-winChance) / 10) * float32(1)) + winChance)
	bluePoints := (((float32(winChance) / 10) * float32(-1)) + winChance)
	redRatingChange := float32(math.Abs(float64(((redPoints - winChance) * kCoefficient) / float32(players))))
	blueRatingChange := float32(math.Abs(float64(((bluePoints - winChance) * kCoefficient) / float32(players))))

	return redRatingChange, blueRatingChange
         */

    let ratingDifference = data.RedTeam.AvgTeamRating - data.BlueTeam.AvgTeamRating
    let kCoefficient = 250
    let powerPiece = Math.pow(10, (ratingDifference/400))
    let winChance = (1 / (1 + powerPiece))

    let redPoints = (((1-winChance) / 10) * 1) + winChance
    let bluePoints = (((winChance) / 10) * -1) + winChance
    
    let blueRatingChange = Math.abs((((redPoints - winChance) * kCoefficient) / (data.RedTeam.Players.length)))
    let redRatingChange = Math.abs((((bluePoints - winChance) * kCoefficient) / data.RedTeam.Players.length))

    let simulatedScoreArray = [];
    let redSimulatedScore = 10;
    let blueSimulatedScore = 0;

    for (let i = 0; i < 21; i++) {
        let calc = redSimulatedScore > blueSimulatedScore ? redRatingChange * redSimulatedScore - blueSimulatedScore : blueRatingChange * blueSimulatedScore - redSimulatedScore
        simulatedScoreArray.push({
            'score': redSimulatedScore + ":" + blueSimulatedScore,
            'calculation': Math.round(calc * 100)/100,
            'matchOutcome': redSimulatedScore - blueSimulatedScore === data.RedTeam.Score - data.BlueTeam.Score,
            'isRed': redSimulatedScore > blueSimulatedScore
        })        
        if (redSimulatedScore > 0 && blueSimulatedScore == 0){
            redSimulatedScore--
        } else {
            blueSimulatedScore++
        }
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
                                    <PlayerGoalsLabel {...player}/>
                                </div>
                            ))}
                        </div>
                        <div className="avgRedRating avgRating">
                            {Math.round(data.RedTeam.AvgTeamRating*10)/10}
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
                        <div className="avgBlueRating avgRating">
                            {Math.round(data.BlueTeam.AvgTeamRating*10)/10}
                        </div>
                        <div>
                        {data.BlueTeam.Players.map(player => (
                                <div key={player.PlayerID} className='blueTeam'>
                                    <PlayerLabel {...player}/>
                                    <PlayerGoalsLabel {...player}/>
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
                                             <span className="goalSpeed">({Math.round(goal.Speed * 100)/10} km/h) </span>{goal.PlayerName} - {secondsToTime(goal.Time)}
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
                                            {secondsToTime(goal.Time)} - {goal.PlayerName}<span className="goalSpeed"> ({Math.round(goal.Speed * 100)/10} km/h)</span>
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
                    <div className="replayButton">
                        <a href={"https://www.haxball.com/replay?v=3#" + BackendURL + "/getFile?id=" + data.ID} target="_blank" rel="noopener noreferrer">WATCH REPLAY</a>
                    </div>
                    <div className='scoreSimulationTable'>
                        <table className="simulationTable">
                            <thead>
                                <tr>
                                    <td>Team rating diff:</td>
                                    <td>{Math.round((Math.abs(ratingDifference))*10)/10}</td>
                                </tr>
                                <tr>
                                    <td>Points per goal for team:</td>
                                    <td><span className="lightRedColor">{Math.round(redRatingChange*100)/100 * data.RedTeam.Players.length}</span> /  
                                    <span className="lightBlueColor"> {Math.round(blueRatingChange*100)/100 * data.BlueTeam.Players.length}</span></td>
                                </tr>
                                <tr>
                                    <td>Points per goal per player:</td>
                                    <td><span className="lightRedColor">{Math.round(redRatingChange*100)/100}</span> /  
                                    <span className="lightBlueColor"> {Math.round(blueRatingChange*100)/100}</span></td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>Possible outcomes:</td>
                                </tr>
                            </thead>
                            <tbody>
                                {simulatedScoreArray.map(score => 
                                <tr className={(score.matchOutcome ? "matchOutcome" : "") + (score.isRed ? " redLight" : " blueLight")}>
                                    <td>{score.score}</td>
                                    <td>{score.calculation}</td>
                                </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MatchPage;
