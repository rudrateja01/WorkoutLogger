import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import WorkoutContext from "./context/WorkoutContext.jsx";
import AuthContextProvider from "./context/AuthContext.jsx";


createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <WorkoutContext>
      <App />
    </WorkoutContext>
  </AuthContextProvider>
);
