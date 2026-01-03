import React, { useState } from "react";
import "./RestaurantInfoPage.css";

import RestaurantImageHeader from "@/components/settings/restaurant-info/RestaurantImageHeader";
import BasicInfoCard from "@/components/settings/restaurant-info/BasicInfoCard";
import ContactInfoCard from "@/components/settings/restaurant-info/ContactInfoCard";
import AddressInfoCard from "@/components/settings/restaurant-info/AddressInfoCard";
import OperationalInfoCard from "@/components/settings/restaurant-info/OperationalInfoCard";
import PlatformInfoCard from "@/components/settings/restaurant-info/PlatformInfoCard";

import { generateRestaurantInfo } from "@/data/RESTAURANT_INFO_DUMMY";

const RestaurantInfoPage = () => {
    const [data, setData] = useState(generateRestaurantInfo())

    return (
        <div className="ri-page">
            <RestaurantImageHeader
                image={data.image}
                name={data.basic.name}
                outlet={data.basic.outlet}
            />

            <div className="ri-layout">
                <div className="ri-main">
                    <div className="ri-header">
                        <h1>Restaurant Info</h1>
                    </div>
                    <BasicInfoCard data={data.basic} />
                    <ContactInfoCard data={data.contact} />
                    <AddressInfoCard data={data.address} />
                </div>

                <div className="ri-side">
                    <OperationalInfoCard data={data.operational} />
                    <PlatformInfoCard data={data.platform} />
                </div>
            </div>
        </div>
    );
};

export default RestaurantInfoPage;
