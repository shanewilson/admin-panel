require('./Panel.css');

import React from 'react/addons';

import RemovableComponent from '../RemovableComponent.js';

import { Flex } from '../Grid';
import PanelTop from './PanelTop.jsx';
import PanelContent from './PanelContent.jsx';

class Panel extends React.Component {
  constructor() {
    super();

    this.state = {
      minimized: false
    };

    this.handleMinimize = this.handleMinimize.bind(this);
  }

  componentWillEnter(callback) {
    console.log('componentWillEnter');
    setTimeout(callback, 1000);
  }

  componentDidEnter() {
    console.log('componentDidEnter');
    this.setState({className: ['animated', 'fadeInUp']});
  }

  componentWillLeave(callback) {
    console.log('componentWillLeave');
    this.setState({className: ['animated', 'fadeOutDown']});
    setTimeout(callback, 1000);
  }

  componentDidLeave() {
    console.log('componentDidLeave');
    this.setState({className: ['hidden']});
  }

  handleMinimize() {
    this.setState({minimized: !this.state.minimized});
  }

  render() {
    this.state.minimized = this.props.minimized || this.state.minimized;

    return (
      <Flex>
        <div className="Panel">
          { this.props.title ?
            <PanelTop
              handleMinimize={this.handleMinimize}
              {...this.props}
              {...this.state}
              />
            : ''}
          { !this.state.minimized ?
            <PanelContent {...this.props} />
            : ''}
        </div>
      </Flex>
    );
  }
}

export default RemovableComponent(Panel);
