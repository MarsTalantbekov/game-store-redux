import { useReducer } from "react";
import { BrowserRouter as Router, 
  Switch, 
  Route, 
  Link } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux";
import Header from "./components/Header/Header"
import HomePage from "./pages/Home-Page/HomePage";
import GamePage from './pages/GamePage/GamePage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/app/:title">
              <GamePage />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
