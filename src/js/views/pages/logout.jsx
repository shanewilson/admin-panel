import React from 'react/addons';

import AuthActions from '../../actions/AuthActions';

import Panel from '../../components/Panel';
import {Home} from '../../components/LinkTo.jsx';

export default class Logout extends React.Component {
  componentDidMount() {
    AuthActions.logout();
  }

  render() {
    return (
      <div style={{flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{width: '50vw', alignSelf: 'center'}}>
          <Panel title="Logged Out">
            <div style={{'alignSelf': 'center', padding: '2rem'}}>
              You are now logged out. <Home />
            </div>
          </Panel>
        </div>
      </div>
    );
  }
}
