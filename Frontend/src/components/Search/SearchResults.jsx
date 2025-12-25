import RestaurantCard from "./RestaurantCard";

const SearchResults = ({ query, results }) => {
  return (
    <div className="search-results">
      <h3>
        Results for "<span>{query}</span>"
      </h3>

      <div className="restaurant-grid">
        {results.map(r => (
          <RestaurantCard key={r.id} data={r} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
