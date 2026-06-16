import { useNavigate } from "react-router-dom";
import CompanyDashboard from "../../components/Dashboard/Dashboard";
import "./DashboardPage.css";

export default function DashboardPage() {
  const navigate = useNavigate();

  const usuario = JSON.parse(localStorage.getItem("usuario_logado") || "{}");

  function handleLogout() {
  sessionStorage.removeItem("usuario_logado"); 
  navigate("/"); 
}

  return (
    <CompanyDashboard
      usuario={usuario}
      onLogout={handleLogout}
    />
  );
}