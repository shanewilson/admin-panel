require('./Panel.css');

import React from 'react/addons';

import { Flex } from '../Grid';
import PanelTop from './PanelTop.jsx';
import PanelContent from './PanelContent.jsx';

class Panel extends React.Component {
  render() {
    return (
      <Flex>
        <div className="Panel">
          <PanelTop {...this.props} />
          <PanelContent {...this.props} />
        </div>
      </Flex>
    );
  }
}


Panel.propTypes = {
  title: React.PropTypes.string.isRequired,
  children: React.PropTypes.node.isRequired,
  medallion: React.PropTypes.string
};

export default Panel;
