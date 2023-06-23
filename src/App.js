import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';

import routes from './router';
import { HashRouter } from 'react-router-dom/cjs/react-router-dom.min';

import HYAppheader from 'components/app-header';
import HYAppfooter from 'components/app-footer';


const App = memo(() => {
  return (
    <HashRouter>
      <HYAppheader/>
      { renderRoutes(routes) }
      <HYAppfooter/>
    </HashRouter>
  )
})

export default App
