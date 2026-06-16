// Navbar.jsx — Home page
// Barra de categorias: Todos / Hotéis / Restaurantes / Shoppings / Outros
import { useTranslation } from "react-i18next";
import "./Navbar.css";

const NAV_ITEMS = [
  {
    id: "todos",
    labelKey: "navbar.todos",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    id: "hoteis",
    labelKey: "navbar.hoteis",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="1" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="12.01" strokeWidth="3" />
        <line x1="8" y1="12" x2="8" y2="12.01" strokeWidth="3" />
        <line x1="16" y1="12" x2="16" y2="12.01" strokeWidth="3" />
      </svg>
    ),
  },
  {
    id: "restaurantes",
    labelKey: "navbar.restaurantes",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
        <path d="M7 2v20" />
        <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
      </svg>
    ),
  },
  {
    id: "shoppings",
    labelKey: "navbar.shoppings",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
  {
    id: "outros",
    labelKey: "navbar.outros",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" strokeWidth="3" />
      </svg>
    ),
  },
];

function Navbar({ active, onSelect }) {
  const { t } = useTranslation();
  return (
    <nav className="navbar" role="navigation" aria-label={t("common.categorias")}>
      {NAV_ITEMS.map((item) => (
        <button
          key={item.id}
          className={`nav-btn ${active === item.id ? "nav-btn--active" : ""}`}
          aria-current={active === item.id ? "page" : undefined}
          onClick={() => onSelect(item.id)}
        >
          <span className="nav-btn__icon" aria-hidden="true">{item.icon}</span>
          {t(item.labelKey)}
        </button>
      ))}
    </nav>
  );
}

export default Navbar;