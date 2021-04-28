import AnotherPage from './pages/another-page.js'
import Index from './pages/index.js'
import PageAfterIndex from './pages/page-after-index.js'
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<div>
  <AnotherPage/>
  <Index/>
  <PageAfterIndex/>
</div>, document.getElementById('container'));
