import React from 'react/addons';

import AuthenticatedRoute from '../../components/AuthenticatedRoute.jsx';

import Panel from '../../components/Panel';
import {Home} from '../../components/LinkTo.jsx';

export default class e404 extends React.Component {
  render() {
    return (
      <div style={{flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{width: '50vw', alignSelf: 'center'}}>
          <Panel title="404 - PAGE NOT FOUND" medallion={<i className='fa fa-question'></i>}>
            <div style={{'alignSelf': 'center', padding: '2rem'}}>
              Requested page could not be found. Go <Home />.
            </div>
          </Panel>
        </div>
      </div>
    );
  }
}

export default AuthenticatedRoute(e404);
