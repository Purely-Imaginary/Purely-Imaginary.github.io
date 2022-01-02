import React, { useState, useEffect } from 'react';
import { useParams} from "react-router";
import axios from 'axios';
import { BackendURL } from '../../constants'
import PlayerLabel from '../playerLabel/playerLabel';
import PlayerGoalsLabel from '../playerGoalsLabel/playerGoalsLabel';
import loader from '../../assets/img/loader.gif';

interface PlayerSnapshot {
    isRed: boolean,
    player: {
        name: string,
        id: number
    }
    goalsAmount: number,
    rating: number
}

interface Team {
    isRed: boolean,
    avgTeamRating: number,
    ratingChange: number,
    score: number,
    playerSnapshots: PlayerSnapshot[]
}

interface Goal {
    isRed: boolean,
    player: {
        name: string,
        id: number
    }
    shotTime: number,
    speed: number,
    time: number,
    travelTime: number
}

interface Match {
    id: number,
    time: string,
    startTime: number,
    endTime: number,
    teamSnapshots: Team[],
    goals: Goal[]
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
    const [data, setData] = useState<Match>();

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                BackendURL + "/calculatedMatch/getById/" + matchID,
            );
            setData(result.data);
        };

        fetchData();
    }, []);

    if (data === undefined) return (<img src={loader} />);

    let arrow = "==>"
    if (data.teamSnapshots[0].ratingChange > 0) {
        arrow = "<=="
    } 

    let ratingDifference = data.teamSnapshots[0].avgTeamRating - data.teamSnapshots[1].avgTeamRating
    let kCoefficient = 250
    let powerPiece = Math.pow(10, (ratingDifference/400))
    let winChance = (1 / (1 + powerPiece))

    let redPoints = (((1-winChance) / 10) * 1) + winChance
    let bluePoints = (((winChance) / 10) * -1) + winChance
    
    let blueRatingChange = Math.abs((((redPoints - winChance) * kCoefficient) / (data.teamSnapshots[0].playerSnapshots.length)))
    let redRatingChange = Math.abs((((bluePoints - winChance) * kCoefficient) / data.teamSnapshots[0].playerSnapshots.length))

    let matchLengthMultiplier = Math.round(((180 / Math.max(data.endTime, 90)) - 1) * 100);
    let simulatedScoreArray = [];
    let redSimulatedScore = 10;
    let blueSimulatedScore = 0;

    for (let i = 0; i < 21; i++) {
        let calc = redSimulatedScore > blueSimulatedScore ? redRatingChange * redSimulatedScore - blueSimulatedScore : blueRatingChange * blueSimulatedScore - redSimulatedScore
        simulatedScoreArray.push({
            'score': redSimulatedScore + ":" + blueSimulatedScore,
            'calculation': Math.round(calc * 100)/100,
            'matchOutcome': redSimulatedScore - blueSimulatedScore === data.teamSnapshots[0].score - data.teamSnapshots[1].score,
            'isRed': redSimulatedScore > blueSimulatedScore
        })        
        if (redSimulatedScore > 0 && blueSimulatedScore === 0){
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
                            {data.teamSnapshots[0].playerSnapshots.map(player => (
                                <div key={player.player.id} className='redTeam'>
                                    <PlayerLabel {...player}/>
                                    <PlayerGoalsLabel {...player}/>
                                </div>
                            ))}
                        </div>
                        <div className="avgRedRating avgRating">
                            {Math.round(data.teamSnapshots[0].avgTeamRating*10)/10}
                        </div>
                        <div className="scoreData">
                            <div className="scores">
                                <span className="redScore">{data.teamSnapshots[0].score}</span>
                                {'\u00A0'}:{'\u00A0'}
                                <span className="blueScore">{data.teamSnapshots[1].score}</span>
                            </div>
                            <div className="arrow">
                                {arrow}
                            </div>
                            <div className="ratingChange">
                                {Math.abs(Math.round(data.teamSnapshots[0].ratingChange * 100) / 100)}
                            </div>
                            <div className={"matchLengthMultiplier " + ((matchLengthMultiplier >= 0) ? "green" : "red")} 
                            title="Match Length Multiplier: If match is shorter / longer than usual, amount of rating earned is changed
                            to reward unusually easy or hard match.">
                                {matchLengthMultiplier}%
                            </div>
                        </div>
                        <div className="avgBlueRating avgRating">
                            {Math.round(data.teamSnapshots[1].avgTeamRating*10)/10}
                        </div>
                        <div>
                        {data.teamSnapshots[1].playerSnapshots.map(player => (
                                <div key={player.player.id} className='blueTeam'>
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
                                <div className="matchStartTime">{secondsToTime(data.startTime)}</div>
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
                            {data.goals.map(goal => (
                                <div className="goal" key={goal.time}>
                                    <div className="redTeam">
                                    {goal.isRed && 
                                        <div>
                                             <span className="goalSpeed">({Math.round(goal.speed * 100)/10} km/h) </span>{goal.player.name} - {secondsToTime(goal.time)}
                                        </div>
                                    }
                                    </div>
                                    <div className="chart">
                                    {goal.isRed && 
                                        <div className="goalElement red">ￆ</div>
                                    }
                                    {!goal.isRed && 
                                        <div className="goalElement blue">ￂ</div>
                                    }
                                    </div>

                                    <div className="blueTeam">
                                    {!goal.isRed && 
                                        <div>
                                            {secondsToTime(goal.time)} - {goal.player.name}<span className="goalSpeed"> ({Math.round(goal.speed * 100)/10} km/h)</span>
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
                                <div className="matchEndTime">{secondsToTime(data.endTime)}</div> 
                            </div>
                            <div className="blueTeam"></div>
                        </div>
                    </div>
                </div>
                <div className="rightPanel">
                    <div className="replayButton">
                        <a href={"https://www.haxball.com/replay?v=3#" + BackendURL + "/getFile?id=" + data.id} target="_blank" rel="noopener noreferrer">WATCH REPLAY</a>
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
                                    <td><span className="lightRedColor">{Math.round(redRatingChange * data.teamSnapshots[0].playerSnapshots.length * 100) / 100 }</span> /  
                                    <span className="lightBlueColor"> {Math.round(blueRatingChange * data.teamSnapshots[1].playerSnapshots.length * 100) / 100}</span></td>
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
                                <tr key={score.score} className={(score.matchOutcome ? "matchOutcome" : "") + (score.isRed ? " redLight" : " blueLight")}>
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
