import React from 'react';

interface Props {
    text: string;
    url: string;
}

export const MenuLink: React.FC<Props> = ({text, url}) => {
    return (
        <div className="menuLink">
            <a href={url}>{text}</a>
        </div>
    )
}

export default MenuLink;
