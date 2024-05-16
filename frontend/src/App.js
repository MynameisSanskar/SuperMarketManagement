import { useAuthContext } from "./hooks/useAuthContext";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { Button } from "flowbite-react";
import Login_new from "./pages/Login_new";
import Signup_new from "./pages/Signup_new";
import HomePage from "./pages/HomePage";
import Project from "./pages/Project"; // Import your Project component here
import FruitsAndVegetables from "./pages/FruitsAndVegetables";
import ApparelLifestyle from "./pages/ApparelLifestyle";
import BabyCare from "./pages/BabyCare";
import CleaningEssentials from "./pages/CleaningEssentials";
import PetCareEssentials from "./pages/PetCareEssentials";
import Beverages from "./pages/Beverages";
import Payment from "./pages/Payment";
import Cart from "./pages/Cart";

// import Request from './pages/Request'
function App() {
  const { user } = useAuthContext();
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={user ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/signup"
          element={!user ? <Signup_new /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={!user ? <Login_new /> : <Navigate to="/" />}
        />
        {/* Add a Route for Project.jsx */}
        <Route
          path="/project"
          element={user ? <Project /> : <Navigate to="/login" />}
        />
        <Route
          path="/project/FruitsAndVegetables"
          element={ <FruitsAndVegetables /> }
        />
        <Route
          path="/project/ApparelLifestyle"
          element={ <ApparelLifestyle /> }
        />
        <Route
          path="/project/CleaningEssentials"
          element={ <CleaningEssentials /> }
        />
        <Route
          path="/project/BabyCare"
          element={ <BabyCare /> }
        />
        <Route
          path="/project/PetCareEssentials"
          element={ <PetCareEssentials /> }
        />
        <Route
          path="/project/Beverages"
          element={ <Beverages /> }
        />
        <Route
          path="/payment"
          element={user ? <Payment /> : <Navigate to="/login" />}
        />
        <Route
          path="/Cart"
          element={user ? <Cart /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

const LoginWrapper = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Logic for handling login
    // After successful login, navigate to homepage
    navigate("/homepage");
  };

  return <Login_new onLogin={handleLogin} />;
};

export default App;
