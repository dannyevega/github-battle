const React = require('react');
const Popular = require('./Popular');
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;
const Nav = require('./Nav');
const Home = require('./Home');
const Battle = require('./Battle');
const Results = require('./Results');

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/battle' component={Battle} />
            <Route path='/battle/results' component={Results} />
            <Route path='/popular' component={Popular} />
            <Route render={function(){
              return <p>Not Found</p>
            }} />         
          </Switch>
        </div>
      </Router>
    )
  }
}

module.exports = App;

// Using Switch -- instead of rendering all of the routes that are active (within the Switch Component), Switch is only going to render one specific route --> Basically, if neither one of the routes provided in out Router component are hit, we can assume an invalid URL was entered and need to show the user an error or 404 page