import AppDispatcher from '../../dispatcher/AppDispatcher';
import Constants from './ToastsConstants.js';

export default {
  toast: function(content) {
    AppDispatcher.dispatch({
      actionType: Constants.TOAST_ADD,
      content: content
    });
  },

  remove: function(id) {
    AppDispatcher.dispatch({
      actionType: Constants.TOAST_REMOVE,
      id: id
    });
  }
};
