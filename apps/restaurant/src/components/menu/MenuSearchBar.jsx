import { useNavigate, useSearchParams } from "react-router-dom";
import { FiSearch, FiX } from "react-icons/fi";
import { useEffect, useState } from "react";
import "./MenuSearchBar.css";

const MenuSearchBar = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const [query, setQuery] = useState(params.get("q") || "");

  useEffect(() => {
    setQuery(params.get("q") || "");
  }, [params]);

  const handleSearch = () => {
    if (!query.trim()) return;
    navigate(`/menu/search?q=${query}`);
  };

  const handleClear = () => {
    setQuery("");
  };

  return (
    <div className="rm-menu-search">
      <div className="rm-menu-search-group">
        <div className="rm-menu-search-input">
          <FiSearch className="rm-search-icon" />

          <input
            type="text"
            placeholder="Search menu items..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />

          {query && (
            <button className="rm-clear-btn" onClick={handleClear}>
              <FiX />
            </button>
          )}
        </div>

        <button className="rm-search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>


      <button
        className="rm-add-item-btn"
        onClick={() => navigate("add")}
      >
        + Add New Item
      </button>
    </div>
  );
};

export default MenuSearchBar;
