import { Routes, Route } from "react-router-dom";
import './css/App.css';
import MovieCard from "./components/MovieCard.jsx";
import Home from "./pages/Home.jsx";
import Favorites from "./pages/Favorites.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
    return (
        <div>
            <Navbar />
        <main className="main-content">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/favorite" element={<Favorites/>} />
            </Routes>
        </main>
        </div>
    );
}

export default App;
