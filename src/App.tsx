import "@/App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AuthPage from "@/pages/auth/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="auth/:id" element={<AuthPage />} />
        <Route path="*" element={<Navigate to="/auth" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
