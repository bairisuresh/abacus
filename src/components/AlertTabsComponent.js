'use strict';

import React from 'react';

require('styles//AlertTabs.scss');

class AlertTabsComponent extends React.Component {
  render() {
    return (
      <div className="alerttabs-component">
        Alerts
      </div>
    );
  }
}

AlertTabsComponent.displayName = 'AlertTabsComponent';

// Uncomment properties you need
// AlertTabsComponent.propTypes = {};
// AlertTabsComponent.defaultProps = {};

export default AlertTabsComponent;
