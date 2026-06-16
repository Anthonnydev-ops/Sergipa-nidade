// SearchBar.jsx — Home page
import { useTranslation } from "react-i18next";
import { Input, PrimaryButton } from "../ComponentesGlobais";
import "./Searchbar.css";

function SearchBar({ value, onChange, onSearch }) {
  const { t } = useTranslation();
  function handleKeyDown(event) {
    if (event.key === "Enter") onSearch();
  }

  return (
    <div className="searchbar">
      <Input
        placeholder={t("header.search")}
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />
      <PrimaryButton text={t("common.buscar")} onClick={onSearch} />
    </div>
  );
}

export default SearchBar;