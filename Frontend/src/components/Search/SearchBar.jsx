import { useMemo } from "react";

const SearchBar = ({ query, setQuery, onSearch, items, searched, setSearched }) => {

    const suggestions = useMemo(() => {
        if (!query) return [];
        const q = query.toLowerCase();
        return items
            .filter(item => item.name.includes(q))
            .map(item => item.name);
    }, [query, items]);

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            onSearch(query);
        }
    };

    return (
        <div className="search-bar-wrapper">
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search for food..."
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                        setSearched(false);
                    }}
                    onKeyDown={handleKeyDown}
                />

                {query && (
                    <button
                        className="clear-btn"
                        onClick={() => {
                            setQuery("");
                            setSearched(false);
                        }}
                    >
                        ✕
                    </button>
                )}
            </div>


            {query && !searched && suggestions.length > 0 && (
                <div className="suggestions">
                    {suggestions.map((s, i) => (
                        <div
                            key={i}
                            className="suggestion-item"
                            onClick={() => onSearch(s)}
                        >
                            {s}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};


export default SearchBar;
