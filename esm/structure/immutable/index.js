import { isIndexed, isCollection, fromJS as _fromJS } from 'immutable';
import getIn from './getIn';
var structure = {
  fromJS: function fromJS(jsValue) {
    return _fromJS(jsValue, function (key, value) {
      return isIndexed(value) ? value.toList() : value.toMap();
    });
  },
  getIn: getIn,
  merge: function merge(state, payload) {
    return state.merge(payload);
  },
  toJS: function toJS(value) {
    return isCollection(value) ? value.toJS() : value;
  }
};
export default structure;