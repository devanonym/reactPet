import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { logout } from 'app/shared/reducers/authentication';
import { sideMenuClose } from 'app/shared/layout/sidebar/sidebar.reducer';

export interface ILogoutProps {
  logout: Function;
  sideMenuClose: Function;
}

export class Logout extends React.Component<ILogoutProps> {
  componentWillMount() {
    this.props.logout();
    this.props.sideMenuClose();
  }

  render() {
    return (
      <div className="p-5">
        <h4>Logged out successfully!</h4>
        <Redirect
          to={{
            pathname: '/'
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = storeState => ({});

const mapDispatchToProps = { logout, sideMenuClose };

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
