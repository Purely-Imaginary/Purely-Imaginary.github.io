import React from 'react';
import MenuLink from './menuLink';
import MenuLogo from './menuLogo';
import { BackendURL } from '../../constants';

import {
    HashRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export const Menu: React.FC = () => {
    return (
        <Router>
        <div className="menu">
            <MenuLogo url="logo512blue.png" name="mainLogo" />
            <hr />
            <MenuLink text="Last matches" url="/#/" icon="🕑"/>
            <MenuLink text="Players table" url="/#/" icon="⚔" />
            <MenuLink text="Leagues" url="/#/future" icon="🏆" />
            <MenuLink text="Future features" url="/#/future" icon="💡" />
            <div className="spacer"></div>
            <p>{BackendURL}</p>
        </div>
        </Router>
    )
}

export default Menu;
