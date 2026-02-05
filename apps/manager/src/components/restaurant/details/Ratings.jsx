import { RatingReviews } from "@chopin/ui-web"
import { GiCrystalGrowth } from "react-icons/gi";


const Ratings = ({ rating, data }) => {
    return (
        <RatingReviews
            heading="Ratings and Reviews"
            icon={<GiCrystalGrowth />}
            rating={rating}
            reviewsData={data}
        />
    )
}

export default Ratings
