import "./RatingSummary.css";

const RatingSummary = ({
  reviews,
  onFilter,
  activeFilter,
  timeRange,
  setTimeRange,
}) => {
  const avg =
    reviews.reduce((a, b) => a + b.rating, 0) / reviews.length;

  return (
    <aside className="rv-summary">
      <div className="rv-score">
        <h1>{avg.toFixed(1)}</h1>
        <p>⭐ Overall Rating</p>
      </div>

      <div className="rv-time">
        <button
          className={timeRange === "30" ? "active" : ""}
          onClick={() => setTimeRange("30")}
        >
          30 Days
        </button>
        <button
          className={timeRange === "all" ? "active" : ""}
          onClick={() => setTimeRange("all")}
        >
          All Time
        </button>
      </div>

      {[5, 4, 3, 2, 1].map((star) => (
        <div
          key={star}
          className={`rv-bar ${activeFilter === star ? "active" : ""}`}
          onClick={() => onFilter(star)}
        >
          <span>{star}★</span>
          <div className="bar">
            <div
              className="fill"
              style={{
                width: `${(reviews.filter((r) => r.rating === star).length /
                    reviews.length) *
                  100
                  }%`,
              }}
            />
          </div>
        </div>
      ))}
    </aside>
  );
};

export default RatingSummary;
