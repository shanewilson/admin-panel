import React from 'react';

import {Home, Logout} from '../../components/LinkTo.jsx';
import NavBar from '../../components/NavBar.jsx';

import AuthenticatedComponent from '../../components/AuthenticatedComponent.jsx';

class SiteNav extends React.Component {
  render() {
    return (
        <NavBar>
          Hello, {this.props.user ? this.props.user : '?'}
          {this.props.user ? (
              <ul>
                <li><Home /></li>
                <li><Logout /></li>
              </ul>
          ) : ''}
        </NavBar >
    );
  }
}

export default AuthenticatedComponent(SiteNav);
