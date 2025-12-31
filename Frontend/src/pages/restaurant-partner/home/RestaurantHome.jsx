import { lazy } from "react";
import "./RestaurantHome.css";

import RestaurantNavbar from "@/components/restaurant-partner/RestaurantNavbar";
import RestaurantHero from "@/components/restaurant-partner/home/RestaurantHero";
import WhyPartner from "@/components/restaurant-partner/home/WhyPartner";
import HowItWorks from "@/components/restaurant-partner/home/HowItWorks";
import TrainingSupport from "@/components/restaurant-partner/home/TrainingSupport";
import SupportTrust from "@/components/restaurant-partner/home/SupportTrust";
import RestaurantFAQ from "@/components/restaurant-partner/home/RestaurantFAQ";

const RestaurantHome = () => {
    return (
        <div className="restp-home">
            <RestaurantNavbar />
            <RestaurantHero />
            <WhyPartner />
            <HowItWorks />
            <TrainingSupport />
            <RestaurantFAQ />
            <SupportTrust />
        </div>
    );
};

export default RestaurantHome;
