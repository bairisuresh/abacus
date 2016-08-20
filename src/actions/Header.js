import {NAVIGATE_SETTINGS, NAVIGATE_ALERTS, NAVIGATE_HOME} from './const'; 

module.exports = {
	  		navigateToSettings : function(data){
	  			return { type: NAVIGATE_SETTINGS, data };	
	  		}, 
			navigateToAlerts : function(data){
				return { type: NAVIGATE_ALERTS, data };
			}, 
			navigateToHome : function(data){
				return { type: NAVIGATE_HOME, data };
			}
		}

