const EmptyState = ({ query }) => {
  return (
    <div className="empty-state">
      <h3>No restaurants found</h3>
      <p>We couldn't find any results for "{query}"</p>
    </div>
  );
};

export default EmptyState;
