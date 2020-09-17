import React from 'react';

interface PlayerSnapshot {
    PlayerID: number,
    PlayerName: string,
    GoalsNumber: number,
    Rating: number
}

export const PlayerLabel = (player : PlayerSnapshot) => {
    const playerLink = "#/showPlayer/" + player.PlayerID
    let playerGoals = ""
    for (let i = 0; i < player.GoalsNumber; i++) {
        playerGoals += "⚽"
    }
    return (
        <div className="playerLabel">
            <div>
                <a href={playerLink}>
                    <span className="playerName">{player.PlayerName}</span>
                    <span className="playerRating"> - {Math.round(player.Rating)}</span>
                </a>
            </div>
            <div className="playerGoals">
                <span>{playerGoals}</span>
            </div>
        </div>
    )
}

export default PlayerLabel;
