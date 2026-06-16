// Grid.jsx — Home page
import { useTranslation } from "react-i18next";
import Card from "./Card";
import { EmptyState } from "../ComponentesGlobais";
import "./Grid.css";

function Grid({ items = [], isLogado = false, onVerMais, onAvaliar, onToggleFavorito }) {
  const { t } = useTranslation();
  if (items.length === 0) {
    return <EmptyState message={t("common.nenhumItemEncontrado")} />;
  }
  return (
    <div className="grid">
      {items.map((item) => (
        <Card
          key={item.id}
          item={item}
          isLogado={isLogado}
          onVerMais={onVerMais}
          onAvaliar={onAvaliar}
          onToggleFavorito={onToggleFavorito}
        />
      ))}
    </div>
  );
}

export default Grid;