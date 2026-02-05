import { Link } from 'react-router-dom';
import './RatingReviews.css';
import SectionHeader from './SectionHeader';
import { FaStar } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";

const RatingReviews = ({ heading = "Ratings and Reviews", icon, rating, reviewsData = [] }) => {
    return (
        <section className='ui-rating-reviews-container'>
            <SectionHeader heading={heading} icon={icon} />
            <div className='ui-rating-reviews-body'>
                <div className='ui-rating-reviews-rating'>
                    <p>Overall Rating</p>
                    <div className="ui-rating-reviews-rating-value">
                        {rating} <FaStar className='ui-rating-reviews-star' aria-hidden="true" />
                    </div>
                </div>

                <div className='ui-rating-reviews-reviews'>
                    <h4>Recent Reviews:</h4>
                    {reviewsData.length > 0 ? (
                        reviewsData.map((row) => (
                            <div key={row.orderId} className='ui-rating-reviews-card'>
                                <div className='ui-rating-reviews-person-info'>
                                    <BsPersonCircle />
                                    <span>{row.name}</span>
                                    <p>
                                        Rated <span>{row.rating}<FaStar className='ui-rating-reviews-star' /></span> for
                                        <Link
                                            to={`/orders/view/${row.orderId}`}
                                            className="ui-rating-reviews-order-link"
                                        >
                                            #{row.orderId}
                                        </Link>
                                    </p>
                                </div>
                                <div className='ui-rating-reviews-content'>
                                    <p>{row.review}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="ui-rating-reviews-no-reviews">No reviews yet.</p>
                    )}
                </div>
            </div>
        </section>
    );
}

export default RatingReviews;