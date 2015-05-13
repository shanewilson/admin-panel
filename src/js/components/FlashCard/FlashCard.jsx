require('./FlashCard.css');

import React from 'react/addons';
import cx from 'classnames';

import RemovableComponent from '../RemovableComponent.js';
import { Flex, Row, Column } from '../Grid';

class FlashCard extends React.Component {
  constructor() {
    super();
    this.state = {};
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

  render() {
    const classNames = cx('FlashCard', this.state.className);

    return (
      <Flex>
        <Row className={classNames}>
          <div className="FlashCard-image">
            {this.props.image}
          </div>
          <Column className="FlashCard-content">
            <div className="FlashCard-value">
              {this.props.value}
            </div>
            <div className="FlashCard-title">
              {this.props.title}
            </div>
          </Column>
          <i onClick={this.props.handleRemoval} className="fa fa-remove FlashCard-close">
          </i>
        </Row>
      </Flex>
    );
  }
}

FlashCard.propTypes = {
  image: React.PropTypes.element.isRequired,
  title: React.PropTypes.node.isRequired,
  value: React.PropTypes.node.isRequired,
  handleRemoval: React.PropTypes.func.isRequired
};

export default RemovableComponent(FlashCard);
