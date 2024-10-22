import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import TodoPage from "./pages/TodoPage";
import RegisterPage from "./pages/RegisterPage";
import { useEffect, useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // sessionStorage에서 토큰을 확인하여 로그인 여부 판단
    const token = sessionStorage.getItem("token");
    setIsAuthenticated(token);
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={isAuthenticated ? <TodoPage /> : <Navigate to="/login" />}
      />
      <Route path="/register" element={<RegisterPage />} />

      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
