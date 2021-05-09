import React from 'react';

interface PlayerSnapshot {
    isRed: boolean,
    player: {
        name: string,
        id: number
    }
    goalsAmount: number,
    rating: number
}

export const PlayerGoalsLabel = (player : PlayerSnapshot) => {
    let playerGoals = ""
    for (let i = 0; i < player.goalsAmount; i++) {
        playerGoals += "⚽"
    }
    return (
            <div className="playerGoals">
                <span>{playerGoals}</span>
            </div>
    )
}

export default PlayerGoalsLabel;
