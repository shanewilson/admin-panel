import AppDispatcher from '../../dispatcher/AppDispatcher';
import Constants from './FlyoutConstants.js';

export default {
  open: function(content) {
    AppDispatcher.dispatch({
      actionType: Constants.FLYOUT_OPEN,
      content: content
    });
  },

  close: function() {
    AppDispatcher.dispatch({
      actionType: Constants.FLYOUT_CLOSE
    });
  }
};
