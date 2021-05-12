import React from 'react';
import { useHistory } from 'react-router-dom';

interface Player {
    id: number,
    name: string
}

interface PlayerSnapshot {
    rating: number,
    player: Player
}

export const PlayerLabel = (player: PlayerSnapshot) => {
    const playerLink = "#/showPlayer/" + player.player.id

    const history = useHistory();
    function handlePlayerClick(playerID: number) {
        history.push("#/showMatch/" + playerID);
    }

    return (
        <div className="playerLabel">
            <div onClick={() => handlePlayerClick(player.player.id)}>
                <a href={playerLink}>
                    <span className="playerName">{player.player.name}</span>
                    {player.rating !== 0 &&
                        <span className="playerRating"> - {Math.round(player.rating)}</span>
                    }
                </a>
            </div>
        </div>
    )
}

export default PlayerLabel;
