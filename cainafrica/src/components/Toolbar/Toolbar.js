import React from 'react';
import  { NavLink,useLocation } from "react-router-dom";
import styled from 'styled-components';
import DrawerToggleButton from  '../SideDrawer/DrawerToggleButton.js';
import './Toolbar.css';
import CainWhiteLogo from '../../images/CainWhiteLogo.png';

const Logo = styled.img`
    width: 12rem;
    margin: 0 5rem 0 1rem;
    
    @media (max-width: 768px) {
        width: 6rem;
        padding-left: 0.25rem;
        padding-top: 1rem;
    }
`

const Toolbar = props => {
    const location = useLocation();
        const isResourcesActive =
           location.pathname.startsWith("/gallery") ||
           location.pathname === "/parental-consent-form" ||
           location.pathname === "/volunteer-consent-form" ||
           location.pathname === "/beavolunteer" ||
           location.pathname === "/monthlydonor";

        const isTeamActive =
           location.pathname === "/executiveboard" ||
           location.pathname === "/foundingmembers" ||
           location.pathname === "/ourmembers" ||
           location.pathname === "/edustaff" ||
           location.pathname === "/supportstaff";

return (    
    
    <header className="toolbar">
        <nav className="toolbar-navigation">            
            <div className="toolbar-logo">
                <NavLink to="/" exact activeClassName="active-link" > <Logo src={CainWhiteLogo}/> </NavLink>
            </div>
            <div className="spacer"/>
            <div className="toolbar-navigation-items">
                <NavLink to="/home" activeClassName="active-link">Home</NavLink>
                <NavLink to="/who-we-are" activeClassName="active-link">About Us</NavLink>
                <NavLink to="/projects" activeClassName="active-link">Programs</NavLink>
                <span className="dropdown">
                <span className={`dropbtn ${isResourcesActive ? "active-link" : ""}`}>Resources</span>
                    <span className="dropdown-content">
                        <NavLink to="/gallery" className="dropDownNavLink" activeClassName="active-link" >Gallery</NavLink>
                        <span className="dropdown">
                            <span className="dropbtn dropDownNavLink">Consent Forms</span>
                            <span className="dropdown-content">
                                <NavLink to="/parental-consent-form" className="dropDownNavLink" activeClassName="active-link">Parental Consent Form</NavLink>
                                <NavLink to="/volunteer-consent-form" className="dropDownNavLink" activeClassName="active-link">Volunteer Consent Form</NavLink>
                            </span>
                        </span>
                        <NavLink to="/beavolunteer" className="dropDownNavLink" activeClassName="active-link">Volunteer with Us</NavLink>
                         <NavLink to="/monthlydonor" className="dropDownNavLink" activeClassName="active-link">Become a Monthly Donor</NavLink>
                    </span>
                </span>
                <NavLink to="/partners-sponsors" activeClassName="active-link">Partners & Sponsors</NavLink>
                <span className="dropdown">
                <span className={`dropbtn ${isTeamActive ? "active-link" : ""}`}>Team</span>
                    <span className="dropdown-content">
                        <NavLink to="/executiveboard" className="dropDownNavLink" activeClassName="active-link" >Board of Trustees</NavLink>
                        <NavLink to="/foundingmembers" className="dropDownNavLink" activeClassName="active-link" >Founding Members</NavLink>
                        <NavLink to="/ourmembers" className="dropDownNavLink" activeClassName="active-link" >Management Staff</NavLink>
                        <NavLink to="/edustaff" className="dropDownNavLink" activeClassName="active-link" >Educational Staff</NavLink>
                        <NavLink to="/supportstaff" className="dropDownNavLink" activeClassName="active-link" >Support Staff</NavLink>
                    </span>
                </span>
                <NavLink to="/digitally-her">Digitally Her</NavLink>
                <NavLink to="/donate">
                    <button className="donateButton">
                        Donate
                    </button>
                </NavLink>
            </div>
            <div>
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
        </nav>
    </header>
)
}
export default Toolbar;