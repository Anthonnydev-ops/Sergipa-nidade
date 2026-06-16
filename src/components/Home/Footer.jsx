// Footer.jsx — Home page e Company page
import { useTranslation } from "react-i18next";
import "./Footer.css";

// variant: "public" (padrão) | "company"
function Footer({ variant = "public" }) {
  const { t } = useTranslation();
  if (variant === "company") {
    return (
      <footer className="footer footer--company">
        <div className="footer-content">
          <div className="footer-column">
            <h3>{t("footer.portalEmpresarial")}</h3>
            <p>{t("dashboard.gerencieEstabelecimentos")}</p>
          </div>
          <div className="footer-column">
            <h3>{t("footer.suporteEmpresas")}</h3>
            <p>empresas@sergipanidade.com.br</p>
            <p>(79) 3000-0100</p>
            <p>{t("formulario.horarioPlaceholder")}</p>
          </div>
          <div className="footer-column">
            <h3>{t("footer.linksUteis")}</h3>
            <p>{t("footer.politicaPrivacidade")}</p>
            <p>{t("footer.termosUso")}</p>
            <p>{t("footer.centralAjuda")}</p>
            <p>{t("footer.comoAnunciar")}</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{t("footer.direitosReservadosEmpresa")}</p>
        </div>
      </footer>
    );
  }

  return (
    <footer className="footer footer--public">
      <div className="footer-content">
        <div className="footer-column">
          <h3>{t("footer.sobreSergipanidade")}</h3>
          <p>{t("footer.sobreDesc")}</p>
        </div>
        <div className="footer-column">
          <h3>{t("footer.contato")}</h3>
          <p>Email: contato@sergipanidade.com.br</p>
          <p>{t("formulario.telefone")}: (79) 3000-0000</p>
        </div>
        <div className="footer-column">
          <h3>{t("footer.redesSociais")}</h3>
          <p>Instagram: @sergipanidade</p>
          <p>Facebook: /sergipanidade</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>{t("footer.direitosReservados")}</p>
      </div>
    </footer>
  );
}

export default Footer;