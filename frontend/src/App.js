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
import Delivery from "./pages/Delivery";

// import Request from './pages/Request'
function App() {
  const { user } = useAuthContext();
  return (
    <BrowserRouter>
      <Routes>
        {/*      
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login_new />} />
        <Route path="/signup" element={<Signup_new />} /> */}
        {/* <Route path="/payment" element={<Payment />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/delivery" element={<Delivery />} /> */}

        <Route
          path="/project"
          element={user ? <Project /> : <Navigate to="/login" />}
        />
        <Route
          path="/project/FruitsAndVegetables"
          element={<FruitsAndVegetables />}
        />
        <Route
          path="/project/ApparelLifestyle"
          element={<ApparelLifestyle />}
        />
        <Route
          path="/project/CleaningEssentials"
          element={<CleaningEssentials />}
        />
        <Route path="/project/BabyCare" element={<BabyCare />} />
        <Route
          path="/project/PetCareEssentials"
          element={<PetCareEssentials />}
        />
        <Route path="/project/Beverages" element={<Beverages />} />
        <Route
          path="/payment"
          element={user ? <Payment /> : <Navigate to="/login" />}
        />
        <Route
          path="/cart"
          element={user ? <Cart /> : <Navigate to="/login" />}
        />
        <Route
          path="/delivery"
          element={user ? <Delivery /> : <Navigate to="/login" />}
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
