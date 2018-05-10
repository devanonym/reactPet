import * as React from 'react';
import { connect } from 'react-redux';
import { NavLink as Link } from 'react-router-dom';

import { sideMenuClose } from 'app/shared/layout/sidebar/sidebar.reducer';

export interface ISidebarProps {
    title: string;
    to: string;
    sideMenuClose: any;
  }

export class SidebarLink extends React.Component<ISidebarProps> {

    render() {
        const { title, to } = this.props;
        return (
            <Link to={to} onClick={this.props.sideMenuClose}>{title}</Link>
        );
    }
}

const mapDispatchToProps = { sideMenuClose };

export default connect(null, mapDispatchToProps)(SidebarLink);
