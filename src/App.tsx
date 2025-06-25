import HomePage from "./pages/Homepage";
import LoginPage from "./pages/Login";
import { useAuth } from "./contexts/AuthContext";
import "./App.css";

function App() {
  const { user }: any = useAuth();

  return <>{user ? <HomePage /> : <LoginPage />}</>;
}

export default App;
