import React from 'react';
import MenuLink from './menuLink';
import MenuLogo from './menuLogo';
import { BackendURL } from '../../constants';

export const Menu: React.FC = () => {
    return (
        <div className="menu">
            <MenuLogo url="logo512.png" name="mainLogo" />
            <hr />
            <MenuLink text="Last matches" url="/1" icon="🕑"/>
            <MenuLink text="Players table" url="/1" icon="⚔" />
            <MenuLink text="Leagues" url="/1" icon="🏆" />
            <MenuLink text="Future features" url="/1" icon="💡" />
            <div className="spacer"></div>
            <p>{BackendURL}</p>
        </div>
    )
}

export default Menu;
