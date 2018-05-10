import './app.scss';

import * as React from 'react';
import { connect } from 'react-redux';
import { Card } from 'reactstrap';
import { HashRouter as Router } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import { getSession } from 'app/shared/reducers/authentication';
import { getProfile } from 'app/shared/reducers/application-profile';
import { sideMenuToggle } from 'app/shared/layout/sidebar/sidebar.reducer';
import Sidebar from 'app/shared/layout/sidebar/sidebar';
import Header from 'app/shared/layout/header/header';
import Footer from 'app/shared/layout/footer/footer';
import { hasAnyAuthority } from 'app/shared/auth/private-route';
import { AUTHORITIES } from 'app/config/constants';
import AppRoutes from 'app/routes';

export interface IAppProps {
  isAuthenticated: boolean;
  isAdmin: boolean;
  ribbonEnv: string;
  isInProduction: boolean;
  isSwaggerEnabled: boolean;
  getSession: Function;
  getProfile: Function;
  isSideMenuOpen: boolean;
  sideMenuToggle: Function;
}

export class App extends React.Component<IAppProps> {
  componentDidMount() {
    this.props.getSession();
    this.props.getProfile();
  }

  render() {
    const paddingTop = '60px';
    return (
      <Router>
        <div>
          <Sidebar
              isAuthenticated={this.props.isAuthenticated}
              isSideMenuOpen={this.props.isSideMenuOpen}
          />
          <div className="app-container" style={{ paddingTop }}>
            <ToastContainer position={toast.POSITION.BOTTOM_CENTER} />
            <Header
              isAuthenticated={this.props.isAuthenticated}
              isAdmin={this.props.isAdmin}
              ribbonEnv={this.props.ribbonEnv}
              isInProduction={this.props.isInProduction}
              isSwaggerEnabled={this.props.isSwaggerEnabled}
              isSideMenuOpen={this.props.isSideMenuOpen}
              sideMenuToggle={this.props.sideMenuToggle}
            />
            <div id="page-content-wrapper">
              <div className="container-fluid view-container" id="app-view-container">
                <Card className="jh-card">
                  <AppRoutes />
                </Card>
                <Footer/>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ authentication, applicationProfile, sidebar }) => ({
  isSideMenuOpen: sidebar.isSideMenuOpen,
  isAuthenticated: authentication.isAuthenticated,
  isAdmin: hasAnyAuthority(authentication.account.authorities, [AUTHORITIES.ADMIN]),
  ribbonEnv: applicationProfile.ribbonEnv,
  isInProduction: applicationProfile.inProduction,
  isSwaggerEnabled: applicationProfile.isSwaggerEnabled
});

const mapDispatchToProps = { getSession, getProfile, sideMenuToggle };

export default connect(mapStateToProps, mapDispatchToProps)(App);
