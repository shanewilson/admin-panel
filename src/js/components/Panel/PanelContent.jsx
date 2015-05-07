import React from 'react/addons';

export default class PanelContent extends React.Component {
  render() {
    return (
      <div className="Panel-content">
        {this.props.medallion ?
          <div className="Panel-top-medallion">
            {this.props.medallion}
          </div>
          : ''}
        {this.props.children}
      </div>
    );
  }
}
