import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import { BackendURL } from '../../constants';
import PlayerPageTile from '../playerPageTile/playerPageTile';
import moment from 'moment';
import PlayerLabel from '../playerLabel/playerLabel';
import { useHistory } from 'react-router-dom';

interface PlayerSnapshot {
    PlayerID: number,
    MatchID: number,
    PlayerName: string,
    Rating: number,
    MatchRef: any
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

interface Player {
    Matches: Match[],
    GoalsLost: number,
    GoalsScored: number,
    GoalsShot: number,
    ID: number,
    Losses: number,
    Name: string,
    Rating: number,
    WinRate: number,
    Wins: number,
}

interface PlayerData {
    Player: Player,
    Snapshots: PlayerSnapshot[],
    PlayerRatings: any[]
}

export const PlayerPage = () => {
    let { playerID } = useParams();
    const [data, setData] = useState<PlayerData>(
        {
            Player: {
                GoalsLost: 0,
                GoalsScored: 0,
                GoalsShot: 0,
                ID: 0,
                Losses: 0,
                Name: "0",
                Rating: 0,
                WinRate: 0,
                Wins: 0,
                Matches: [{
                    ID: 0,
                    Time: "2012-12-25 10:00",
                    BlueTeam: {
                        AvgTeamRating: 0,
                        RatingChange: 0,
                        Score: 0,
                        Players: [{
                            PlayerID: 0,
                            PlayerName: "",
                            MatchID: 0,
                            Rating: 0,
                            MatchRef: ""
                        }]
                    },
                    RedTeam: {
                        AvgTeamRating: 0,
                        RatingChange: 0,
                        Score: 0,
                        Players: [{
                            PlayerID: 0,
                            PlayerName: "",
                            MatchID: 0,
                            Rating: 0,
                            MatchRef: ""
                        }]
                    }
                }]
            },
            Snapshots: [{
                PlayerID: 0,
                PlayerName: "",
                MatchID: 0,
                Rating: 0,
                MatchRef: ""
            }],
            PlayerRatings: [{}]
        });

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                BackendURL + "/getPlayerData?id=" + playerID,
            );
            setData(result.data);
        };

        fetchData();
    }, []);

    const history = useHistory();
    function handleClick(playerID: number) {
        history.push("/showMatch/" + playerID);
    }

    let bestRating = 0;
    let bestRatingDate = "";
    let worstRating = 3000;
    let worstRatingDate = "";

    let biggestGain = 0;
    let biggestGainDate = "";
    let biggestDrop = 0;
    let biggestDropDate = "";

    let todayChange = 0;
    let weeksChange = 0;
    let monthChange = 0;

    let latestStreak = 0;
    let biggestWinningStreak = 0;
    let biggestWinningStreakDate = "";
    let streakStart = "";
    let streakValue = 0;

    let prevRating = 1000

    for (let index = 0; index < data.Snapshots.length; index++) {
        const element = data.Snapshots[index];
        if (element.Rating < worstRating) {
            worstRating = Math.round(element.Rating * 10) / 10
            worstRatingDate = element.MatchRef.Time
        }

        if (element.Rating > bestRating) {
            bestRating = Math.round(element.Rating * 10) / 10
            bestRatingDate = element.MatchRef.Time
        }

        if (todayChange === 0 && moment(element.MatchRef.Time, "YYYY-MM-DD hh:mm") > moment().startOf('day')) {
            todayChange = Math.round((data.Player.Rating - element.Rating) * 10) / 10
        }

        if (weeksChange === 0 && moment(element.MatchRef.Time, "YYYY-MM-DD hh:mm") > moment().subtract(1, 'week').startOf('day')) {
            weeksChange = Math.round((data.Player.Rating - element.Rating) * 10) / 10
        }

        if (monthChange === 0 && moment(element.MatchRef.Time, "YYYY-MM-DD hh:mm") > moment().subtract(1, 'month').startOf('day')) {
            monthChange = Math.round((data.Player.Rating - element.Rating) * 10) / 10
        }

        if (index === 0) continue;
        let change = element.Rating - prevRating;

        if (change < biggestDrop) {
            biggestDrop = Math.round(change * 10) / 10
            biggestDropDate = element.MatchRef.Time
        }

        if (change > biggestGain) {
            biggestGain = Math.round(change * 10) / 10
            biggestGainDate = element.MatchRef.Time
        }

        if (change > 0) {
            if (latestStreak > 0) {
                latestStreak++
                if (latestStreak > biggestWinningStreak) {
                    biggestWinningStreak = Math.max(latestStreak, biggestWinningStreak)
                    biggestWinningStreakDate = streakStart
                }
            } else {
                latestStreak = 1
                streakStart = element.MatchRef.Time
                streakValue = Math.round((data.Player.Rating - prevRating) * 10) / 10
            }
        } else {
            if (latestStreak < 0) {
                latestStreak--
            } else {
                latestStreak = -1
                streakStart = element.MatchRef.Time
                streakValue = Math.round((data.Player.Rating - prevRating) * 10) / 10
            }
        }
        prevRating = element.Rating
    }
    let element = data.Snapshots[data.Snapshots.length - 1]

    if (element.Rating < data.Player.Rating) {
        if (latestStreak > 0) {
            latestStreak++
            if (latestStreak > biggestWinningStreak) {
                biggestWinningStreak = Math.max(latestStreak, biggestWinningStreak)
            }
        } else {
            latestStreak = 1
            streakStart = element.MatchRef.Time
            streakValue = Math.round((data.Player.Rating - prevRating) * 10) / 10
        }
    } else {
        if (latestStreak < 0) {
            latestStreak--
        } else {
            latestStreak = -1
            streakStart = element.MatchRef.Time
            streakValue = Math.round((data.Player.Rating - prevRating) * 10) / 10
        }
    }

    let ratingPosition = 0
    let upperNeighbor = { Name: "GOD", Rating: 3000 }
    let lowerNeighbor = { Name: "MUD", Rating: 0 }

    for (let index = 0; index < data.PlayerRatings.length; index++) {
        const player = data.PlayerRatings[index];
        if (data.Player.Name === player.Name) {
            ratingPosition = index + 1;
            if (index > 0) {
                upperNeighbor = {
                    Name: data.PlayerRatings[index - 1].Name,
                    Rating: data.PlayerRatings[index - 1].Rating,
                }
            }

            if (index !== data.PlayerRatings.length - 1) {
                lowerNeighbor = {
                    Name: data.PlayerRatings[index + 1].Name,
                    Rating: data.PlayerRatings[index + 1].Rating,
                }
            }
        }
    }

    let goalsPerMatch = (Math.round((data.Player.GoalsScored / (data.Player.Wins + data.Player.Losses)) * 10) / 10 +
        " : " +
        Math.round((data.Player.GoalsLost / (data.Player.Wins + data.Player.Losses)) * 10) / 10)

    let goalsShotPerMatch = Math.round((data.Player.GoalsShot / (data.Player.Wins + data.Player.Losses) * 10)) / 10;

    let matchesPerDay = Math.round(
        ((data.Player.Wins + data.Player.Losses) / moment().diff(moment(data.Snapshots[0].MatchRef.Time, "YYYY-MM-DD hh:mm"), 'days')) * 100) / 100


    let lastMatchesTrend = data.Player.Rating > data.Snapshots[data.Snapshots.length - 1].Rating ? "W" : "L";

    for (let index = (data.Snapshots.length - 1); index > (data.Snapshots.length - 5) && index > 0; index--) {
        const match = data.Snapshots[index];
        if (match.Rating < data.Snapshots[index - 1].Rating) {
            lastMatchesTrend += " L"
        } else {
            lastMatchesTrend += " W"
        }
    }

    var additionalMatchData: { [k: string]: any } = {}
    var alliesQuantitative: { [k: string]: any } = {}
    var enemiesQuantitative: { [k: string]: any } = {}

    for (let index = 0; index < data.Player.Matches.length; index++) {
        const match = data.Player.Matches[index];
        let isPlayerRed = true;
        let didRedWon = match.RedTeam.Score > match.BlueTeam.Score
        for (let j = 0; j < match.BlueTeam.Players.length; j++) {
            const bluePlayer = match.BlueTeam.Players[j];
            if (bluePlayer.PlayerName === data.Player.Name) {
                isPlayerRed = false
                break;
            }
        }
        if (isPlayerRed) {
            for (let j = 0; j < match.RedTeam.Players.length; j++) {
                const redPlayer = match.RedTeam.Players[j];
                if (redPlayer.PlayerName === data.Player.Name) continue;

                if (!(redPlayer.PlayerName in alliesQuantitative)) {
                    alliesQuantitative[redPlayer.PlayerName] = { count: 0, matchBalance: 0, wonAgainst: 0, lostAgainst: 0, currentStreak: 0 }
                }
                alliesQuantitative[redPlayer.PlayerName].count++;

            }
            for (let j = 0; j < match.BlueTeam.Players.length; j++) {
                const bluePlayer = match.BlueTeam.Players[j];
                if (!(bluePlayer.PlayerName in enemiesQuantitative)) {
                    enemiesQuantitative[bluePlayer.PlayerName] = { count: 0, matchBalance: 0, wonAgainst: 0, lostAgainst: 0, currentStreak: 0 }
                }
                enemiesQuantitative[bluePlayer.PlayerName].count++
                enemiesQuantitative[bluePlayer.PlayerName].matchBalance += didRedWon ? 1 : -1
                enemiesQuantitative[bluePlayer.PlayerName].wonAgainst += didRedWon ? 1 : 0
                enemiesQuantitative[bluePlayer.PlayerName].lostAgainst += didRedWon ? 0 : 1

                let streakAmount = enemiesQuantitative[bluePlayer.PlayerName].currentStreak
                if (didRedWon) {
                    enemiesQuantitative[bluePlayer.PlayerName].currentStreak = streakAmount > 0 ? streakAmount + 1 : 1
                } else {
                    enemiesQuantitative[bluePlayer.PlayerName].currentStreak = streakAmount < 0 ? streakAmount - 1 : -1
                }

            }
        } else {
            for (let j = 0; j < match.RedTeam.Players.length; j++) {
                const redPlayer = match.RedTeam.Players[j];
                if (!(redPlayer.PlayerName in enemiesQuantitative)) {
                    enemiesQuantitative[redPlayer.PlayerName] = { count: 0, matchBalance: 0, wonAgainst: 0, lostAgainst: 0, currentStreak: 0 }
                }
                enemiesQuantitative[redPlayer.PlayerName].count++
                enemiesQuantitative[redPlayer.PlayerName].matchBalance += didRedWon ? -1 : 1
                enemiesQuantitative[redPlayer.PlayerName].wonAgainst += didRedWon ? 0 : 1
                enemiesQuantitative[redPlayer.PlayerName].lostAgainst += didRedWon ? 1 : 0

                let streakAmount = enemiesQuantitative[redPlayer.PlayerName].currentStreak
                if (didRedWon) {
                    enemiesQuantitative[redPlayer.PlayerName].currentStreak = streakAmount < 0 ? streakAmount - 1 : -1
                } else {
                    enemiesQuantitative[redPlayer.PlayerName].currentStreak = streakAmount > 0 ? streakAmount + 1 : 1
                }

            }
            for (let j = 0; j < match.BlueTeam.Players.length; j++) {
                const bluePlayer = match.BlueTeam.Players[j];
                if (bluePlayer.PlayerName === data.Player.Name) continue;
                if (!(bluePlayer.PlayerName in alliesQuantitative)) {
                    alliesQuantitative[bluePlayer.PlayerName] = { count: 0, matchBalance: 0, wonAgainst: 0, lostAgainst: 0, currentStreak: 0 }
                }
                alliesQuantitative[bluePlayer.PlayerName].count++

            }
        }
    }
    var enemiesQuantitativeSorted = [];
    for (var enemy in enemiesQuantitative) {
        enemiesQuantitativeSorted.push([enemy, enemiesQuantitative[enemy].count]);
    }

    enemiesQuantitativeSorted.sort(function (a, b) {
        return b[1] - a[1];
    });;

    var enemiesBalanceSorted = [];
    for (var enemy in enemiesQuantitative) {
        enemiesBalanceSorted.push([
            enemy,
            enemiesQuantitative[enemy].matchBalance,
            enemiesQuantitative[enemy].wonAgainst,
            enemiesQuantitative[enemy].lostAgainst,
            enemiesQuantitative[enemy].currentStreak]);
    }

    enemiesBalanceSorted.sort(function (a, b) {
        return b[1] - a[1];
    });;

    var alliesQuantitativeSorted = [];
    for (var ally in alliesQuantitative) {
        alliesQuantitativeSorted.push([ally, alliesQuantitative[ally].count]);
    }

    alliesQuantitativeSorted.sort(function (a, b) {
        return b[1] - a[1];
    });;

    return (
        <div>
            <h1>{data.Player.Name}</h1>
            <div className="data">
                <div className="leftPanel">
                    <div className="dataRow">
                        <PlayerPageTile {...{
                            title: "Player since",
                            value: data.Snapshots[0].MatchRef.Time,
                            subscript: moment(data.Snapshots[0].MatchRef.Time, "YYYY-MM-DD hh:mm").fromNow()
                        }} />
                        <PlayerPageTile {...{
                            title: "Current rating",
                            value: data.Player.Rating.toString(),
                            subscript: ""
                        }} />
                        <PlayerPageTile {...{
                            title: "Rating place",
                            value: ratingPosition.toString(),
                            subscript: ""
                        }} />
                        <PlayerPageTile {...{
                            title: "Upper neighbor",
                            value: upperNeighbor.Name + " (" + Math.round(upperNeighbor.Rating * 10) / 10 + ")",
                            subscript: (Math.round((upperNeighbor.Rating - data.Player.Rating) * 10) / 10).toString() + "pts above"
                        }} />
                        <PlayerPageTile {...{
                            title: "Lower neighbor",
                            value: lowerNeighbor.Name + " (" + Math.round(lowerNeighbor.Rating * 10) / 10 + ")",
                            subscript: (Math.round((data.Player.Rating - lowerNeighbor.Rating) * 10) / 10).toString() + "pts below"
                        }} />
                        <PlayerPageTile {...{
                            title: "Matches balance",
                            value: (data.Player.Wins + " : " + data.Player.Losses),
                            subscript: (data.Player.Wins - data.Player.Losses).toString()
                        }} />
                        <PlayerPageTile {...{
                            title: "Total matches",
                            value: (data.Player.Wins + data.Player.Losses).toString(),
                            subscript: "~" + matchesPerDay.toString() + " per day"
                        }} />
                        <PlayerPageTile {...{
                            title: "Goals",
                            value: (data.Player.GoalsScored + " : " + data.Player.GoalsLost),
                            subscript: goalsPerMatch + " avg"
                        }} />
                        <PlayerPageTile {...{
                            title: "Goals Shot",
                            value: data.Player.GoalsShot.toString(),
                            subscript: ("~" + goalsShotPerMatch.toString() + " per match")
                        }} />
                        <PlayerPageTile {...{
                            title: "Shot %",
                            value: (Math.round((data.Player.GoalsShot / data.Player.GoalsScored) * 1000) / 10).toString() + "%",
                            subscript: ""
                        }} />
                        <PlayerPageTile {...{
                            title: "Best Rating",
                            value: bestRating.toString(),
                            subscript: bestRatingDate
                        }} />
                        <PlayerPageTile {...{
                            title: "Worst Rating",
                            value: worstRating.toString(),
                            subscript: worstRatingDate
                        }} />
                        <PlayerPageTile {...{
                            title: "Biggest gain",
                            value: biggestGain.toString(),
                            subscript: biggestGainDate
                        }} />
                        <PlayerPageTile {...{
                            title: "Biggest drop",
                            value: biggestDrop.toString(),
                            subscript: biggestDropDate
                        }} />
                        <PlayerPageTile {...{
                            title: "Today's change",
                            value: todayChange.toString(),
                            subscript: "Since " + moment().format('YYYY-MM-DD')
                        }} />
                        <PlayerPageTile {...{
                            title: "Week's change",
                            value: weeksChange.toString(),
                            subscript: "Since " + moment().subtract(1, 'week').format('YYYY-MM-DD')
                        }} />
                        <PlayerPageTile {...{
                            title: "Month's change",
                            value: monthChange.toString(),
                            subscript: "Since " + moment().subtract(1, 'month').format('YYYY-MM-DD')
                        }} />
                        <PlayerPageTile {...{
                            title: "Match streak",
                            value: latestStreak.toString() + " (" + streakValue + "pts)",
                            subscript: "Since " + streakStart
                        }} />
                        <PlayerPageTile {...{
                            title: "Biggest winning streak",
                            value: biggestWinningStreak.toString(),
                            subscript: "Started at " + biggestWinningStreakDate
                        }} />
                        <PlayerPageTile {...{
                            title: "Last matches trend",
                            value: lastMatchesTrend,
                            subscript: ""
                        }} />
                        <PlayerPageTile {...{
                            title: "Top ally",
                            value: alliesQuantitativeSorted[0][0],
                            subscript: alliesQuantitativeSorted[0][1] + " matches"
                        }} />
                        <PlayerPageTile {...{
                            title: "Top enemy",
                            value: enemiesQuantitativeSorted[0][0],
                            subscript: enemiesQuantitativeSorted[0][1] + " matches"
                        }} />
                    </div>
                </div>
                <div className="rightPanel">
                    <div className="enemiesBalance">
                        <div className="title">Enemies balance (won - lost against specific opponent)</div>
                        <table>
                            <thead>
                                <th>Enemy</th><th>Score</th><th>Streak</th>
                            </thead>
                            <tbody>
                                {enemiesBalanceSorted.map(enemy =>
                                    <tr><td>{enemy[0]}</td><td>{enemy[1]} ({enemy[2]} : {enemy[3]})</td><td>{enemy[4]}</td></tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    <div className="matchHistory">
                        Matches History
                        <table>
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
                                {data.Player.Matches.reverse().map(match =>

                                    <tr key={match.ID} onClick={() => handleClick(match.ID)}>
                                        <td>{moment(match.Time).format('DD-MM-YYYY HH:mm')}</td>
                                        <td className="redTeamMatches">
                                            {match.RedTeam.Players.map(player =>
                                                <div key={player.PlayerID} className='redTeam'>
                                                    <PlayerLabel {...player} />
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
                                                    <PlayerLabel {...player} />
                                                </div>
                                            )}
                                        </td>
                                        <td>{Math.round(match.RedTeam.RatingChange * 10) / 10}</td>
                                    </tr>).reverse()}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default PlayerPage;
