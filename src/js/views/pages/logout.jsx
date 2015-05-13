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
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '75vh'}}>
        <div style={{width: '50vw'}}>
          <Panel title="Logged Out">
            <div style={{'alignSelf': 'center', padding: '2rem'}}>
              You are now logged out. Go <Home />.
            </div>
          </Panel>
        </div>
      </div>
    );
  }
}
