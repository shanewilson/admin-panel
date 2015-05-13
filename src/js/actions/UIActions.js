import AppDispatcher from '../dispatcher/AppDispatcher';
import UIConstants from '../constants/UIConstants';

export default {
  flyoutOpen: function(content) {
    AppDispatcher.dispatch({
      actionType: UIConstants.UI_FLYOUT_OPEN,
      content: content
    });
  },
  flyoutClose: function() {
    AppDispatcher.dispatch({
      actionType: UIConstants.UI_FLYOUT_CLOSE
    });
  },

  toastAdd: function(content) {
    AppDispatcher.dispatch({
      actionType: UIConstants.UI_TOAST_ADD,
      content: content
    });
  },
  toastRemove: function(key) {
    AppDispatcher.dispatch({
      actionType: UIConstants.UI_TOAST_REMOVE,
      key: key
    });
  },
  toastExpire: function(key) {
    AppDispatcher.dispatch({
      actionType: UIConstants.UI_TOAST_EXPIRE,
      key: key
    });
  }
};
