import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/movie/:imdbID" component={MoviePage} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
