import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./banner.css";

import gif1 from "../assets/animacao.gif";
import gif2 from "../assets/colina.gif";
import gif3 from "../assets/mercado.gif";
import solImg from "../assets/sol.png";
import chapeuImg from "../assets/chapeu.png";

const gifs = [gif1, gif2, gif3];

export default function Banner({ activeFilter = "todos" }) {
  const { t } = useTranslation();
  const [abrirModal, setAbrirModal] = useState(false);
  const [index, setIndex] = useState(0);

 
  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prev) => (prev + 1) % gifs.length);
    }, 3000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <>
      <div className="banner-container">
        <div className="banner">
          {/* Stickers decorativos */}
          {activeFilter === "todos" && (
            <>
              <img src={solImg} alt="Sol" className="sticker sticker-sol" />
              <img src={chapeuImg} alt="Chapéu" className="sticker sticker-chapeu" />
            </>
          )}

          
          <div className="banner-left">
            <img src={gifs[index]} alt="preview" />
            <span className="tag">@Sergipanidade</span>
          </div>

      
          <div className="divider"></div>

          
          <div className="banner-right">
            <h1>
              {t("banner.title").split("\n").map((line, i) => (
                <span key={i}>{line}<br /></span>
              ))}
            </h1>

            <button
              className="btn-banner"
              onClick={() => setAbrirModal(true)}
            >
              {t("banner.button")}
            </button>
          </div>
        </div>
      </div>

      
      {abrirModal && (
        <div
          className="modal-overlay"
          onClick={() => setAbrirModal(false)}
        >
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{t("banner.loginRequired")}</h2>
            <p>{t("banner.loginRequiredDesc")}</p>

            <button
              className="btn-login"
              onClick={() => (window.location.href = "/login")}
            >
              {t("banner.goToLogin")}
            </button>

            <button
              className="btn-fechar"
              onClick={() => setAbrirModal(false)}
            >
              {t("common.fechar")}
            </button>
          </div>
        </div>
      )}
    </>
  );
}