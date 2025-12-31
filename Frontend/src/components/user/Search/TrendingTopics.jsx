const TRENDING = ["Pizza", "Burger", "Biryani", "Paneer"];

const TrendingTopics = () => {
  return (
    <div className="trending">
      <h3>Trending</h3>
      <div className="chips">
        {TRENDING.map((item, i) => (
          <span key={i} className="chip">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TrendingTopics;
