import React from 'react';


export const PlayerPageTile = (data: {title:string, value:string, subscript: string}) => {
    return (
        <div className="playerPageTile">
            <div className="title">
                {data.title}
            </div>
            <div className="value">
                {data.value}
            </div>
            <div className="subscript">
                {data.subscript}
            </div>
        </div>
    )
}

export default PlayerPageTile;
