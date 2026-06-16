import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FiMail, FiLock } from "react-icons/fi";
import { InputField, PasswordToggle, PrimaryButton, Mensagem, TestBox, Modal } from "../../components/ComponentesGlobais.jsx";
import "./LoginEmpresa.css";
import { login } from "../../auth/auth.js";
import logoImage from "../../assets/logo.png";

// ─────────────────────────────────────────────
// COMPONENTE: Cabeçalho
// ─────────────────────────────────────────────
function ModalHeader({ logoSrc, title = "SERGIPANIDADE", subtitle, description }) {
  return (
    <header className="emp-modal-header">
      <div className="emp-logo-container">
        {logoSrc && <img src={logoSrc} alt="Logo" className="emp-logo-img" />}
        <h1 className="emp-logo-title">{title}</h1>
      </div>
      {subtitle && (
        <div className="emp-header-text-left">
          <h2 className="emp-modal-title">{subtitle}</h2>
          {description && <p className="emp-modal-desc">{description}</p>}
        </div>
      )}
    </header>
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
    const resultado = login(email, senha, "EMPRESA");
    if (resultado.success) {
      setMensagem({ texto: resultado.message, tipo: "sucesso" });
      setTimeout(() => navigate("/dashboard"), 1000);
    } else {
      setMensagem({ texto: resultado.message, tipo: "erro" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="emp-form">
      <TestBox linhas={["Email: empresa@teste.com", "Senha: 123456"]} />
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
      <p
        className="emp-forgot"
        onClick={() => navigate("/recuperacao")}
        style={{ cursor: "pointer" }}
      >
        {t("auth.forgotPassword")}
      </p>
      <Mensagem texto={mensagem.texto} tipo={mensagem.tipo} />
      <PrimaryButton type="submit" text={t("auth.enter")} />
    </form>
  );
}

// ─────────────────────────────────────────────
// PÁGINA: LoginEmpresa
// ─────────────────────────────────────────────
export default function LoginEmpresa() {
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
        subtitle={t("auth.companyTitle")}
        description={t("auth.companyDesc")}
      />
      <FormLogin />
    </Modal>
  );
}