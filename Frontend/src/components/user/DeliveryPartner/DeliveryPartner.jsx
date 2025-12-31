import PartnerHero from "./PartnerHero";
import WhyPartner from "./WhyPartner";
import HowItWorks from "./HowItWorks";
import DownloadApp from "./DownloadApp";
import PartnerFAQ from "./PartnerFAQ";
import "./DeliveryPartner.css";

const DeliveryPartner = () => {
  return (
    <div className="partner-page">
      <PartnerHero />
      <WhyPartner />
      <HowItWorks />
      <DownloadApp />
      <PartnerFAQ />
    </div>
  );
};

export default DeliveryPartner;
