import * as React from 'react';
import { connect } from 'react-redux';
import './sidebar.scss';

export interface ISidebarProps {
    isAuthenticated: boolean;
    isSideMenuOpen: boolean;
  }

export class Sidebar extends React.Component<ISidebarProps> {

    render() {
        const { isAuthenticated, isSideMenuOpen } = this.props;
        return (
            <div id="wrapper" className={isSideMenuOpen ? 'toggled' : '' }>
                <div id="sidebar-wrapper">
                    <ul className="sidebar-nav">
                        <li className="sidebar-brand">
                            <a href="#">
                                Profile
                            </a>
                        </li>
                        <li>
                            <a href="#">Dashboard</a>
                        </li>
                        <li>
                            <a href="#">Shortcuts</a>
                        </li>
                        <li>
                            <a href="#">Overview</a>
                        </li>
                        <li>
                            <a href="#">Events</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Services</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ sidebar }) => ({
    isOpen: sidebar.isSideMenuOpen
  });

  export default connect(mapStateToProps)(Sidebar);
