import React from 'react/addons';
import cx from 'classnames';

export default class PanelTop extends React.Component {
  render() {
    const cn = cx('Panel-top', {
      'Panel-top--medallion': this.props.medallion
    });
    return (
        <div className={cn}>
          <div className="Panel-top-title">
            {this.props.title}
          </div>
          {this.props.actions ?
          <div className="Panel-top-actions">
            <i className="fa fa-minus" style={{marginRight:'.3rem'}}></i>
            <i className="fa fa-close"></i>
          </div>
            : ''}
        </div>
    );
  }
}
