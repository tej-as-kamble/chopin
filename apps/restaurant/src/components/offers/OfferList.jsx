import "./OfferList.css";
import OfferRow from "./OfferRow";

const OfferList = ({ offers, onToggle, onDelete }) => {
    const active = offers.filter(o => o.status !== "EXPIRED");
    const expired = offers.filter(o => o.status === "EXPIRED");

    return (
        <div className="offer-list">
            <h3>Active Offers</h3>

            <div className="offer-grid">
                {active.map((offer) => (
                    <OfferRow
                        key={offer.id}
                        offer={offer}
                        onToggle={onToggle}
                        onDelete={onDelete}
                    />
                ))}
            </div>

            {expired.length > 0 && (
                <details className="expired-section">
                    <summary>Expired Offers ({expired.length})</summary>
                    <div className="offer-grid">
                        {expired.map((offer) => (
                            <OfferRow
                                key={offer.id}
                                offer={offer}
                                onToggle={onToggle}
                                onDelete={onDelete}
                            />
                        ))}
                    </div>
                </details>
            )}
        </div>
    );
};

export default OfferList;
