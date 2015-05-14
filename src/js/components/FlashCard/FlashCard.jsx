require('./FlashCard.css');

import React from 'react/addons';
import cx from 'classnames';

import RemovableComponent from '../RemovableComponent.js';
import { Flex, Row, Column } from '../Grid';

class FlashCard extends React.Component {
  render() {
    return (
      <Flex>
        <Row className="FlashCard">
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
        </Row>
      </Flex>
    );
  }
}

FlashCard.propTypes = {
  image: React.PropTypes.element.isRequired,
  title: React.PropTypes.node.isRequired,
  value: React.PropTypes.node.isRequired
};

export default FlashCard;
