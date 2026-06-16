import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };

  const IDIOMAS = [
    { code: "pt", flag: "🇧🇷", label: "Português" },
    { code: "en", flag: "🇺🇸", label: "English" },
    { code: "es", flag: "🇪🇸", label: "Español" },
  ];

  return (
    <div className="language-switcher">
      {IDIOMAS.map(({ code, flag, label }) => (
        <button
          key={code}
          className={`btn-idioma ${i18n.language === code ? "btn-idioma--ativo" : ""}`}
          onClick={() => changeLanguage(code)}
          aria-label={label}
          title={label}
        >
          {flag}
        </button>
      ))}
    </div>
  );
}
