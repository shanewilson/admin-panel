import React from 'react/addons';
import { RouteHandler } from 'react-router';
import cx from 'classnames';

import Header from './views/common/Header.jsx';
import Flyout from './components/Flyout';
import Toasts from './components/Toasts';

import UIStore from './stores/UIStore';
import UIActions from './actions/UIActions';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = this._getUIData();
    this.onUIChange = this.onUIChange.bind(this);
  }

  componentDidMount() {
    UIStore.addChangeListener(this.onUIChange);
  }

  componentWillUnmount() {
    UIStore.removeChangeListener(this.onUIChange);
  }

  _getUIData() {
    return {
      flyoutData: UIStore.getFlyoutData(),
      toastData: UIStore.getToastData()
    };
  }

  onUIChange() {
    this.setState(this._getUIData());
  }



  render() {
    const body = cx('MyApp-body', {
      'MyApp-body--flyout': this.state.flyoutData.get('isOpen')
    });

    return (
      <div className="MyApp">
        <Toasts
          handleClose={UIActions.toastRemove}>
          {this.state.toastData}
        </Toasts>
        <Flyout
          handleClose={UIActions.flyoutClose}
          {...this.state.flyoutData.toJS()}/>
        <div className={body}>
          <Header />
          <RouteHandler />
        </div>
      </div>
    );
  }
}
