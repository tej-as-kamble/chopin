import React, { useState } from "react";
import { REVIEWS } from "@/data/REVIEWS_DUMMY";
import RatingSummary from "@/components/restaurant-partner/reviews/RatingSummary";
import ReviewsList from "@/components/restaurant-partner/reviews/ReviewsList";
import "./ReviewsPage.css";

const ReviewsPage = () => {
  const [ratingFilter, setRatingFilter] = useState(null);
  const [sortBy, setSortBy] = useState("newest");
  const [timeRange, setTimeRange] = useState("all");

  let filtered = [...REVIEWS];

  if (ratingFilter) {
    filtered = filtered.filter((r) => r.rating === ratingFilter);
  }

  if (sortBy === "highest") filtered.sort((a, b) => b.rating - a.rating);
  if (sortBy === "lowest") filtered.sort((a, b) => a.rating - b.rating);
  if (sortBy === "newest")
    filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="rv-page">
      <RatingSummary
        reviews={REVIEWS}
        onFilter={setRatingFilter}
        activeFilter={ratingFilter}
        timeRange={timeRange}
        setTimeRange={setTimeRange}
      />
      <ReviewsList
        reviews={filtered}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
    </div>
  );
};

export default ReviewsPage;
