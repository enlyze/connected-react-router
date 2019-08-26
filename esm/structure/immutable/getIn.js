/* Code from github.com/erikras/redux-form by Erik Rasmussen */
import { isCollection } from 'immutable';
import plainGetIn from '../plain/getIn';

var getIn = function getIn(state, path) {
  return isCollection(state) ? state.getIn(path) : plainGetIn(state, path);
};

export default getIn;