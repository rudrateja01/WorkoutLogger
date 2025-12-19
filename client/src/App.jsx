import {BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom";
import Home from "./pages/Home/Home"
import Navbar  from "./components/Navbar/Navbar"
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import { useAuthContext } from "./Hooks/useAuthContext";

function App() {
  const {user} = useAuthContext();
  return (
    <div className="menu">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={user ? <Home/> : <Navigate to="/login"/>  }></Route>
          <Route path="/login" element={!user ? <Login/> : <Navigate to="/"/>}></Route>
          <Route path="/signup" element={!user ? <Signup/> : <Navigate to="/login"/>}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
