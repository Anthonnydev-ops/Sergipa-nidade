// CompanyDashboard.jsx — Company page
import { useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "../../assets/logo.png";
import { StatCard, PrimaryButton, SecondaryButton } from "../ComponentesGlobais";
import EstablishmentForm from "./Formulario";
import Footer from "../Home/Footer";
import LanguageSwitcher from "../../traducoes/LanguageSwitcher";
import "./Dashboard.css";

// Ícones
const IconEye = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
  </svg>
);
const IconHeart = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);
const IconStar = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="#f5a822" stroke="#f5a822" strokeWidth="1.5">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);
const IconEdit = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>
);
const IconTrash = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
  </svg>
);

function CompanyDashboard({ usuario, onLogout }) {
  const { t } = useTranslation();
  const [tela, setTela] = useState("dashboard"); // "dashboard" | "add" | "edit"
  const [editando, setEditando] = useState(null);

  // Estabelecimentos salvos no localStorage
  const [estabelecimentos, setEstabelecimentos] = useState(() => {
    const saved = localStorage.getItem(`estabelecimentos_${usuario?.email}`);
    return saved ? JSON.parse(saved) : [
      {
        id: 1,
        nome: "Hotel Jatiúca",
        categoria: "Hotel",
        descricao: "Hotel luxuoso com vista para o mar",
        endereco: "Av. Santos Dumont, 1234 – Atalaia",
        telefone: "(79) 3211-1234",
        horario: "Check-in: 14h | Check-out: 12h",
        visualizacoes: 1250,
        favoritos: 89,
        nota: 4.5,
      },
    ];
  });

  function salvar(lista) {
    setEstabelecimentos(lista);
    localStorage.setItem(`estabelecimentos_${usuario?.email}`, JSON.stringify(lista));
  }

  function handleAdd(form) {
    const novo = { ...form, id: Date.now(), visualizacoes: 0, favoritos: 0, nota: 0 };
    salvar([...estabelecimentos, novo]);
    setTela("dashboard");
  }

  function handleEdit(form) {
    const atualizado = estabelecimentos.map((e) => e.id === editando.id ? { ...e, ...form } : e);
    salvar(atualizado);
    setTela("dashboard");
    setEditando(null);
  }

  function handleDelete(id) {
    if (!window.confirm(t("dashboard.confirmRemover"))) return;
    salvar(estabelecimentos.filter((e) => e.id !== id));
  }

  const totalVisualizacoes = estabelecimentos.reduce((s, e) => s + (e.visualizacoes || 0), 0);
  const totalFavoritos = estabelecimentos.reduce((s, e) => s + (e.favoritos || 0), 0);
  const mediaNotas = estabelecimentos.length
    ? (estabelecimentos.reduce((s, e) => s + (e.nota || 0), 0) / estabelecimentos.length).toFixed(1)
    : "—";

  if (tela === "add") {
    return <EstablishmentForm mode="add" onSave={handleAdd} onCancel={() => setTela("dashboard")} onLogout={onLogout} />;
  }
  if (tela === "edit" && editando) {
    return <EstablishmentForm mode="edit" initialData={editando} onSave={handleEdit} onCancel={() => { setTela("dashboard"); setEditando(null); }} onLogout={onLogout} />;
  }

  return (
  <div className="company-page">

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
     <div className="company-content">
  <div className="company-header">
    <h1 className="company-title">🏢 {t("dashboard.painelEmpresa")}</h1>
    <p className="company-subtitle">{usuario?.nome}</p></div>

        <div className="company-stats">
          <StatCard
            label={t("dashboard.totalVisualizacoes")}
            value={totalVisualizacoes.toLocaleString()}
            detail={t("dashboard.desdeMesPassado", { percent: "+12%" })}
          />
          <StatCard
            label={t("dashboard.totalFavoritos")}
            value={totalFavoritos}
            detail={t("dashboard.desdeMesPassado", { percent: "+20%" })}
          />
          <StatCard
            label={t("dashboard.avaliacaoMedia")}
            value={mediaNotas}
            detail={t("dashboard.baseadoEm", { count: estabelecimentos.length })}
          />
        </div>

        {/* Lista de estabelecimentos */}
        <div className="company-section">
          <div className="company-section__header">
            <div>
              <h2>{t("dashboard.meusEstabelecimentos")}</h2>
              <p>{t("dashboard.gerencieEstabelecimentos")}</p>
            </div>
            <PrimaryButton text={`+ ${t("dashboard.addEstabelecimento")}`} onClick={() => setTela("add")} />
          </div>

          <div className="est-list">
            {estabelecimentos.map((est) => (
              <div key={est.id} className="est-row">
                <div className="est-row__info">
                  <div className="est-row__title-row">
                    <span className="est-row__name">{est.nome}</span>
                    <span className="est-row__category">{t(`formulario.categorias.${est.categoria}`)}</span>
                  </div>
                  <p className="est-row__desc">{est.descricao}</p>
                  <p className="est-row__address">{est.endereco}</p>
                  <div className="est-row__stats">
                    <span><IconEye /> {est.visualizacoes}</span>
                    <span><IconHeart /> {est.favoritos}</span>
                    <span><IconStar /> {est.nota}</span>
                  </div>
                </div>
                <div className="est-row__actions">
                  <SecondaryButton
                    text={t("dashboard.editEstabelecimento")}
                    icon={<IconEdit />}
                    onClick={() => { setEditando(est); setTela("edit"); }}
                  />
                  <button className="btn-delete" onClick={() => handleDelete(est.id)} aria-label={t("dashboard.remover")}>
                    <IconTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer variant="company" />
    </div>
  );
}

export default CompanyDashboard;