import {ROUTE_CHANGED} from './const';

module.exports = function(parameter) {
  return { type: ROUTE_CHANGED, parameter };
};
