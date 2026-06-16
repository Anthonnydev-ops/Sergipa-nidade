import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FiMail, FiLock } from "react-icons/fi";
import { InputField, PasswordToggle, PrimaryButton, Mensagem, TestBox, Modal } from "../../components/ComponentesGlobais.jsx";
import "./LoginTurista.css";
import { login } from "../../auth/auth.js";
import logoImage from "../../assets/logo.png";

// ─────────────────────────────────────────────
// COMPONENTE: Cabeçalho
// ─────────────────────────────────────────────
function ModalHeader({ logoSrc, title = "SERGIPANIDADE", subtitle, description }) {
  return (
    <div className="tur-modal-header">
      {logoSrc && <img src={logoSrc} alt="Logo" className="tur-logo-img" />}
      <h1 className="tur-logo-title">{title}</h1>
      {subtitle && <h3 className="tur-subtitle">{subtitle}</h3>}
      {description && <p className="tur-desc">{description}</p>}
    </div>
  );
}

// ─────────────────────────────────────────────
// COMPONENTE: Formulário de Login
// ─────────────────────────────────────────────
function FormLogin() {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState({ texto: "", tipo: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const resultado = login(email, senha, "TURISTA");
    if (resultado.success) {
      setMensagem({ texto: resultado.message, tipo: "sucesso" });
      setTimeout(() => navigate("/"), 1000);
    } else {
      setMensagem({ texto: resultado.message, tipo: "erro" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="tur-form">
      <TestBox linhas={["Email: turista@teste.com", "Senha: 123456"]} />
      <InputField
        label={t("auth.email")} icon={<FiMail size={16} />} type="email"
        placeholder={t("auth.emailPlaceholder")} value={email}
        onChange={(e) => setEmail(e.target.value)} required
      />
      <InputField
        label={t("auth.password")} icon={<FiLock size={16} />}
        type={showPassword ? "text" : "password"}
        placeholder={t("auth.passwordPlaceholder")} value={senha}
        onChange={(e) => setSenha(e.target.value)} required
        rightSlot={<PasswordToggle show={showPassword} onToggle={() => setShowPassword(!showPassword)} />}
      />
      <Mensagem texto={mensagem.texto} tipo={mensagem.tipo} />
      <PrimaryButton type="submit" text={t("auth.enter")} />
      <a
        className="tur-forgot-link"
        onClick={(e) => { e.preventDefault(); navigate("/recuperacao"); }}
        href="#"
      >
        {t("auth.forgotPassword")}
      </a>
    </form>
  );
}

// ─────────────────────────────────────────────
// PÁGINA: LoginTurista
// ─────────────────────────────────────────────
export default function LoginTurista() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    setIsOpen(false);
    navigate("/");
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalHeader
        logoSrc={logoImage}
        title="SERGIPANIDADE"
        subtitle={t("auth.touristTitle")}
        description={t("auth.touristDesc")}
      />
      <FormLogin />
    </Modal>
  );
}