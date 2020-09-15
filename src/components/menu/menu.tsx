import React from 'react';
import MenuLink from './menuLink';
import MenuLogo from './menuLogo';
import { BackendURL } from '../../constants';
import {HashRouter as Router} from "react-router-dom";
import { Button } from 'react-bootstrap';

export const Menu: React.FC = () => {
    return (
        <Router>
        <div className="menu">
            <MenuLogo url="logo512blue.png" name="mainLogo" />
            <MenuLink text="Last matches" url="/#/matches" icon="🕑"/>
            <MenuLink text="Players table" url="/#/players" icon="⚔" />
            <MenuLink text="Charts" url="/#/charts" icon="📊" />
            <MenuLink text="Future features" url="/#/future" icon="💡" />
            <div className="backendURL"><span>{BackendURL}/p?u=</span></div>
        </div>
        </Router>
    )
}

export default Menu;
