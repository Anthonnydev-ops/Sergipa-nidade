// Card.jsx — Home page
import { useTranslation } from "react-i18next";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaStar, FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import {
  InfoButton,
  MapButton,
  EvaluateButton,
  FavoriteButton,
  RatingBadge,
} from "../ComponentesGlobais";
import "./Card.css";

function Card({ item, isLogado = false, onVerMais, onAvaliar, onToggleFavorito }) {
  const { t, i18n } = useTranslation();
  
  // Seleção de campos traduzidos conforme o idioma
  const lang = i18n.language;
  const titulo = (lang === "en" ? item.nome_en : lang === "es" ? item.nome_es : item.nome) || item.nome;
  const descricao = (lang === "en" ? item.descricao_en : lang === "es" ? item.descricao_es : item.descricao) || item.descricao;

  function abrirMapa() {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.endereco)}`;
    window.open(url, "_blank");
  }

  function handleFavorito(e) {
    e.stopPropagation();
    onToggleFavorito && onToggleFavorito(item.id);
  }

  return (
    <div className="card">
      <div className="card-img">
        <img src={item.imagem} alt={titulo} />

        {/* Botão de favorito — sempre visível; se não logado, abre modal de login */}
        <button
          className={`card-favorito-btn ${item.isFavorito ? "card-favorito-btn--ativo" : ""}`}
          onClick={handleFavorito}
          aria-label={item.isFavorito ? t("common.removerFavoritos") : t("common.adicionarFavoritos")}
          title={!isLogado ? t("common.facaLoginFavoritar") : item.isFavorito ? t("common.removerFavoritos") : t("common.favoritar")}
        >
          {item.isFavorito
            ? <FaHeart size={18} color="#ef4444" />
            : <FiHeart size={18} color="#fff" />}
        </button>
      </div>

      <div className="card-content">
        <div className="card-header">
          <h3>{titulo}</h3>
          {/* Média de avaliações com ícone FaStar */}
          <span className="card-rating">
            <FaStar className="card-rating__star" />
            <span className="card-rating__numero">
              {item.notaFormatada ?? item.avaliacao?.toFixed(1) ?? "—"}
            </span>
          </span>
        </div>

        <p className="descricao">{descricao}</p>

        <ul className="info-list">
          {item.endereco && (
            <li><FaMapMarkerAlt className="info-icon" /> {item.endereco}</li>
          )}
          {item.telefone && (
            <li><FaPhoneAlt className="info-icon" /> {item.telefone}</li>
          )}
          {item.horario && (
            <li><FaClock className="info-icon" /> {item.horario}</li>
          )}
        </ul>

        <InfoButton onClick={() => onVerMais && onVerMais(item)} />

        <div className="card-actions">
          <MapButton onClick={abrirMapa} />
          <EvaluateButton onClick={() => onAvaliar && onAvaliar(item)} />
        </div>
      </div>
    </div>
  );
}

export default Card;