import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Footer, Navbar } from './Components';
import { HomePage, AboutPage, RoomPage, SingleRoomPage, ErrorPage } from './Page';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route exact path="/rooms" component={RoomPage} />
        <Route path="/room/:skud" component={SingleRoomPage} />
        <Route path="*" component={ErrorPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
