import { Route, BrowserRouter as Router } from "react-router-dom";
import UserCard from "./components/UserCard";
import "./App.css";
import useFetchdata from "./Hooks/useFetchdata";
import { Badge, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import UserDetails from "./components/UserDetails";
import ErrorCard from "./components/Error";

function App() {
  const { users, error } = useFetchdata();

  return (
    <div className="App">
      <form className="myInput">
        <input type="text" placeholder="Search.." className="Input" name="search"/>
        <Button className="button">Search</Button>
      </form>
    <Router>
      {error ? (
        <ErrorCard error={error} />
      ) : (
        <div className="container">
          <Route exact path="/">
            <UserCard users={users} />
          </Route>
          <Route path="/users/:id">
            <UserDetails users={users} />
          </Route>
        </div>
      )}
    </Router>
    </div>
  );
}

export default App;