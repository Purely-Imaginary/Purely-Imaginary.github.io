import React from 'react';
import MenuLink from './menuLink';
import MenuLogo from './menuLogo';
import { BackendURL } from '../../constants';

export const Menu: React.FC = () => {
    return (
        <div className="menu">
            <MenuLogo url="logo512.png" name="mainLogo" />
            <h1>MENU</h1>
            <MenuLink text="Last matches" url="/1" />
            <MenuLink text="Players table" url="/1" />
            <MenuLink text="Leagues" url="/1" />
            <MenuLink text="Future features" url="/1" />
            <div className="spacer"></div>
            <p>{BackendURL}</p>
        </div>
    )
}

export default Menu;
