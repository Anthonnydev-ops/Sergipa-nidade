// EstablishmentModal.jsx — Home page
// estado: "detalhe" | "avaliacao"
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
import { SecondaryButton, PrimaryButton } from "../ComponentesGlobais";
import "./Modal.css";

function EstablishmentModal({ item, isLogado = false, onClose }) {
  const { t, i18n } = useTranslation();
  const [estado, setEstado] = useState("detalhe");
  const [nota, setNota] = useState(0);
  const [hover, setHover] = useState(0);
  const [comentario, setComentario] = useState("");
  const [enviado, setEnviado] = useState(false);

  // Seleção de campos traduzidos conforme o idioma
  const lang = i18n.language;
  const titulo = (lang === "en" ? item.nome_en : lang === "es" ? item.nome_es : item.nome) || item.nome;
  const descricaoExpandida = (lang === "en" ? item.descricaoExpandida_en : lang === "es" ? item.descricaoExpandida_es : item.descricaoExpandida) || item.descricaoExpandida;

  function abrirMapa() {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.endereco)}`;
    window.open(url, "_blank");
  }

  function handleEnviarAvaliacao(e) {
    e.preventDefault();
    // Salva no localStorage
    const avaliacoes = JSON.parse(localStorage.getItem("avaliacoes") || "[]");
    avaliacoes.push({ itemId: item.id, nota, comentario, data: new Date().toISOString() });
    localStorage.setItem("avaliacoes", JSON.stringify(avaliacoes));
    setEnviado(true);
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="est-modal" onClick={(e) => e.stopPropagation()}>

        {/* Header do modal */}
        <div className="est-modal__header">
          <div className="est-modal__tabs">
            <button
              className={`tab-btn ${estado === "detalhe" ? "tab-btn--active" : ""}`}
              onClick={() => setEstado("detalhe")}
            >
              {t("modal.detalhes")}
            </button>
            <button
              className={`tab-btn ${estado === "avaliacao" ? "tab-btn--active" : ""}`}
              onClick={() => { if (isLogado) setEstado("avaliacao"); }}
              disabled={!isLogado}
              title={!isLogado ? t("modal.facaLoginAvaliar") : ""}
            >
              {t("common.avaliar")}
            </button>
          </div>
          <button className="modal-close" onClick={onClose} aria-label={t("common.fechar")}>✕</button>
        </div>

        {/* Estado: Detalhe */}
        {estado === "detalhe" && (
          <div className="est-modal__body">
            {item.imagem && (
              <img src={item.imagem} alt={titulo} className="est-modal__img" />
            )}
            <div className="est-modal__info">
              <div className="est-modal__title-row">
                <h2>{titulo}</h2>
                <span className="est-modal__rating">⭐ {item.nota}</span>
              </div>
              <p className="est-modal__desc">{descricaoExpandida}</p>
              <ul className="est-modal__details">
                {item.endereco && (
                  <li><FaMapMarkerAlt className="detail-icon" /> {item.endereco}</li>
                )}
                {item.telefone && (
                  <li><FaPhoneAlt className="detail-icon" /> {item.telefone}</li>
                )}
                {item.horario && (
                  <li><FaClock className="detail-icon" /> {item.horario}</li>
                )}
              </ul>
              <div className="est-modal__actions">
                <SecondaryButton text={t("modal.verNoMapa")} onClick={abrirMapa} />
                {isLogado && (
                  <PrimaryButton text={t("common.avaliar")} onClick={() => setEstado("avaliacao")} />
                )}
              </div>
            </div>
          </div>
        )}

        {/* Estado: Avaliação */}
        {estado === "avaliacao" && (
          <div className="est-modal__body">
            {enviado ? (
              <div className="avaliacao-sucesso">
                <p>✅ {t("modal.avaliacaoEnviada")}</p>
                <SecondaryButton text={t("common.voltar")} onClick={() => { setEstado("detalhe"); setEnviado(false); }} />
              </div>
            ) : (
              <form className="avaliacao-form" onSubmit={handleEnviarAvaliacao}>
                <h2>{t("common.avaliar")}: {titulo}</h2>
                <div className="estrelas">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <button
                      key={i}
                      type="button"
                      className={`estrela ${i <= (hover || nota) ? "estrela--ativa" : ""}`}
                      onMouseEnter={() => setHover(i)}
                      onMouseLeave={() => setHover(0)}
                      onClick={() => setNota(i)}
                      aria-label={t("modal.estrela", { count: i })}
                    >
                      ★
                    </button>
                  ))}
                </div>
                <div className="g-form-group">
                  <label className="g-label">{t("modal.comentarioOpcional")}</label>
                  <textarea
                    className="g-textarea"
                    placeholder={t("modal.conteExperiencia")}
                    value={comentario}
                    onChange={(e) => setComentario(e.target.value)}
                    rows={4}
                  />
                </div>
                <div className="avaliacao-actions">
                  <SecondaryButton text={t("common.cancelar")} type="button" onClick={() => setEstado("detalhe")} />
                  <PrimaryButton text={t("modal.enviarAvaliacao")} type="submit" disabled={nota === 0} />
                </div>
              </form>
            )}
          </div>
        )}

      </div>
    </div>
  );
}

export default EstablishmentModal;