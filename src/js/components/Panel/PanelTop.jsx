import React from 'react/addons';
import cx from 'classnames';

class PanelTop extends React.Component {
  render() {
    const cn = cx('Panel-top', {
      'Panel-top--medallion': this.props.medallion
    });
    return (
        <div className={cn}>
          <div className="Panel-top-title">
            {this.props.title}
          </div>
        </div>
    );
  }
}


PanelTop.propTypes = {
  title: React.PropTypes.string.isRequired,
  medallion: React.PropTypes.string
};

export default PanelTop;
