import React from 'react';

interface PlayerSnapshot {
    PlayerID: number,
    PlayerName: string,
    Rating: number
}

export const PlayerLabel = (player : PlayerSnapshot) => {
    const playerLink = "#/showPlayer/" + player.PlayerID
    return (
        <div className="playerLabel">
            <a href={playerLink}>
                <span className="playerName">{player.PlayerName}</span>
                <span className="playerRating"> - {Math.round(player.Rating)}</span>
            </a>
        </div>
    )
}

export default PlayerLabel;
