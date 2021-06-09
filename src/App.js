import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Footer, Navbar } from './Components';
import { HomePage, AboutPage, RoomPage, SingleRoomPage, ErrorPage } from './Page';
import PrivateRoute from './Page/PrivateRoute';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <PrivateRoute exact={true} path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route exact path="/rooms" component={RoomPage} />
        <Route exact path="/rooms/:slug" component={SingleRoomPage} />
        <Route path="*" component={ErrorPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
