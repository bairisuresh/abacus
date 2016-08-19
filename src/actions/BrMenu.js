import {ROUTE_CHANGED} from './const';

module.exports = function(route) {
  return { type: ROUTE_CHANGED, route };
};
