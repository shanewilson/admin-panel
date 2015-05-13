import React from 'react/addons';
import cx from 'classnames';

export default class PanelTop extends React.Component {
  render() {
    const cn = cx('Panel-top', {
      'Panel-top--minimized': this.props.minimized,
      'Panel-top--medallion': this.props.medallion && !this.props.minimized
    });
    const min = cx('fa fa-chevron-down', {
      'fa-rotate-180': this.props.minimized
    });
    return (
        <div className={cn}>
          <div className="Panel-top-title">
            {this.props.title}
          </div>
          {this.props.actions ?
          <div className="Panel-top-actions">
            <i className={min}
               onClick={this.props.handleMinimize}></i>
            <i className="fa fa-close"
               onClick={this.props.handleRemoval}></i>
          </div>
            : ''}
        </div>
    );
  }
}
