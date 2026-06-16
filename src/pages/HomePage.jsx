import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FiMail, FiLock, FiHeart, FiUser, FiBriefcase, FiLogOut, FiSearch,
} from "react-icons/fi";
import {
  FaHeart, FaHotel, FaUtensils, FaShoppingBag, FaCompass,
} from "react-icons/fa";
import { estabelecimentos } from "../mocks/mocks";
import SearchBar from "../components/Home/Searchbar";
import Navbar from "../components/Home/Navbar";
import HeroSection from "../components/Home/HeroSection";
import Grid from "../components/Home/Grid";
import Footer from "../components/Home/Footer";
import EstablishmentModal from "../components/Home/Modal";
import Banner from "../components/banner";
import {
  EmptyState,
  Modal,
  InputField,
  PasswordToggle,
  PrimaryButton,
  Mensagem,
  TestBox,
} from "../components/ComponentesGlobais";
import { login } from "../auth/auth.js";
import logoImage from "../assets/logo.png";
import cactoImg from "../assets/cacto.png";
import luaImg from "../assets/lua.png";
import "./HomePage.css";

// ─── Idiomas / bandeiras ───────────────────────────────────────────────────────
const IDIOMAS = [
  { code: "pt", flag: "🇧🇷", label: "Português" },
  { code: "en", flag: "🇺🇸", label: "English" },
  { code: "es", flag: "🇪🇸", label: "Español" },
];

// ─── Mapa de categorias ────────────────────────────────────────────────────────
const CATEGORIAS = ["todos", "hoteis", "restaurantes", "shoppings", "outros"];

const tipoMap = {
  todos: null,
  hoteis: "hotel",
  restaurantes: "restaurante",
  shoppings: "shopping",
  outros: "outro",
};

// ─── Modal de Login Turista ────────────────────────────────────────────────────
function LoginTuristaModal({ onClose, onLoginSucesso, onFavoritarItem, itemParaFavoritar }) {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState({ texto: "", tipo: "" });
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const resultado = login(email, senha, "TURISTA");
    if (resultado.success) {
      setMensagem({ texto: resultado.message, tipo: "sucesso" });
      setTimeout(() => {
        onLoginSucesso("turista");
        if (itemParaFavoritar != null) onFavoritarItem(itemParaFavoritar);
        onClose();
      }, 1000);
    } else {
      setMensagem({ texto: resultado.message, tipo: "erro" });
    }
  }

  return (
    <Modal isOpen={true} onClose={onClose}>
      <div className="tur-modal-header">
        <img src={logoImage} alt="Logo" className="tur-logo-img" />
        <h1 className="tur-logo-title">SERGIPANIDADE</h1>
        <h3 className="tur-subtitle">{t("auth.touristTitle")}</h3>
        <p className="tur-desc">{t("auth.touristDesc")}</p>
      </div>
      <form onSubmit={handleSubmit} className="tur-form">
        <TestBox linhas={["Email: turista@teste.com", "Senha: 123456"]} />
        <InputField
          label={t("auth.email")}
          icon={<FiMail size={16} />}
          type="email"
          placeholder={t("auth.emailPlaceholder")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <InputField
          label={t("auth.password")}
          icon={<FiLock size={16} />}
          type={showPassword ? "text" : "password"}
          placeholder={t("auth.passwordPlaceholder")}
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
          rightSlot={
            <PasswordToggle show={showPassword} onToggle={() => setShowPassword(!showPassword)} />
          }
        />
        <button
          type="button"
          className="link-recuperacao"
          onClick={() => { onClose(); navigate("/recuperacao"); }}
        >
          {t("auth.forgotPassword")}
        </button>
        <Mensagem texto={mensagem.texto} tipo={mensagem.tipo} />
        <PrimaryButton text={t("auth.enter")} type="submit" />
      </form>
    </Modal>
  );
}

// ─── Modal de Login Empresa ────────────────────────────────────────────────────
function LoginEmpresaModal({ onClose, onLoginSucesso }) {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState({ texto: "", tipo: "" });
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const resultado = login(email, senha, "EMPRESA");
    if (resultado.success) {
      setMensagem({ texto: resultado.message, tipo: "sucesso" });
      setTimeout(() => {
        onLoginSucesso("empresa");
        onClose();
        navigate("/dashboard");
      }, 1000);
    } else {
      setMensagem({ texto: resultado.message, tipo: "erro" });
    }
  }

  return (
    <Modal isOpen={true} onClose={onClose}>
      <div className="emp-modal-header">
        <div className="emp-logo-container">
          <img src={logoImage} alt="Logo" className="emp-logo-img" />
          <h1 className="emp-logo-title">SERGIPANIDADE</h1>
        </div>
        <div className="emp-header-text-left">
          <h2 className="emp-modal-title">{t("auth.companyTitle")}</h2>
          <p className="emp-modal-desc">{t("auth.companyDesc")}</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="tur-form">
        <TestBox linhas={["Email: empresa@teste.com", "Senha: 123456"]} />
        <InputField
          label={t("auth.email")}
          icon={<FiMail size={16} />}
          type="email"
          placeholder={t("auth.emailPlaceholder")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <InputField
          label={t("auth.password")}
          icon={<FiLock size={16} />}
          type={showPassword ? "text" : "password"}
          placeholder={t("auth.passwordPlaceholder")}
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
          rightSlot={
            <PasswordToggle show={showPassword} onToggle={() => setShowPassword(!showPassword)} />
          }
        />
        <button
          type="button"
          className="link-recuperacao"
          onClick={() => { onClose(); navigate("/recuperacao"); }}
        >
          {t("auth.forgotPassword")}
        </button>
        <Mensagem texto={mensagem.texto} tipo={mensagem.tipo} />
        <PrimaryButton text={t("auth.enter")} type="submit" />
      </form>
    </Modal>
  );
}

// ─── Componente principal ──────────────────────────────────────────────────────
function HomePage() {
  const { t, i18n } = useTranslation();
  const [categoriaAtiva, setCategoriaAtiva] = useState("todos");
  const [busca, setBusca] = useState("");
  const [termoBuscado, setTermoBuscado] = useState("");
  const [modalItem, setModalItem] = useState(null);
  const [loginAberto, setLoginAberto] = useState(null);
  const [usuarioLogado, setUsuarioLogado] = useState(null);
  const [itemPendenteFavorito, setItemPendenteFavorito] = useState(null);
  const [favoritos, setFavoritos] = useState(() => {
    try { return JSON.parse(localStorage.getItem("favoritos") || "[]"); }
    catch { return []; }
  });

  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  // Respeita idioma salvo no localStorage ao montar
  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang && savedLang !== i18n.language) {
      i18n.changeLanguage(savedLang);
    }
  }, []);

  // ─── Títulos de categoria traduzidos ──────────────────────────────────────
  const tituloCategorias = {
    hoteis: { label: t("hoteis.sectionTitle"), Icon: FaHotel },
    restaurantes: { label: t("restaurantes.sectionTitle"), Icon: FaUtensils },
    shoppings: { label: t("shoppings.sectionTitle"), Icon: FaShoppingBag },
    outros: { label: t("outros.sectionTitle"), Icon: FaCompass },
  };

  // ─── Idioma ───────────────────────────────────────────────────────────────────
  function handleIdiomaClick(code) {
    i18n.changeLanguage(code);
    localStorage.setItem("lang", code);
  }

  // ─── Favoritos ────────────────────────────────────────────────────────────────
  function adicionarOuRemoverFavorito(id) {
    setFavoritos((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  }

  function toggleFavorito(id) {
    if (!usuarioLogado) {
      setItemPendenteFavorito(id);
      setLoginAberto("turista");
      return;
    }
    adicionarOuRemoverFavorito(id);
  }

  // ─── Filtragem ────────────────────────────────────────────────────────────────
  function getItens() {
    if (categoriaAtiva === "favoritos") {
      return estabelecimentos.filter((e) => favoritos.includes(e.id));
    }
    const tipo = tipoMap[categoriaAtiva];
    let lista = tipo
      ? estabelecimentos.filter((e) => e.tipo === tipo)
      : [...estabelecimentos];

    if (termoBuscado.trim()) {
      const termo = termoBuscado.toLowerCase().trim();
      lista = lista.filter(
        (e) =>
          e.nome.toLowerCase().includes(termo) ||
          e.descricao.toLowerCase().includes(termo) ||
          e.endereco.toLowerCase().includes(termo)
      );
    }

    return lista;
  }

  // ─── Handlers ─────────────────────────────────────────────────────────────────
  function handleSearch() {
    setTermoBuscado(busca);
    setCategoriaAtiva("todos");
  }

  function handleSelectCategoria(id) {
    setCategoriaAtiva(id);
    setBusca("");
    setTermoBuscado("");
  }

  function handleFavoritoClick() {
    if (!usuarioLogado) { setLoginAberto("turista"); return; }
    setCategoriaAtiva("favoritos");
    setBusca("");
    setTermoBuscado("");
  }

  function handleAvaliar(item) {
    if (!usuarioLogado) { setLoginAberto("turista"); return; }
    setModalItem(item);
  }

  function handleLoginSucesso(tipo) { setUsuarioLogado(tipo); }

  function handleLogout() {
    setUsuarioLogado(null);
    setCategoriaAtiva("todos");
    setFavoritos([]);
    localStorage.removeItem("favoritos");
  }

  const itens = getItens();
  const isFavoritos = categoriaAtiva === "favoritos";
  const isLogado = !!usuarioLogado;
  const catInfo = tituloCategorias[categoriaAtiva];

  return (
    <div className="homepage">
      {/* ── Header ─────────────────────────────────────────────────────────────── */}
      <header className="homepage__header">
        <div className="homepage__header-inner">
          {/* Logo + nome */}
          <div className="homepage__logo">
            <img src={logoImage} alt="Sergipanidade" className="homepage__logo-img" />
            <span className="homepage__logo-text">SERGIPANIDADE</span>
          </div>

          {/* Barra de busca */}
          <div className="homepage__searchbar">
            <SearchBar
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              onSearch={handleSearch}
              placeholder={t("header.search")}
            />
          </div>

          {/* Bandeiras de idioma */}
          <div className="homepage__idiomas">
            {IDIOMAS.map(({ code, flag, label }) => (
              <button
                key={code}
                className={`btn-idioma ${i18n.language === code ? "btn-idioma--ativo" : ""}`}
                onClick={() => handleIdiomaClick(code)}
                aria-label={label}
                title={label}
              >
                {flag}
              </button>
            ))}
          </div>

          {/* Coração — favoritos */}
          <button
            className={`btn-favoritos-topo ${isFavoritos ? "btn-favoritos-topo--active" : ""}`}
            onClick={handleFavoritoClick}
            aria-label={t("header.favorites")}
            title={!isLogado ? t("header.loginToFavorite") : t("header.favorites")}
          >
            {isFavoritos
              ? <FaHeart size={20} color="#ef4444" />
              : <FiHeart size={20} />}
          </button>

          {/* Login / usuário */}
          <div className="homepage__header-actions">
            {isLogado ? (
              <>
                <span className="homepage__usuario">
                  {usuarioLogado === "turista"
                    ? <><FiUser size={15} /> {t("header.user")}</>
                    : <><FiBriefcase size={15} /> {t("header.company")}</>}
                </span>
                <button className="btn-secondary btn-sair" onClick={handleLogout}>
                  <FiLogOut size={15} /> {t("header.logout")}
                </button>
              </>
            ) : (
              <>
                <button className="btn-primary" onClick={() => setLoginAberto("turista")}>
                  <FiUser size={15} /> {t("header.enter")}
                </button>
                <button className="btn-secondary" onClick={() => setLoginAberto("empresa")}>
                  <FiBriefcase size={15} /> {t("header.company")}
                </button>
              </>
            )}
          </div>
        </div>

        {/* Navbar dentro do header */}
        <Navbar
          active={CATEGORIAS.includes(categoriaAtiva) ? categoriaAtiva : "todos"}
          onSelect={handleSelectCategoria}
        />
      </header>

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      {categoriaAtiva === "todos" && !termoBuscado && <HeroSection />}

      {categoriaAtiva === "todos" && !termoBuscado && <Banner activeFilter={categoriaAtiva} />}

      {/* ── Título dinâmico ───────────────────────────────────────────────── */}
      {(categoriaAtiva !== "todos" || termoBuscado) && (
        <div className="homepage__section-header">
          {isFavoritos ? (
            <>
              <h2 className="homepage__section-title">
                <FaHeart className="section-title-icon section-title-icon--red" />
                {t("home.myFavorites")}
              </h2>
              <p className="homepage__section-sub">
                {itens.length} {t("home.savedPlaces")}
              </p>
            </>
          ) : termoBuscado ? (
            <>
              <h2 className="homepage__section-title">
                <FiSearch className="section-title-icon" />
                {t("home.searchResults")} &ldquo;{termoBuscado}&rdquo;
              </h2>
              <p className="homepage__section-sub">
                {itens.length} {t("home.resultsFound")}
              </p>
            </>
          ) : catInfo && (
            <h2 className="homepage__section-title">
              <catInfo.Icon className="section-title-icon" />
              {catInfo.label}
            </h2>
          )}
        </div>
      )}


      {/* ── Grid de cards ─────────────────────────────────────────────────── */}
      <main className="homepage__main">
        <div className="homepage__main-inner">
          {isFavoritos && itens.length === 0 ? (
            <div className="homepage__favoritos-dica">
              <EmptyState
                icon={<FiHeart size={40} />}
                message={t("home.noFavorites")}
              />
            </div>
          ) : (
            <Grid
              items={itens.map((item) => ({
                ...item,
                notaFormatada: item.avaliacao.toFixed(1),
                isFavorito: isLogado ? favoritos.includes(item.id) : false,
              }))}
              isLogado={isLogado}
              onVerMais={(item) => setModalItem(item)}
              onAvaliar={handleAvaliar}
              onToggleFavorito={toggleFavorito}
            />
          )}
        </div>

        {/* Stickers fixos por categoria */}
        <img src={cactoImg} alt="Cacto" className="home-sticker sticker-cacto" />
        <img src={luaImg} alt="Lua" className="home-sticker sticker-lua" />
      </main>

      {/* ── Modal de estabelecimento ───────────────────────────────────────── */}
      {modalItem && (
        <EstablishmentModal
          item={{
            ...modalItem,
            notaFormatada: modalItem.avaliacao.toFixed(1),
            isFavorito: favoritos.includes(modalItem.id),
          }}
          isLogado={isLogado}
          onClose={() => setModalItem(null)}
          onToggleFavorito={(id) => {
            toggleFavorito(id);
            setModalItem((prev) =>
              prev ? { ...prev, isFavorito: !favoritos.includes(id) } : prev
            );
          }}
          onVerFavoritos={() => {
            setModalItem(null);
            setCategoriaAtiva("favoritos");
          }}
        />
      )}

      {/* ── Modal login turista ────────────────────────────────────────────── */}
      {loginAberto === "turista" && (
        <LoginTuristaModal
          onClose={() => { setLoginAberto(null); setItemPendenteFavorito(null); }}
          onLoginSucesso={handleLoginSucesso}
          itemParaFavoritar={itemPendenteFavorito}
          onFavoritarItem={adicionarOuRemoverFavorito}
        />
      )}

      {/* ── Modal login empresa ────────────────────────────────────────────── */}
      {loginAberto === "empresa" && (
        <LoginEmpresaModal
          onClose={() => setLoginAberto(null)}
          onLoginSucesso={handleLoginSucesso}
        />
      )}

      <Footer />
    </div>
  );
}

export default HomePage;