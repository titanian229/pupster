import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import './App.scss'
import NavBar from './components/NavBar';
// import Header from './components/Header';
import About from './pages/About';
import Discover from './pages/Discover';
import Search from './pages/Search';
import Browse from './pages/Browse';
import Likes from './pages/Likes';
import Messages from './pages/Messages';
import Container from 'react-bootstrap/Container';

const LikesWithRouter = withRouter(Likes)
const NavBarWithRouter = withRouter(NavBar);
const DiscoverWithRouter = withRouter(Discover)

function App() {
    return (
        <Router>
            {/* <Header /> */}
            <NavBarWithRouter className="mr-4" />
            <Container>
                <Route exact path="/" component={About} />
                <Route exact path="/discover" component={DiscoverWithRouter} />
                <Route exact path="/search" component={Search} />
                <Route exact path="/browse" component={Browse} />
                <Route exact path="/likes" component={LikesWithRouter} />
                <Route exact path="/messages" component={Messages} />
            </Container>
        </Router>
    );
}

export default App;
