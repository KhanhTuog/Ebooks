import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
//css
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/argon-dashboard-pro-react.scss?v1.1.0';
import './assets/vendor/@fortawesome/fontawesome-free/css/all.min.css';
import './assets/vendor/nucleo/css/nucleo.css';

import Homepage from './modules/Homepage';
import SSO from './SSO';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Router>
        <Switch>
          <Route exact path='/userid/:userId/bookid/:bookId' component={SSO} />
          <Route exact path='/:currentPage' component={Homepage} />
          <Redirect from='*' to='/1' />
        </Switch>
      </Router>
    </DndProvider>
  );
}

export default App;
