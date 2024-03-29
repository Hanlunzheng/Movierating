import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Auth from "./pages/auth/Auth";
import Home from "./pages/home/Home";
import Movies from "./pages/movies/Movies";
import TvShows from "./pages/tvshows/TvShows";
import Rate from "./pages/rated/Rate";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/rated" element={<Rate />} />
          <Route path="/movie/:id" element={<Movies />} />
          <Route path="/tvshow/:id" element={<TvShows />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
