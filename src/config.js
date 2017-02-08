/*global System */
'use strict';

/* if you need any specific jspm config place it here */
System.config({
  transpiler: 'babel',
  packages: {
    '../': {
      defaultExtension: false
    }
  },
  map: {
    // 'react': 'npm:react@15.4.2',
    // 'react-dom': 'npm:react-dom@15.4.2',
    'react-redux': 'npm:react-redux@5.0.2',
    'redux-actions': 'npm:redux-actions@1.2.1',
    'redux-thunk': 'npm:redux-thunk@2.2.0',
    'redux-logger': 'npm:redux-logger@2.8.1',
  }
});
