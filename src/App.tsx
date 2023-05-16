import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipesPage from "./components/RecipesPage";
import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/SignUpPage";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/sign-in" element={<SignInPage />} />
                    <Route path="/sign-up" element={<SignUpPage />} />
                    <Route path="/recipes" element={<RecipesPage />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
