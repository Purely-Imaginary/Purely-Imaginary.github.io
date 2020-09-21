import React from 'react';

interface PlayerSnapshot {
    PlayerID: number,
    PlayerName: string,
    GoalsNumber: number,
    Rating: number
}

export const PlayerGoalsLabel = (player : PlayerSnapshot) => {
    const playerLink = "#/showPlayer/" + player.PlayerID
    let playerGoals = ""
    for (let i = 0; i < player.GoalsNumber; i++) {
        playerGoals += "⚽"
    }
    return (
            <div className="playerGoals">
                <span>{playerGoals}</span>
            </div>
    )
}

export default PlayerGoalsLabel;
