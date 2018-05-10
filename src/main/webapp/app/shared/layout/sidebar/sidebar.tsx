import './sidebar.scss';

import * as React from 'react';
import { connect } from 'react-redux';
import { NavLink as Link } from 'react-router-dom';

import SidebarLink from './sidebar.link';

export interface ISidebarProps {
    isAuthenticated: boolean;
    isSideMenuOpen: boolean;
  }

export default class Sidebar extends React.Component<ISidebarProps> {

    render() {
        const { isAuthenticated, isSideMenuOpen } = this.props;
        return (
            <div id="wrapper" className={isSideMenuOpen && isAuthenticated ? 'toggled' : '' }>
                <div id="sidebar-wrapper">
                    <ul className="sidebar-nav">
                        <li className="sidebar-brand">
                            <a href="#">
                                User Details
                            </a>
                        </li>
                        <li>
                            <SidebarLink to="/admin/user-management" title="User management"/>
                        </li>
                        <li>
                            <SidebarLink to="/entity/pet" title="Pet"/>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
