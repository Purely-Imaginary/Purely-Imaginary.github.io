import React from 'react';

export const FutureList = () => {
    return (
        <div className="futureList">
            <h1>Incoming features</h1>
            <ul>
                <li>Player labels</li>
                <li>Match card</li>
                <li>Player card</li>
                <li>Full match analysis
                <ul>
                    <li>Goals</li>
                    <li>Ball position</li>
                    <li>Ball posession
                        <ul>
                            <li>Proximity based</li>
                            <li>Touch based</li>
                        </ul>
                    </li>
                </ul>
                </li>
            </ul>
        </div>
    )
}

export default FutureList;