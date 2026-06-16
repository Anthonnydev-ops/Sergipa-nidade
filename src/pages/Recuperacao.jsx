import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FiMail, FiArrowLeft } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import { InputField, PrimaryButton, Mensagem, Modal } from
"../components/ComponentesGlobais";
import "./Recuperacao.css";
import logoSergipanidade from "../assets/logo.png";

emailjs.init("OFmCxXHOcRuySoJe9");

// ─────────────────────────────────────────────
// COMPONENTE: Cabeçalho
// ─────────────────────────────────────────────
function RecuperacaoHeader({ logoSrc, title = "SERGIPANIDADE", subtitle, description }) {
  return (
    <div className="rec-header">
      <div className="rec-logo-container">
        {logoSrc && <img src={logoSrc} alt="Logo" className="rec-logo-img" />}
        <h1 className="rec-logo-title">{title}</h1>
      </div>
      {subtitle && <h2 className="rec-modal-title">{subtitle}</h2>}
      {description && <p className="rec-modal-desc">{description}</p>}
    </div>
  );
}

// ─────────────────────────────────────────────
// COMPONENTE: Botão fantasma (voltar)
// ─────────────────────────────────────────────
export function GhostButton({ children, onClick, icon }) {
  return (
    <button type="button" className="g-btn-ghost" onClick={onClick}>
      {icon && icon}
      {children}
    </button>
  );
}

// ─────────────────────────────────────────────
// COMPONENTE: Formulário de recuperação
// ─────────────────────────────────────────────
function FormRecuperacao() {
  const { t } = useTranslation();
  const [email, setEmail]       = useState("");
  const [loading, setLoading]   = useState(false);
  const [mensagem, setMensagem] = useState({ texto: "", tipo: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setMensagem({ texto: t("auth.digiteEmailValido"), tipo: "erro" });
      return;
    }
    setLoading(true);
    const templateParams = {
      to_email: email,
      message: "Você solicitou a recuperação de senha no portal Sergipanidade.",
    };
    emailjs
      .send("service_iw0xk2c", "template_mgoiai8", templateParams, "OFmCxXHOcRuySoJe9")
      .then(() => {
        setMensagem({
          texto: t("auth.mensagemRecuperacao"),
          tipo: "sucesso",
        });
        setEmail("");
        setTimeout(() => navigate("/"), 3000);
      })
      .catch(() => {
        setMensagem({
          texto: t("auth.erroEnviar"),
          tipo: "erro",
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <form onSubmit={handleSubmit} className="rec-form">
      <InputField
        label={t("auth.email")}
        icon={<FiMail size={16} />}
        type="email"
        placeholder={t("auth.emailCadastrado")}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Mensagem texto={mensagem.texto} tipo={mensagem.tipo} />
      <div className="rec-actions">
        {/* text= em vez de children, compatível com PrimaryButton */}
        <PrimaryButton
          type="submit"
          text={loading ? t("auth.enviando") : t("auth.enviarLink")}
          disabled={loading}
        />
        <GhostButton icon={<FiArrowLeft size={16} />} onClick={() => navigate(-1)}>
          {t("auth.voltarLogin")}
        </GhostButton>
      </div>
    </form>
  );
}

// ─────────────────────────────────────────────
// PÁGINA: Recuperacao
// ─────────────────────────────────────────────
export default function Recuperacao() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    setIsOpen(false);
    navigate(-1);
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <RecuperacaoHeader
        logoSrc={logoSergipanidade}
        title="SERGIPANIDADE"
        subtitle={t("auth.recuperarSenha")}
        description={t("auth.digiteEmailRecuperacao")}
      />
      <FormRecuperacao />
    </Modal>
  );
}