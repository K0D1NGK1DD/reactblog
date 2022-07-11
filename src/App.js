import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import WritePost from './components/WritePost';
import AllPosts from './components/AllPosts';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
        <Redirect from='/WritePost' to='/SignUp' />
          <Route exact path='/' component={Home}>
            <Home />
          </Route>

          <Route exact path='/SignUp' component={SignUp}>
            <SignUp /> 
          </Route>

          <Route exact path='/LogIn' component={LogIn}>
            <LogIn />
          </Route>

          <Route exact path='/WritePost' component={WritePost}>
            <WritePost />
          </Route>

          <Route exact path='/AllPosts' component={AllPosts}>
            <AllPosts />
          </Route>

          <Route component={NotFound}>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
