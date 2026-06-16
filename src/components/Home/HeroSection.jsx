// HeroSection.jsx — Home page
import { useTranslation } from "react-i18next";
import "./HeroSection.css";

function HeroSection() {
  const { t } = useTranslation();
  return (
    <section className="hero">
      <h1 className="hero-title">{t("home.exploreSergipe")} </h1>
    </section>
  );
}

export default HeroSection;

