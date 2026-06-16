import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./ComponentesGlobais.css";

// ================================ //
//           BOTÕES                 //
// ================================ //

// Botão primário genérico (Entrar, Empresa, etc.)
export function PrimaryButton({ text, icon, onClick, type = "button", disabled = false }) {
  return (
    <button className="btn-primary" type={type} onClick={onClick} disabled={disabled}>
      {icon && <span className="btn-icon">{icon}</span>}
      {text}
    </button>
  );
}

// Botão secundário / outline genérico
export function SecondaryButton({ text, icon, onClick, type = "button", disabled = false }) {
  return (
    <button className="btn-secondary" type={type} onClick={onClick} disabled={disabled}>
      {icon && <span className="btn-icon">{icon}</span>}
      {text}
    </button>
  );
}

// Botão "Ver mais" do card
export function InfoButton({ onClick }) {
  const { t } = useTranslation();
  return (
    <button className="btn-outline btn-info" onClick={onClick}>
      <svg className="icon-info" viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <path strokeWidth="1.9" d="M12 2.5A9.5 9.5 0 0 0 2.5 12a9.5 9.5 0 1 0 19 0A9.5 9.5 0 0 0 12 2.5m-.005 4.222v6.334" />
          <path strokeWidth="1.9" d="M12.044 16.557h-.01" />
        </g>
      </svg>
      {t("common.verMais")}
    </button>
  );
}

// Botão Mapa do card (abre Google Maps)
export function MapButton({ onClick }) {
  const { t } = useTranslation();
  return (
    <button className="btn-outline btn-map" onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9"
          d="m9.697 12.695l-5.271-.91a2.074 2.074 0 0 1-.167-3.941l14.045-4.968a2.075 2.075 0 0 1 2.66 2.66l-4.968 14.318a2.075 2.075 0 0 1-3.981-.205l-.91-5.546a2.075 2.075 0 0 0-1.408-1.408" />
      </svg>
      {t("common.mapa")}
    </button>
  );
}

// Botão Avaliar do card
export function EvaluateButton({ onClick }) {
  const { t } = useTranslation();
  return (
    <button className="btn-avaluate" onClick={onClick}>
      {t("common.avaliar")}
    </button>
  );
}

// Botão Favorito (toggle ❤)
export function FavoriteButton({ active: initialActive = false, onToggle }) {
  const { t } = useTranslation();
  const [active, setActive] = useState(initialActive);
  function handleClick() {
    setActive(!active);
    if (onToggle) onToggle(!active);
  }
  return (
    <button className={`favorite ${active ? "active" : ""}`} onClick={handleClick} aria-label={t("common.favoritar")}>
      {active ? "❤️" : "♡"}
    </button>
  );
}

// Botão de configurações (ícone de engrenagem)
export function ConfigButton({ onClick }) {
  const { t } = useTranslation();
  return (
    <button className="btn-configs" onClick={onClick} aria-label={t("common.configuracoes")}>
      <svg className="icon-configs" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"
          d="M12 8.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7zm7.43 3.5a5.97 5.97 0 0 0-.1-1l2.11-1.65a.5.5 0 0 0 .12-.64l-2-3.46a.5.5 0 0 0-.6-.22l-2.49 1a6.07 6.07 0 0 0-1.73-1l-.38-2.65a.5.5 0 0 0-.5-.43h-4a.5.5 0 0 0-.5.43l-.38 2.65a6.07 6.07 0 0 0-1.73 1l-2.49-1a.5.5 0 0 0-.6.22l-2 3.46a.5.5 0 0 0 .12.64L4.67 11a5.97 5.97 0 0 0 0 2l-2.11 1.65a.5.5 0 0 0-.12.64l2 3.46a.5.5 0 0 0 .6.22l2.49-1a6.07 6.07 0 0 0 1.73 1l.38 2.65a.5.5 0 0 0 .5.43h4a.5.5 0 0 0 .5-.43l.38-2.65a6.07 6.07 0 0 0 1.73-1l2.49 1a.5.5 0 0 0 .6-.22l2-3.46a.5.5 0 0 0-.12-.64L19.33 13c.07-.33.1-.66.1-1z" />
      </svg>
    </button>
  );
}

// ================================ //
//           INPUTS                 //
// ================================ //

// Input simples (searchbar interna, etc.)
export function Input({ type = "text", placeholder, value, onChange, onKeyDown }) {
  return (
    <input
      className="input"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
}

// Input com label, ícone e slot direito (formulários)
export function InputField({ label, icon, type = "text", placeholder, value, onChange, required, rightSlot }) {
  return (
    <div className="g-form-group">
      {(label || icon) && (
        <div className="g-label-icon-row">
          {label && <label className="g-label">{label}</label>}
          {icon && <span className="g-input-icon-label">{icon}</span>}
        </div>
      )}
      <div className="g-input-wrapper">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className="g-input"
        />
        {rightSlot && <span className="g-input-right">{rightSlot}</span>}
      </div>
    </div>
  );
}

// Textarea (formulário da empresa)
export function InputTextarea({ label, placeholder, value, onChange, required }) {
  return (
    <div className="g-form-group">
      {label && <label className="g-label">{label}</label>}
      <textarea
        className="g-textarea"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        rows={4}
      />
    </div>
  );
}

// ================================ //
//        OUTROS ELEMENTOS          //
// ================================ //

// Rating badge (⭐ 4.9)
export function RatingBadge({ rating }) {
  return (
    <span className="rating-badge">⭐ {rating}</span>
  );
}

// Título de seção com ícone e subtítulo
export function SectionTitle({ icon, title, subtitle }) {
  return (
    <div className="section-title">
      <div className="section-title-top">
        {icon && <div className="section-icon">{icon}</div>}
        <h1>{title}</h1>
      </div>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}

// Card de estatística do dashboard da empresa
export function StatCard({ label, value, detail }) {
  return (
    <div className="stat-card">
      <p className="stat-label">{label}</p>
      <h2 className="stat-value">{value}</h2>
      {detail && <p className="stat-detail">{detail}</p>}
    </div>
  );
}

// Empty state (favoritos vazio, lista vazia)
export function EmptyState({ message }) {
  const { t } = useTranslation();
  return (
    <div className="empty-state">
      <p>{message || t("common.nenhumItemEncontrado")}</p>
    </div>
  );
}

// Mensagem de erro
export function ErrorMessage({ message }) {
  return (
    <div className="error-message">
      {message}
    </div>
  );
}

// Botão de mostrar/ocultar senha (usado no rightSlot do InputField)
export function PasswordToggle({ show, onToggle }) {
  const { t } = useTranslation();
  return (
    <button type="button" className="btn-olho" onClick={onToggle} aria-label={show ? t("common.ocultarSenha") : t("common.mostrarSenha")}>
      {show ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/>
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
        </svg>
      )}
    </button>
  );
}

// Mensagem de sucesso ou erro (usado nos formulários de login)
export function Mensagem({ texto, tipo }) {
  if (!texto) return null;
  return (
    <div className={`mensagem mensagem--${tipo}`}>
      {texto}
    </div>
  );
}

// Caixa de teste com credenciais (remover antes de entregar)
export function TestBox({ linhas = [] }) {
  return (
    <div className="test-box">
      {linhas.map((linha, i) => <p key={i}>{linha}</p>)}
    </div>
  );
}

// Modal genérico com overlay
export function Modal({ isOpen, onClose, children }) {
  const { t } = useTranslation();
  if (!isOpen) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label={t("common.fechar")}>✕</button>
        {children}
      </div>
    </div>
  );
}

export function GradeButton({ onClick, active }) {
  const { t } = useTranslation();
  return (
    <button className={`btn-grade ${active ? "btn-grade--active" : ""}`} onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9"
          d="M8.557 2.75H4.682A1.932 1.932 0 0 0 2.75 4.682v3.875a1.942 1.942 0 0 0 1.932 1.942h3.875a1.942 1.942 0 0 0 1.942-1.942V4.682A1.942 1.942 0 0 0 8.557 2.75m10.761 0h-3.875a1.942 1.942 0 0 0-1.942 1.932v3.875a1.943 1.943 0 0 0 1.942 1.942h3.875a1.942 1.942 0 0 0 1.932-1.942V4.682a1.932 1.932 0 0 0-1.932-1.932m0 10.75h-3.875a1.942 1.942 0 0 0-1.942 1.933v3.875a1.942 1.942 0 0 0 1.942 1.942h3.875a1.942 1.942 0 0 0 1.932-1.942v-3.875a1.932 1.932 0 0 0-1.932-1.932M8.557 13.5H4.682a1.943 1.943 0 0 0-1.932 1.943v3.875a1.932 1.932 0 0 0 1.932 1.932h3.875a1.942 1.942 0 0 0 1.942-1.932v-3.875a1.942 1.942 0 0 0-1.942-1.942" />
      </svg>
      {t("common.grade")}
    </button>
  );
}

export function MapViewButton({ onClick, active }) {
  const { t } = useTranslation();
  return (
    <button className={`btn-mapa ${active ? "btn-mapa--active" : ""}`} onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9"
          d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934a1.12 1.12 0 0 1-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689A1.125 1.125 0 0 0 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934a1.12 1.12 0 0 1 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
      </svg>
      {t("common.mapa")}
    </button>
  );
}