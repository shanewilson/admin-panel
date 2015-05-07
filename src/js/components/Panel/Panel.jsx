require('./Panel.css');

import React from 'react/addons';

import PanelTop from './PanelTop.jsx';
import PanelContent from './PanelContent.jsx';

export default class Panel extends React.Component {
  render() {
    return (
        <div className="Panel">
          { this.props.title ?
            <PanelTop {...this.props} />
            : ''}
          <PanelContent {...this.props} />
        </div>
    );
  }
}
