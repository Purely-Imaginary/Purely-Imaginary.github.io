import React from 'react';

interface Props {
    text: string;
    url: string;
    icon: string;
}

export const MenuLink: React.FC<Props> = ({text, url, icon}) => {
    return (
        <div className="menuLink">
            <a href={url}>
                <div className="icon">{icon}</div>
                <div className="text">{text}</div> 
            </a>
        </div>
    )
}

export default MenuLink;
