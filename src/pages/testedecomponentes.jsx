import { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../traducoes/LanguageSwitcher";

// Componentes Globais
import {
  PrimaryButton, SecondaryButton, InfoButton, MapButton, EvaluateButton,
  FavoriteButton, GradeButton, MapViewButton, ConfigButton, Input, InputField,
  InputTextarea, RatingBadge, SectionTitle, StatCard, EmptyState, ErrorMessage,
  PasswordToggle, Mensagem, TestBox
} from "../components/ComponentesGlobais";

// Componentes Dashboard
import CompanyDashboard from "../components/Dashboard/Dashboard";
import EstablishmentForm from "../components/Dashboard/Formulario";

// Componentes Home
import Card from "../components/Home/Card";
import Footer from "../components/Home/Footer";
import Grid from "../components/Home/Grid";
import HeroSection from "../components/Home/HeroSection";
import EstablishmentModal from "../components/Home/Modal";
import Navbar from "../components/Home/Navbar";
import SearchBar from "../components/Home/Searchbar";

const itemTeste = {
  id: 1,
  titulo: "Mangai Sergipe",
  descricao: "Buffet de comida nordestina",
  endereco: "Av. Delmiro Gouveia, 400 - Coroa do Meio, Aracaju - SE",
  telefone: "(79) 3214-5678",
  horario: "11h30 - 15h30 | 18h30 - 22h30",
  nota: 4.9,
  imagem: "https://via.placeholder.com/300x180",
};

const styles = {
  page: { padding: "24px", fontFamily: "Arial", background: "#f9fafb" },
  title: { marginBottom: "20px" },
  section: { marginBottom: "40px", padding: "16px", background: "#fff", borderRadius: "12px", border: "1px solid #e5e7eb" },
  row: { display: "flex", gap: "10px", marginTop: "10px", flexWrap: "wrap" },
};

export default function TesteDeComponentes() {
  const { t } = useTranslation();
  const [categoriaAtiva, setCategoriaAtiva] = useState("todos");
  const [busca, setBusca] = useState("");
  const [modalAberto, setModalAberto] = useState(false);

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>🧪 Component Playground</h1>

      {/* TRADUÇÃO */}
      <section style={styles.section}>
        <h2>Tradução / Translation</h2>
        <LanguageSwitcher />
        <div style={{ marginTop: "12px" }}>
          <p><strong>home.exploreSergipe:</strong> {t('home.exploreSergipe')}</p>
          <p><strong>home.discoverBestPlaces:</strong> {t('home.discoverBestPlaces')}</p>
          <p><strong>home.hotels:</strong> {t('home.hotels')}</p>
          <p><strong>home.restaurants:</strong> {t('home.restaurants')}</p>
          <p><strong>home.others:</strong> {t('home.others')}</p>
          <p><strong>search results.favAdded:</strong> {t('search results.messages.favAdded')}</p>
        </div>
      </section>

      {/* BOTÕES */}
      <section style={styles.section}>
        <h2>Buttons</h2>
        <div style={styles.row}>
          <PrimaryButton text="Primary" />
          <SecondaryButton text="Secondary" />
          <InfoButton />
          <MapButton />
          <EvaluateButton />
          <FavoriteButton />
          <GradeButton active={true} />
          <MapViewButton active={false} />
          <ConfigButton />
        </div>
      </section>

      {/* INPUTS */}
      <section style={styles.section}>
        <h2>Inputs</h2>
        <Input placeholder="Input simples" />
        <InputField label={t("auth.email")} placeholder={t("auth.emailPlaceholder")} />
        <InputTextarea label={t("formulario.descricao")} placeholder={t("formulario.descricaoPlaceholder")} />
        <InputField
          label={t("auth.password")}
          type="password"
          placeholder={t("auth.passwordPlaceholder")}
          rightSlot={<PasswordToggle show={false} onToggle={() => {}} />}
        />
      </section>

      {/* FEEDBACK / UI */}
      <section style={styles.section}>
        <h2>Feedback / UI</h2>
        <RatingBadge rating={4.8} />
        <SectionTitle title="Título de seção" subtitle="Subtítulo exemplo" />
        <StatCard label={t("dashboard.totalVisualizacoes")} value="1.245" detail="+12% este mês" />
        <EmptyState />
        <ErrorMessage message="Algo deu errado!" />
        <Mensagem texto="Login realizado com sucesso!" tipo="sucesso" />
        <Mensagem texto="Senha incorreta." tipo="erro" />
        <TestBox linhas={["Email: turista@teste.com", "Senha: 123456"]} />
      </section>

      {/* HERO + SEARCHBAR + NAVBAR */}
      <section style={styles.section}>
        <h2>Hero / Search / Navbar</h2>
        <HeroSection />
        <SearchBar value={busca} onChange={(e) => setBusca(e.target.value)} onSearch={() => {}} />
        <Navbar active={categoriaAtiva} onSelect={setCategoriaAtiva} />
      </section>

      {/* CARD + GRID + MODAL */}
      <section style={styles.section}>
        <h2>Card / Grid / Modal</h2>
        <Card item={itemTeste} isLogado={false} onVerMais={() => setModalAberto(true)} onAvaliar={() => {}} />
        <Grid
          items={[itemTeste, { ...itemTeste, id: 2 }, { ...itemTeste, id: 3 }]}
          isLogado={false}
          onVerMais={() => setModalAberto(true)}
          onAvaliar={() => {}}
        />
        {modalAberto && (
          <EstablishmentModal item={itemTeste} isLogado={false} onClose={() => setModalAberto(false)} />
        )}
      </section>

      {/* FOOTER */}
      <section style={styles.section}>
        <h2>Footer</h2>
        <Footer variant="public" />
        <Footer variant="company" />
      </section>

      {/* DASHBOARD + FORMULÁRIO */}
      <section style={styles.section}>
        <h2>Dashboard / Formulário</h2>
        <CompanyDashboard
          usuario={{ nome: "Hotel Jatiúca", email: "hotel@teste.com" }}
          onLogout={() => {}}
        />
        <EstablishmentForm mode="add" onSave={(form) => console.log(form)} onCancel={() => {}} />
      </section>
    </div>
  );
}