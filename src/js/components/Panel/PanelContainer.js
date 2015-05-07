import React from 'react/addons';

import Panel from './Panel.jsx';

export default class PanelContainer extends React.Component {
  render() {
    return <Panel {...this.props} />;
  }
}
