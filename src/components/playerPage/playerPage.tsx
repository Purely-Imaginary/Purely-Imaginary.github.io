import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import { BackendURL } from '../../constants';
import GenericPlayerPageTile from '../playerPageTiles/generic';
import moment from 'moment';
import PlayerLabel from '../playerLabel/playerLabel';
import { useHistory } from 'react-router-dom';
import loader from '../../assets/img/loader.gif';

interface SimplePlayer {
    id: number,
    name: string
}

interface PlayerSnapshot {
    isRed: number,
    rating: number,
    player: SimplePlayer
    time: string
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

interface Player {
    goalsLost: number,
    goalsScored: number,
    goalsShot: number,
    id: number,
    losses: number,
    name: string,
    rating: number,
    wins: number,
}

interface PlayerData {
    player: Player,
    matchHistory: Match[],
    snapshots: PlayerSnapshot[],
    playerRatings: Player[]
}

export const PlayerPage = () => {
    let { playerID } = useParams();
    const [data, setData] = useState<PlayerData>();

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                BackendURL + "/player/" + playerID,
            );
            setData(result.data);
        };

        fetchData();
    }, []);


    const history = useHistory();
    function handleClick(MatchID: number) {
        history.push("/showMatch/" + MatchID);
    }

    if (data === undefined) return (<img src={loader} />);

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

    let prevMatch = data.snapshots[0];

    for (let index = 0; index < data.snapshots.length; index++) {
        const element = data.snapshots[index];
        if (element.rating === null) {
            continue;
        }

        if (element.rating < worstRating) {
            worstRating = Math.round(element.rating * 10) / 10
            worstRatingDate = element.time
        }

        if (element.rating > bestRating) {
            bestRating = Math.round(element.rating * 10) / 10
            bestRatingDate = element.time
        }

        if (todayChange === 0 && moment(element.time, "YYYY-MM-DD hh:mm") > moment().startOf('day')) {
            todayChange = Math.round((data.player.rating - element.rating) * 10) / 10
        }

        if (weeksChange === 0 && moment(element.time, "YYYY-MM-DD hh:mm") > moment().subtract(1, 'week').startOf('day')) {
            weeksChange = Math.round((data.player.rating - element.rating) * 10) / 10
        }

        if (element.rating !== null &&monthChange === 0 && moment(element.time, "YYYY-MM-DD hh:mm") > moment().subtract(1, 'month').startOf('day')) {
            monthChange = Math.round((data.player.rating - element.rating) * 10) / 10
        }

        if (index === 0) continue;
        let change = element.rating - prevMatch.rating;

        if (change < biggestDrop) {
            biggestDrop = Math.round(change * 10) / 10
            biggestDropDate = element.time
        }

        if (change > biggestGain) {
            biggestGain = Math.round(change * 10) / 10
            biggestGainDate = element.time
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
                streakStart = prevMatch.time
                streakValue = Math.round((data.player.rating - prevMatch.rating) * 10) / 10
            }
        } else if (change < 0) {
            if (latestStreak < 0) {
                latestStreak--
            } else {
                latestStreak = -1
                streakStart = prevMatch.time
                streakValue = Math.round((data.player.rating - prevMatch.rating) * 10) / 10
            }
        }
        prevMatch = element
    }
    let element = data.snapshots[data.snapshots.length - 1]

    if (element.rating < data.player.rating) {
        if (latestStreak > 0) {
            latestStreak++
            if (latestStreak > biggestWinningStreak) {
                biggestWinningStreak = Math.max(latestStreak, biggestWinningStreak)
            }
        } else {
            latestStreak = 1
            streakStart = element.time
            streakValue = Math.round((data.player.rating - prevMatch.rating) * 10) / 10
        }
    } else if (element.rating > data.player.rating) {
        if (latestStreak < 0) {
            latestStreak--
        } else {
            latestStreak = -1
            streakStart = element.time
            streakValue = Math.round((data.player.rating - prevMatch.rating) * 10) / 10
        }
    }

    let ratingPosition = 0
    let upperNeighbor = { name: "GOD", rating: 3000 }
    let lowerNeighbor = { name: "MUD", rating: 0 }

    for (let index = 0; index < data.playerRatings.length; index++) {
        const player = data.playerRatings[index];
        if (data.player.name === player.name) {
            ratingPosition = index + 1;
            if (index > 0) {
                upperNeighbor = {
                    name: data.playerRatings[index - 1].name,
                    rating: data.playerRatings[index - 1].rating,
                }
            }

            if (index !== data.playerRatings.length - 1) {
                lowerNeighbor = {
                    name: data.playerRatings[index + 1].name,
                    rating: data.playerRatings[index + 1].rating,
                }
            }
        }
    }

    let goalsPerMatch = (Math.round((data.player.goalsScored / (data.player.wins + data.player.losses)) * 10) / 10 +
        " : " +
        Math.round((data.player.goalsLost / (data.player.wins + data.player.losses)) * 10) / 10)

    let goalsShotPerMatch = Math.round((data.player.goalsShot / (data.player.wins + data.player.losses) * 10)) / 10;

    let matchesPerDay = Math.round(
        ((data.player.wins + data.player.losses) / moment().diff(moment(data.snapshots[0].time, "YYYY-MM-DD hh:mm"), 'days')) * 100) / 100


    let lastMatchesTrend = data.player.rating > data.snapshots[data.snapshots.length - 1].rating ? "W" : "L";

    for (let index = (data.snapshots.length - 1); index > (data.snapshots.length - 5) && index > 0; index--) {
        const match = data.snapshots[index];
        if (match.rating < data.snapshots[index - 1].rating && data.snapshots[index - 1].rating !== null) {
            lastMatchesTrend = "L " + lastMatchesTrend
        } else if (match.rating > data.snapshots[index - 1].rating && data.snapshots[index - 1].rating !== null){
            lastMatchesTrend = "W " + lastMatchesTrend
        } else {
            lastMatchesTrend = "X " + lastMatchesTrend
        }
    }

    var additionalMatchData: { [k: string]: any } = {}
    var alliesQuantitative: { [k: string]: any } = {}
    var enemiesQuantitative: { [k: string]: any } = {}

    for (let index = 0; index < data.matchHistory.length; index++) {
        const match = data.matchHistory[index];
        let isPlayerRed = true;
        let didRedWon = match.teamSnapshots[0].score > match.teamSnapshots[1].score;
        let playerRatingChange = 0;
        for (let j = 0; j < match.teamSnapshots[1].playerSnapshots.length; j++) {
            const bluePlayer = match.teamSnapshots[1].playerSnapshots[j];
            if (bluePlayer.player.name === data.player.name) {
                isPlayerRed = false;
                break;
            }
        }
        if (isPlayerRed) {
            for (let j = 0; j < match.teamSnapshots[0].playerSnapshots.length; j++) {
                const redPlayer = match.teamSnapshots[0].playerSnapshots[j];
                if (redPlayer.player.name === data.player.name) continue;

                if (!(redPlayer.player.name in alliesQuantitative)) {
                    alliesQuantitative[redPlayer.player.name] = { 
                        count: 0, 
                        matchBalance: 0, 
                        wonAgainst: 0, 
                        lostAgainst: 0, 
                        currentStreak: 0, 
                        id: redPlayer.player.id 
                    }
                }
                alliesQuantitative[redPlayer.player.name].count++;

            }
            for (let j = 0; j < match.teamSnapshots[1].playerSnapshots.length; j++) {
                const bluePlayer = match.teamSnapshots[1].playerSnapshots[j];
                if (!(bluePlayer.player.name in enemiesQuantitative)) {
                    enemiesQuantitative[bluePlayer.player.name] = { 
                        count: 0, 
                        matchBalance: 0, 
                        wonAgainst: 0, 
                        lostAgainst: 0, 
                        currentStreak: 0, 
                        pointsBalance: 0, 
                        id: bluePlayer.player.id 
                    }
                }
                enemiesQuantitative[bluePlayer.player.name].count++
                enemiesQuantitative[bluePlayer.player.name].matchBalance += didRedWon ? 1 : -1
                enemiesQuantitative[bluePlayer.player.name].wonAgainst += didRedWon ? 1 : 0
                enemiesQuantitative[bluePlayer.player.name].lostAgainst += didRedWon ? 0 : 1
                enemiesQuantitative[bluePlayer.player.name].pointsBalance += match.teamSnapshots[0].ratingChange

                let streakAmount = enemiesQuantitative[bluePlayer.player.name].currentStreak
                if (didRedWon) {
                    enemiesQuantitative[bluePlayer.player.name].currentStreak = streakAmount > 0 ? streakAmount + 1 : 1
                } else {
                    enemiesQuantitative[bluePlayer.player.name].currentStreak = streakAmount < 0 ? streakAmount - 1 : -1
                }

                playerRatingChange = match.teamSnapshots[0].ratingChange
            }
        } else {
            for (let j = 0; j < match.teamSnapshots[0].playerSnapshots.length; j++) {
                const redPlayer = match.teamSnapshots[0].playerSnapshots[j];
                if (!(redPlayer.player.name in enemiesQuantitative)) {
                    enemiesQuantitative[redPlayer.player.name] = { 
                        count: 0, 
                        matchBalance: 0, 
                        wonAgainst: 0, 
                        lostAgainst: 0, 
                        currentStreak: 0, 
                        pointsBalance: 0, 
                        id: redPlayer.player.id 
                    }
                }
                enemiesQuantitative[redPlayer.player.name].count++
                enemiesQuantitative[redPlayer.player.name].matchBalance += didRedWon ? -1 : 1
                enemiesQuantitative[redPlayer.player.name].wonAgainst += didRedWon ? 0 : 1
                enemiesQuantitative[redPlayer.player.name].lostAgainst += didRedWon ? 1 : 0
                enemiesQuantitative[redPlayer.player.name].pointsBalance += match.teamSnapshots[1].ratingChange

                let streakAmount = enemiesQuantitative[redPlayer.player.name].currentStreak
                if (didRedWon) {
                    enemiesQuantitative[redPlayer.player.name].currentStreak = streakAmount < 0 ? streakAmount - 1 : -1
                } else {
                    enemiesQuantitative[redPlayer.player.name].currentStreak = streakAmount > 0 ? streakAmount + 1 : 1
                }

            }
            for (let j = 0; j < match.teamSnapshots[1].playerSnapshots.length; j++) {
                const bluePlayer = match.teamSnapshots[1].playerSnapshots[j];
                if (bluePlayer.player.name === data.player.name) continue;
                if (!(bluePlayer.player.name in alliesQuantitative)) {
                    alliesQuantitative[bluePlayer.player.name] = { 
                        count: 0, 
                        matchBalance: 0, 
                        wonAgainst: 0, 
                        lostAgainst: 0, 
                        currentStreak: 0, 
                        id: bluePlayer.player.id
                    }
                }
                alliesQuantitative[bluePlayer.player.name].count++

            }
            playerRatingChange = match.teamSnapshots[1].ratingChange
        }
        additionalMatchData[match.id] = {playerRatingChange: playerRatingChange}
    }
    var enemiesQuantitativeSorted = [];
    for (let enemy in enemiesQuantitative) {
        enemiesQuantitativeSorted.push([enemy, enemiesQuantitative[enemy].count]);
    }

    enemiesQuantitativeSorted.sort(function (a, b) {
        return b[1] - a[1];
    });;

    var enemiesBalanceSorted = [];
    for (let enemy in enemiesQuantitative) {
        enemiesBalanceSorted.push([
            enemy,
            enemiesQuantitative[enemy].matchBalance,
            enemiesQuantitative[enemy].wonAgainst,
            enemiesQuantitative[enemy].lostAgainst,
            enemiesQuantitative[enemy].currentStreak,
            enemiesQuantitative[enemy].id,
            enemiesQuantitative[enemy].pointsBalance]);
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
            <h1>{data.player.name}</h1>
            <div className="data">
                <div className="leftPlayerPanel">
                    <div className="dataRow">
                        <GenericPlayerPageTile {...{
                            title: "Player since",
                            value: data.snapshots[0].time,
                            subscript: moment(data.snapshots[0].time, "YYYY-MM-DD hh:mm").fromNow()
                        }} />
                        <GenericPlayerPageTile {...{
                            title: "Matches balance",
                            value: (data.player.wins + " : " + data.player.losses),
                            subscript: (data.player.wins - data.player.losses).toString()
                        }} />
                        <GenericPlayerPageTile {...{
                            title: "Total matches",
                            value: (data.player.wins + data.player.losses).toString(),
                            subscript: "~" + matchesPerDay.toString() + " per day"
                        }} />
                        <GenericPlayerPageTile {...{
                            title: "Win ratio",
                            value: (Math.round((data.player.wins / (data.player.wins + data.player.losses))*1000)/10).toString() + "%",
                            subscript: ""
                        }} />
                    </div>
                    <div className="dataRow">
                        <GenericPlayerPageTile {...{
                            title: "Current rating",
                            value: data.player.rating === null ? 'unknown' : data.player.rating.toString(),
                            subscript: ""
                        }} />
                        <GenericPlayerPageTile {...{
                            title: "Rating place",
                            value: ratingPosition.toString(),
                            subscript: ""
                        }} />
                        <GenericPlayerPageTile {...{
                            title: "Upper neighbor",
                            value: upperNeighbor.name + " (" + Math.round(upperNeighbor.rating * 10) / 10 + ")",
                            subscript: (Math.round((upperNeighbor.rating - data.player.rating) * 10) / 10).toString() + "pts above you"
                        }} />
                        <GenericPlayerPageTile {...{
                            title: "Lower neighbor",
                            value: lowerNeighbor.name + " (" + Math.round(lowerNeighbor.rating * 10) / 10 + ")",
                            subscript: (Math.round((data.player.rating - lowerNeighbor.rating) * 10) / 10).toString() + "pts below you"
                        }} />
                    </div>
                    <div className="dataRow">
                        <GenericPlayerPageTile {...{
                            title: "Goals",
                            value: (data.player.goalsScored + " : " + data.player.goalsLost),
                            subscript: goalsPerMatch + " avg"
                        }} />
                        <GenericPlayerPageTile {...{
                            title: "Goals Shot",
                            value: data.player.goalsShot.toString(),
                            subscript: ("~" + goalsShotPerMatch.toString() + " per match")
                        }} />
                        <GenericPlayerPageTile {...{
                            title: "Shot %",
                            value: (Math.round((data.player.goalsShot / data.player.goalsScored) * 1000) / 10).toString() + "%",
                            subscript: ""
                        }} />
                        <GenericPlayerPageTile {...{
                            title: "Top speed",
                            value: "Soon km/h",
                            subscript: "TBD"
                        }} />
                    </div>
                    <div className="dataRow">
                        <GenericPlayerPageTile {...{
                            title: "Best Rating",
                            value: bestRating.toString(),
                            subscript: bestRatingDate
                        }} />
                        <GenericPlayerPageTile {...{
                            title: "Worst Rating",
                            value: worstRating.toString(),
                            subscript: worstRatingDate
                        }} />
                        <GenericPlayerPageTile {...{
                            title: "Biggest gain",
                            value: biggestGain.toString() + "pts",
                            subscript: biggestGainDate
                        }} />
                        <GenericPlayerPageTile {...{
                            title: "Biggest drop",
                            value: biggestDrop.toString() + "pts",
                            subscript: biggestDropDate
                        }} />
                    </div>
                    <div className="dataRow">
                        <GenericPlayerPageTile {...{
                            title: "Today's change",
                            value: todayChange.toString() + "pts",
                            subscript: "Since " + moment().format('YYYY-MM-DD')
                        }} />
                        <GenericPlayerPageTile {...{
                            title: "Week's change",
                            value: weeksChange.toString() + "pts",
                            subscript: "Since " + moment().subtract(1, 'week').format('YYYY-MM-DD')
                        }} />
                        <GenericPlayerPageTile {...{
                            title: "Month's change",
                            value: monthChange.toString() + "pts",
                            subscript: "Since " + moment().subtract(1, 'month').format('YYYY-MM-DD')
                        }} />
                    </div>
                    <div className="dataRow">
                        <GenericPlayerPageTile {...{
                            title: "Match streak",
                            value: latestStreak.toString() + " (" + streakValue + "pts)",
                            subscript: "Since " + streakStart
                        }} />
                        <GenericPlayerPageTile {...{
                            title: "Biggest winning streak",
                            value: biggestWinningStreak.toString(),
                            subscript: "Started at " + biggestWinningStreakDate
                        }} />
                        <GenericPlayerPageTile {...{
                            title: "Last matches trend",
                            value: lastMatchesTrend,
                            subscript: ""
                        }} />
                    </div>
                    <div className="dataRow">
                        <GenericPlayerPageTile {...{
                            title: "Top ally",
                            value: alliesQuantitativeSorted[0][0],
                            subscript: alliesQuantitativeSorted[0][1] + " matches"
                        }} />
                        <GenericPlayerPageTile {...{
                            title: "Top enemy",
                            value: enemiesQuantitativeSorted[0][0],
                            subscript: enemiesQuantitativeSorted[0][1] + " matches"
                        }} />
                    </div>
                </div>
                <div className="rightPlayerPanel">
                    <div className="enemiesBalance">
                        <div className="title"><h3>Enemies stats (won - lost against specific opponent)</h3></div>
                        <table>
                            <thead>
                                <th>Enemy</th><th>Score</th><th>Win ratio</th><th>Streak</th><th>Points flow</th>
                            </thead>
                            <tbody>
                                {enemiesBalanceSorted.map(enemy =>
                                    <tr key={enemy[5]}>
                                        <td><PlayerLabel {...{player: {id: enemy[5], name:enemy[0]}, rating: 0}}/>
                                        </td>
                                        <td>{enemy[1]} ({enemy[2]} : {enemy[3]})</td>
                                        <td>{Math.round((enemy[2] / (enemy[2] + enemy[3]))*1000)/10}%</td>
                                        <td>{enemy[4]}</td>
                                        <td>{Math.round(enemy[6]*10)/10}</td>
                                        </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    <div className="matchHistory">
                        <h3>Matches History</h3>
                        <table className="matchHistoryTable table">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Red<br />Players</th>
                                    <th className="avgRedRating">Avg Red<br />Rating</th>
                                    <th className="scoreColumn" colSpan={3}>Score</th>
                                    <th className="avgBlueRating">Avg Blue<br />Rating</th>
                                    <th>Blue<br />Players</th>
                                    <th>Player Rating<br />Change</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.matchHistory.map(match =>
                                    <tr key={match.id} onClick={() => handleClick(match.id)}>
                                        <td>
                                            {moment(match.time).format('DD-MM-YYYY')}<br />
                                            {moment(match.time).format('HH:mm')}
                                        </td>
                                        <td className="redTeamMatches">
                                            {match.teamSnapshots[0].playerSnapshots.map(player =>
                                                <div key={player.player.id} className='redTeam'>
                                                    <PlayerLabel {...player} />
                                                </div>
                                            )}
                                        </td>
                                        <td className="redTeamMatches avgRedRating">{Math.round(match.teamSnapshots[0].avgTeamRating * 10) / 10}</td>
                                        <td className="redTeamMatches scoreColumn">{match.teamSnapshots[0].score}</td>
                                        <td className="scoreColumn"> : </td>
                                        <td className="blueTeamMatches scoreColumn">{match.teamSnapshots[1].score}</td>
                                        <td className="blueTeamMatches avgBlueRating">{Math.round(match.teamSnapshots[1].avgTeamRating * 10) / 10}</td>
                                        <td className="blueTeamMatches">
                                            {match.teamSnapshots[1].playerSnapshots.map(player =>
                                                <div key={player.player.id} className='blueTeam'>
                                                    <PlayerLabel {...player} />
                                                </div>
                                            )}
                                        </td>
                                        <td>{Math.round(additionalMatchData[match.id].playerRatingChange * 10) / 10}</td>
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
