import React from 'react/addons';

import AdminDashboard from './admin/dashboard.jsx';
import UserDashboard from './dashboard.jsx';

import { Column, Row } from '../../components/Grid';

import AuthenticatedComponent from '../../components/AuthenticatedComponent.jsx';
import AuthenticatedRoute from '../../components/AuthenticatedRoute.jsx';

class Home extends React.Component {
  render() {
    return (
      <Row>
        <Column>
          <div className="page-header">
            <h1>
              <i className="fa fa-tachometer"></i>
              Dashboard
            </h1>
          </div>
          {this.props.user === 'admin' ?
            <AdminDashboard /> :
            <UserDashboard />}
        </Column>
      </Row>
    );
  }
}

export default AuthenticatedRoute(AuthenticatedComponent(Home));
