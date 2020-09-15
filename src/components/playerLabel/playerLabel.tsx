import React from 'react';

interface PlayerSnapshot {
    PlayerID: number,
    PlayerName: string,
    GoalsNumber: number,
    Rating: number
}

export const PlayerLabel = (player : PlayerSnapshot) => {
    const playerLink = "#/showPlayer/" + player.PlayerID
    let firstGoals = ""
    for (let i = 0; i < Math.floor(player.GoalsNumber / 2); i++) {
        firstGoals += "⚽"
    }
    let lastGoals = firstGoals
    if (player.GoalsNumber % 2) {
        lastGoals += "⚽"
    }
    return (
        <div className="playerLabel">
            <span className="firstGoals">{firstGoals}</span>
            <a href={playerLink}>
                <span className="playerName">{player.PlayerName}</span>
                <span className="playerRating"> - {Math.round(player.Rating)}</span>
            </a>
            <span className="lastGoals">{lastGoals}</span>
        </div>
    )
}

export default PlayerLabel;
