import { useState } from "react";
import "./OffersPage.css";
import OfferList from "@/components/offers/OfferList";
import CreateOfferModal from "@/components/offers/CreateOfferModal";
import { OFFERS_DUMMY } from '@/data/OFFERS_DUMMY.js'

const OffersPage = () => {
    const [offers, setOffers] = useState(OFFERS_DUMMY);
    const [showModal, setShowModal] = useState(false);

    const addOffer = (offer) => {
        setOffers((prev) => [...prev, { ...offer, id: Date.now() }]);
    };

    return (
        <div className="offers-page">
            <div className="offers-header">
                <h1>Offers</h1>
                <button className="create-offer-btn" onClick={() => setShowModal(true)}>
                    + New Discount
                </button>
            </div>

            <OfferList offers={offers} setOffers={setOffers} />

            {showModal && (
                <CreateOfferModal
                    onClose={() => setShowModal(false)}
                    onCreate={addOffer}
                />
            )}
        </div>
    );
};

export default OffersPage;
