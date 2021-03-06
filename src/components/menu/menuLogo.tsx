import React from 'react';

interface Props {
    url: string;
    name: string;
}

export const MenuLogo: React.FC<Props> = ({url, name}) => {
    return (
        <img src={url} className={name} alt={name}/>
    )
}

export default MenuLogo;
