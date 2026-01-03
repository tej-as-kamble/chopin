import React, { useState } from "react";
import FAQAccordion from "@/components/help/FAQAccordion";
import SupportCard from "@/components/help/SupportCard";
import { FAQS, SUPPORT_MANAGERS } from "@/data/HELP_DUMMY";
import "./HelpPage.css";

const HelpPage = () => {
  const [tab, setTab] = useState("support");

  return (
    <div className="hp-page">
      <div className="hp-header">
        <h1>Help</h1>
        <div className="hp-tabs">
          <button
            className={tab === "support" ? "active" : ""}
            onClick={() => setTab("support")}
          >
            Support
          </button>
          <button
            className={tab === "faq" ? "active" : ""}
            onClick={() => setTab("faq")}
          >
            FAQs
          </button>
        </div>
      </div>

      {tab === "faq" && <FAQAccordion faqs={FAQS} />}

      {tab === "support" && (
        <div className="hp-support-grid">
          {SUPPORT_MANAGERS.map((mgr) => (
            <SupportCard key={mgr.id} data={mgr} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HelpPage;
