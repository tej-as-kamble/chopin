import { lazy } from "react";
import "./RestaurantHome.css";

import RestaurantNavbar from "@/components/RestaurantNavbar";
import RestaurantHero from "@/components/home/RestaurantHero";
import WhyPartner from "@/components/home/WhyPartner";
import HowItWorks from "@/components/home/HowItWorks";
import TrainingSupport from "@/components/home/TrainingSupport";
import SupportTrust from "@/components/home/SupportTrust";
import RestaurantFAQ from "@/components/home/RestaurantFAQ";

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
