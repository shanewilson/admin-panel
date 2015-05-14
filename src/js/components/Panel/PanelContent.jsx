import React from 'react/addons';

export default class PanelContent extends React.Component {
  render() {
    return (
      <div className="Panel-content">
        {this.props.medallion ?
          <div className="Panel-content-medallion">
            <i className={this.props.medallion}></i>
          </div>
          : ''}
        {this.props.children}
      </div>
    );
  }
}


PanelContent.propTypes = {
  children: React.PropTypes.node.isRequired,
  medallion: React.PropTypes.string
};

export default PanelContent;
