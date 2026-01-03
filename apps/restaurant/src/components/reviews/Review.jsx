import { useState } from "react";
import "./Review.css";

const Review = ({ review }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`rv-card ${open ? "open" : ""}`} onClick={() => setOpen(!open)}>
      <div className="rv-top">
        <strong>{review.customer}</strong>
        <span className={`star r${review.rating}`}>★ {review.rating}</span>
      </div>

      <p>{review.comment}</p>

      {open && (
        <div className="rv-meta">
          <span>{review.item}</span>
          <span>{review.orderId}</span>
          <span>{review.date}</span>
        </div>
      )}
    </div>
  );
};

export default Review;
