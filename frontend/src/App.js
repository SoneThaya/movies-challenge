import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import NominatePage from "./pages/NominatePage";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/movie/:imdbID" component={MoviePage} />
          <Route exact path="/nominations/:id" component={NominatePage} />
          <Route exact path="/login" component={LoginPage} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
