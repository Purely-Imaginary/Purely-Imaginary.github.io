import React from 'react';

// CR: tutaj Ci wrzucę to co mówiłem o otypowaniu + każdy komponent powinien mieć default propsy - komponenty powinny być zabezpieczone przed tym że dostały złe propsy i przez to się wywaliły

interface PropTypes {
    title:string, 
    value:string, 
    subscript: string
};

const defaultProps: PropTypes = {
    title: '',
    value: '',
    subscript: ''
};

const PlayerPageTile: React.FC<PropTypes> = (data) => {
    // debugger;
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

// CR: tutaj się dopisuje te propsy
PlayerPageTile.defaultProps = defaultProps;

export default PlayerPageTile;
