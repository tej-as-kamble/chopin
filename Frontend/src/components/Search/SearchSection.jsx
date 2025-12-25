import TrendingTopics from "./TrendingTopics";
import SearchResults from "./SearchResults";
import EmptyState from "./EmptyState";

const SearchSection = ({ searched, query, results }) => {
  if (!searched) {
    return <TrendingTopics />;
  }

  if (results.length === 0) {
    return <EmptyState query={query} />;
  }

  return <SearchResults query={query} results={results} />;
};

export default SearchSection;
