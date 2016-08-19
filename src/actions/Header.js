import {NAVIGATE_SETTINGS, NAVIGATE_ALERTS} from './const';

export function navigateToSettings(data) {
	  return { type: NAVIGATE_SETTINGS, data };
	};
export function navigateToAlerts(data){
		return { type: NAVIGATE_ALERTS, data };
	};
