import './App.css';
import Sidebar from './components/sidebar';
import {BrowserRouter as Router, Switch, Route}  from 'react-router-dom';
import Overview from './components/pages/Overview';
import { Reports, Reports1, Reports2  } from './components/pages/Reports';

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path='/overview' exact component={Overview}/>
        <Route path='/reports/reports1' exact component={Reports}/>
        <Route path='/reports/reports2' exact component={Reports1}/>
        <Route path='/reports/reports3' exact component={Reports2}/>
      </Switch>
    </Router>
    
  );
}

export default App;
