// EstablishmentForm.jsx — Company page
// Modo "add" (cadastrar) ou "edit" (editar) controlado pela prop `mode` e `initialData`
import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { InputField, InputTextarea, PrimaryButton, SecondaryButton } from "../ComponentesGlobais";
import LanguageSwitcher from "../../traducoes/LanguageSwitcher";
import Footer from "../Home/Footer";
import logo from "../../assets/logo.png";
import "./Formulario.css";

const CATEGORIAS = ["Hotel", "Restaurante", "Shopping", "Outro"];

function EstablishmentForm({ mode = "add", initialData = {}, onSave, onCancel, onLogout }) {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    nome: initialData.nome || "",
    categoria: initialData.categoria || "",
    descricao: initialData.descricao || "",
    endereco: initialData.endereco || "",
    telefone: initialData.telefone || "",
    horario: initialData.horario || "",
  });

  const [imagem, setImagem] = useState(initialData.imagem || null);
  const [imagemPreview, setImagemPreview] = useState(initialData.imagem || null);
  const [imagemErro, setImagemErro] = useState("");
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);

  function handleChange(field) {
    return (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));
  }

  function handleImageChange(file) {
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setImagemErro(t("formulario.erroImagemInvalida"));
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setImagemErro(t("formulario.erroImagemTamanho"));
      return;
    }
    setImagemErro("");
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagem(reader.result);
      setImagemPreview(reader.result);
    };
    reader.readAsDataURL(file);
  }

  function handleDrag(e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") setDragActive(true);
    else if (e.type === "dragleave") setDragActive(false);
  }

  function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageChange(e.dataTransfer.files[0]);
    }
  }

  function handleRemoveImage() {
    setImagem(null);
    setImagemPreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!imagem) {
      setImagemErro(t("formulario.erroImagemObrigatoria"));
      return;
    }
    if (onSave) onSave({ ...form, imagem });
  }

  const isEdit = mode === "edit";

  return (
    <div className="form-layout">
      <header className="company-navbar">
        <div className="company-navbar__logo">
          <img src={logo} alt="Logo Sergipanidade" />
          <span>SERGIPANIDADE</span>
          <LanguageSwitcher />
        </div>

        <button className="company-navbar__btn-sair" onClick={onLogout}>
          ← {t("dashboard.sair")}
        </button>
      </header>

      <div className="form-page-wrapper">
      
      <div className="form-page">
      <div className="form-header">
        <button className="form-back" onClick={onCancel}>← {t("common.voltar")}</button>
        <h2>{isEdit ? t("dashboard.editEstabelecimento") : t("dashboard.addEstabelecimento")}</h2>
      </div>

      <form className="establishment-form" onSubmit={handleSubmit}>
        <p className="form-subtitle">{t("formulario.preenchaInformacoes")}</p>

        <div className="form-row">
          <InputField
            label={t("formulario.nomeEstabelecimento")}
            placeholder={t("formulario.nomePlaceholder")}
            value={form.nome}
            onChange={handleChange("nome")}
            required
          />
          <div className="g-form-group">
            <label className="g-label">{t("formulario.categoria")}</label>
            <select
              className="g-input g-select"
              value={form.categoria}
              onChange={handleChange("categoria")}
              required
            >
              <option value="">{t("formulario.selecioneCategoria")}</option>
              {CATEGORIAS.map((cat) => (
                <option key={cat} value={cat}>{t(`formulario.categorias.${cat}`)}</option>
              ))}
            </select>
          </div>
        </div>

        <InputTextarea
          label={t("formulario.descricao")}
          placeholder={t("formulario.descricaoPlaceholder")}
          value={form.descricao}
          onChange={handleChange("descricao")}
          required
        />

        <InputField
          label={t("formulario.endereco")}
          placeholder={t("formulario.enderecoPlaceholder")}
          value={form.endereco}
          onChange={handleChange("endereco")}
          required
        />

        <div className="form-row">
          <InputField
            label={t("formulario.telefone")}
            placeholder={t("formulario.telefone")}
            value={form.telefone}
            onChange={handleChange("telefone")}
          />
          <InputField
            label={t("formulario.horario")}
            placeholder={t("formulario.horarioPlaceholder")}
            value={form.horario}
            onChange={handleChange("horario")}
          />
        </div>

        {/* Upload de Imagem */}
        <div className="g-form-group">
          <label className="g-label">{t("formulario.imagemEstabelecimento")}</label>
          <div
            className={`image-upload-area${dragActive ? " image-upload-area--drag" : ""}${imagemErro ? " image-upload-area--error" : ""}`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="image-upload-input"
              onChange={(e) => handleImageChange(e.target.files[0])}
            />
            {imagemPreview ? (
              <div className="image-preview-container">
                <img src={imagemPreview} alt="Preview" className="image-preview" />
                <button
                  type="button"
                  className="image-remove-btn"
                  onClick={(e) => { e.stopPropagation(); handleRemoveImage(); }}
                  aria-label={t("formulario.removerImagem")}
                >
                  ✕
                </button>
              </div>
            ) : (
              <div className="image-upload-placeholder">
                <div className="image-upload-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21 15 16 10 5 21"/>
                  </svg>
                </div>
                <p className="image-upload-text">{t("formulario.uploadPlaceholder")}</p>
                <p className="image-upload-hint">{t("formulario.uploadHint")}</p>
              </div>
            )}
          </div>
          {imagemErro && <p className="image-upload-error">{imagemErro}</p>}
        </div>

        <div className="form-actions">
          <SecondaryButton text={t("common.cancelar")} onClick={onCancel} type="button" />
          <PrimaryButton text={isEdit ? t("common.atualizar") : t("common.salvar")} type="submit" />
        </div>
            </form>
    </div>
  </div>
  <Footer variant="company" />
    </div>
  );
}

export default EstablishmentForm;