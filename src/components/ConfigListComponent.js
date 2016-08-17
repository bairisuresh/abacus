'use strict';

import React from 'react';

require('styles//ConfigList.scss');

class ConfigListComponent extends React.Component {
  render() {
    return (
      <div className="configlist-component">
        Settings
      </div>
    );
  }
}

ConfigListComponent.displayName = 'ConfigListComponent';

// Uncomment properties you need
// ConfigListComponent.propTypes = {};
// ConfigListComponent.defaultProps = {};

export default ConfigListComponent;
