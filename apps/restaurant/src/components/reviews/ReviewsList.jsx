import Review from "./Review";
import "./ReviewsList.css";

const ReviewsList = ({ reviews, sortBy, setSortBy }) => {
  return (
    <div className="rv-list">
      <div className="rv-list-header">
        <h2>Customer Reviews</h2>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="newest">Newest</option>
          <option value="highest">Highest</option>
          <option value="lowest">Lowest</option>
        </select>
      </div>

      <div className="rv-grid">
        {reviews.map((r) => (
          <Review key={r.id} review={r} />
        ))}
      </div>
    </div>
  );
};

export default ReviewsList;
